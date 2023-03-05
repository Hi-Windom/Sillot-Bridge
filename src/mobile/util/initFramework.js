import { Constants } from "../../constants";
import { closePanel } from "./closePanel";
import { openMobileFileById } from "../editor";
import { validateName } from "../../editor/rename";
import { getEventName } from "../../protyle/util/compatibility";
import { mountHelp } from "../../util/mount";
import { fetchPost } from "../../util/fetch";
import { setInlineStyle } from "../../util/assets";
import { renderSnippet } from "../../config/util/snippets";
import { setEmpty } from "./setEmpty";
import { getOpenNotebookCount } from "../../util/pathName";
import { popMenu } from "./menu";
import { MobileFiles } from "./MobileFiles";
import { MobileOutline } from "./MobileOutline";
import { hasTopClosestByTag } from "../../protyle/util/hasClosest";
import { MobileBacklinks } from "./MobileBacklinks";
import { MobileBookmarks } from "./MobileBookmarks";
import { MobileTags } from "./MobileTags";
import { hideKeyboard, hideKeyboardToolbar, initKeyboardToolbar } from "./keyboardToolbar";
import { getSearch } from "../../util/functions";
import { syncGuide } from "../../sync/syncGuide";
export const initFramework = () => {
    setInlineStyle();
    renderSnippet();
    initKeyboardToolbar();
    const scrimElement = document.querySelector(".scrim");
    const sidebarElement = document.getElementById("sidebar");
    let outline;
    let backlink;
    let bookmark;
    let tag;
    sidebarElement.querySelector(".toolbar--border").addEventListener(getEventName(), (event) => {
        const svgElement = hasTopClosestByTag(event.target, "svg");
        if (!svgElement || svgElement.classList.contains("toolbar__icon--active")) {
            return;
        }
        const type = svgElement.getAttribute("data-type");
        sidebarElement.querySelectorAll(".toolbar--border svg").forEach(item => {
            const itemType = item.getAttribute("data-type");
            if (itemType === type) {
                if (type === "sidebar-outline-tab") {
                    if (!outline) {
                        outline = new MobileOutline();
                    }
                    else {
                        outline.update();
                    }
                }
                else if (type === "sidebar-backlink-tab") {
                    if (!backlink) {
                        backlink = new MobileBacklinks();
                    }
                    else {
                        backlink.update();
                    }
                }
                else if (type === "sidebar-bookmark-tab") {
                    if (!backlink) {
                        bookmark = new MobileBookmarks();
                    }
                    else {
                        backlink.update();
                    }
                }
                else if (type === "sidebar-tag-tab") {
                    if (!backlink) {
                        tag = new MobileTags();
                    }
                    else {
                        tag.update();
                    }
                }
                svgElement.classList.add("toolbar__icon--active");
                sidebarElement.lastElementChild.querySelector(`[data-type="${itemType.replace("-tab", "")}"]`).classList.remove("fn__none");
            }
            else {
                item.classList.remove("toolbar__icon--active");
                sidebarElement.lastElementChild.querySelector(`[data-type="${itemType.replace("-tab", "")}"]`).classList.add("fn__none");
            }
        });
    });
    window.siyuan.mobile.files = new MobileFiles();
    document.getElementById("toolbarFile").addEventListener("click", () => {
        hideKeyboardToolbar();
        hideKeyboard();
        sidebarElement.style.left = "0";
        document.querySelector(".scrim").classList.remove("fn__none");
        const type = sidebarElement.querySelector(".toolbar--border .toolbar__icon--active").getAttribute("data-type");
        if (type === "sidebar-outline-tab") {
            outline.update();
        }
        else if (type === "sidebar-backlink-tab") {
            backlink.update();
        }
        else if (type === "sidebar-bookmark-tab") {
            bookmark.update();
        }
        else if (type === "sidebar-tag-tab") {
            tag.update();
        }
    });
    // 用 touchstart 会导致键盘不收起
    document.getElementById("toolbarMore").addEventListener("click", () => {
        popMenu();
    });
    const editElement = document.getElementById("toolbarEdit");
    if (window.siyuan.config.readonly) {
        editElement.classList.add("fn__none");
    }
    const inputElement = document.getElementById("toolbarName");
    const editIconElement = editElement.querySelector("use");
    if (window.siyuan.config.readonly || window.siyuan.config.editor.readOnly) {
        inputElement.readOnly = true;
        editIconElement.setAttribute("xlink:href", "#iconPreview");
    }
    else {
        inputElement.readOnly = false;
        editIconElement.setAttribute("xlink:href", "#iconEdit");
    }
    editElement.addEventListener(getEventName(), () => {
        window.siyuan.config.editor.readOnly = editIconElement.getAttribute("xlink:href") === "#iconEdit";
        fetchPost("/api/setting/setEditor", window.siyuan.config.editor);
    });
    if (navigator.userAgent.indexOf("iPhone") > -1 && !window.siyuan.config.readonly && !window.siyuan.config.editor.readOnly) {
        // 不知道为什么 iPhone 中如果是编辑状态，点击文档后无法点击标题
        setTimeout(() => {
            editElement.dispatchEvent(new CustomEvent(getEventName()));
            setTimeout(() => {
                editElement.dispatchEvent(new CustomEvent(getEventName()));
            }, Constants.TIMEOUT_INPUT);
        }, Constants.TIMEOUT_INPUT);
    }
    scrimElement.addEventListener(getEventName(), () => {
        closePanel();
    });
    document.getElementById("modelClose").addEventListener(getEventName(), () => {
        closePanel();
    });
    initEditorName();
    if (window.siyuan.config.openHelp) {
        mountHelp();
    }
    const transactionTipElement = document.getElementById("transactionTip");
    transactionTipElement.innerHTML = `${window.siyuan.languages.waitSync} <button class="b3-button">${window.siyuan.languages.syncNow}</button>`;
    transactionTipElement.querySelector(".b3-button").addEventListener(getEventName(), () => {
        syncGuide();
    });
    if (getOpenNotebookCount() > 0) {
        if (window.JSAndroid) {
            if (window.openFileByURL(window.JSAndroid.getBlockURL())) {
                return;
            }
        }
        const openId = getSearch("id");
        if (openId) {
            openMobileFileById(openId, getSearch("focus") === "1" ? [Constants.CB_GET_ALL, Constants.CB_GET_FOCUS] : [Constants.CB_GET_FOCUS, Constants.CB_GET_CONTEXT]);
            return;
        }
        const localDoc = window.siyuan.storage[Constants.LOCAL_DOCINFO];
        fetchPost("/api/block/checkBlockExist", { id: localDoc.id }, existResponse => {
            if (existResponse.data) {
                openMobileFileById(localDoc.id, localDoc.action);
            }
            else {
                fetchPost("/api/block/getRecentUpdatedBlocks", {}, (response) => {
                    if (response.data.length !== 0) {
                        openMobileFileById(response.data[0].id, [Constants.CB_GET_HL, Constants.CB_GET_CONTEXT]);
                    }
                    else {
                        setEmpty();
                    }
                });
            }
        });
        return;
    }
    setEmpty();
};
const initEditorName = () => {
    const inputElement = document.getElementById("toolbarName");
    inputElement.setAttribute("placeholder", window.siyuan.languages._kernel[16]);
    inputElement.addEventListener("blur", () => {
        if (window.siyuan.config.readonly || window.siyuan.config.editor.readOnly || window.siyuan.mobile.editor.protyle.disabled) {
            return;
        }
        if (!validateName(inputElement.value)) {
            inputElement.value = inputElement.value.substring(0, Constants.SIZE_TITLE);
            return false;
        }
        fetchPost("/api/filetree/renameDoc", {
            notebook: window.siyuan.mobile.editor.protyle.notebookId,
            path: window.siyuan.mobile.editor.protyle.path,
            title: inputElement.value,
        });
    });
};