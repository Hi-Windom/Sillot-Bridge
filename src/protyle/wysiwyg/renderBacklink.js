import { getIconByType } from "../../editor/getIcon";
import { removeLoading } from "../ui/initUI";
import { fetchPost } from "../../util/fetch";
import { Constants } from "../../constants";
import { processRender } from "../util/processCode";
import { highlightRender } from "../markdown/highlightRender";
import { blockRender } from "../markdown/blockRender";
import { disabledForeverProtyle, disabledProtyle } from "../util/onGet";
export const renderBacklink = (protyle, backlinkData) => {
    protyle.block.showAll = true;
    let html = "";
    backlinkData.forEach(item => {
        html += genBreadcrumb(item.blockPaths) + setBacklinkFold(item.dom, item.expand);
    });
    protyle.wysiwyg.element.innerHTML = html;
    processRender(protyle.wysiwyg.element);
    highlightRender(protyle.wysiwyg.element);
    blockRender(protyle, protyle.wysiwyg.element);
    removeLoading(protyle);
    if (window.siyuan.config.readonly || window.siyuan.config.editor.readOnly) {
        disabledProtyle(protyle);
    }
};
// 传递型折叠处理
export const foldPassiveType = (expand, element) => {
    if (element.firstElementChild.classList.contains("li")) {
        if (expand) {
            element.querySelectorAll(".li .li .li").forEach(item => {
                if (item.childElementCount > 3) {
                    item.setAttribute("fold", "1");
                }
            });
        }
        else {
            element.firstElementChild.setAttribute("fold", "1");
        }
    }
    else if (element.firstElementChild.getAttribute("data-type") === "NodeHeading") {
        Array.from(element.children).forEach((item, index) => {
            if ((expand && index > 2) || (!expand && index > 1)) {
                if ((expand && index === 3) || (!expand && index === 2)) {
                    item.insertAdjacentHTML("beforebegin", '<div style="max-width: 100%;justify-content: center;" contenteditable="false" class="protyle-breadcrumb__item"><svg><use xlink:href="#iconMore"></use></svg></div>');
                }
                item.classList.add("fn__none");
            }
        });
    }
};
const setBacklinkFold = (html, expand) => {
    const tempDom = document.createElement("template");
    tempDom.innerHTML = html;
    foldPassiveType(expand, tempDom.content);
    return tempDom.innerHTML;
};
export const loadBreadcrumb = (protyle, element) => {
    fetchPost("/api/filetree/getDoc", {
        id: element.getAttribute("data-id"),
        size: Constants.SIZE_GET_MAX,
    }, getResponse => {
        element.parentElement.querySelector(".protyle-breadcrumb__item--active").classList.remove("protyle-breadcrumb__item--active");
        element.classList.add("protyle-breadcrumb__item--active");
        let nextElement = element.parentElement.nextElementSibling;
        while (nextElement && !nextElement.classList.contains("protyle-breadcrumb__bar")) {
            const tempElement = nextElement;
            nextElement = nextElement.nextElementSibling;
            tempElement.remove();
        }
        element.parentElement.insertAdjacentHTML("afterend", setBacklinkFold(getResponse.data.content, true));
        processRender(element.parentElement.parentElement);
        highlightRender(element.parentElement.parentElement);
        blockRender(protyle, element.parentElement.parentElement);
        if (getResponse.data.isSyncing) {
            disabledForeverProtyle(protyle);
        }
        else if (window.siyuan.config.readonly || window.siyuan.config.editor.readOnly) {
            disabledProtyle(protyle);
        }
        else if (element.parentElement.parentElement.classList.contains("protyle-wysiwyg__embed")) {
            // 嵌入块
            element.parentElement.parentElement.querySelectorAll('[contenteditable="true"][spellcheck]').forEach(item => {
                item.setAttribute("contenteditable", "false");
            });
        }
    });
};
export const getBacklinkHeadingMore = (moreElement) => {
    let nextElement = moreElement.nextElementSibling;
    while (nextElement && !nextElement.classList.contains("protyle-breadcrumb__bar")) {
        nextElement.classList.remove("fn__none");
        nextElement = nextElement.nextElementSibling;
    }
    moreElement.remove();
};
export const genBreadcrumb = (blockPaths, renderFirst = false) => {
    let html = "";
    blockPaths.forEach((item, index) => {
        if (index === 0 && !renderFirst) {
            return;
        }
        html += `<span class="protyle-breadcrumb__item${index === blockPaths.length - 1 ? " protyle-breadcrumb__item--active" : ""}" data-id="${item.id}">
    <svg class="popover__block" data-id="${item.id}"><use xlink:href="#${getIconByType(item.type, item.subType)}"></use></svg>
    <span class="protyle-breadcrumb__text" title="${item.name}">${item.name}</span>
</span>`;
        if (index !== blockPaths.length - 1) {
            html += '<svg class="protyle-breadcrumb__arrow"><use xlink:href="#iconRight"></use></svg>';
        }
    });
    return `<div contenteditable="false" class="protyle-breadcrumb__bar protyle-breadcrumb__bar--nowrap">${html}</div>`;
};