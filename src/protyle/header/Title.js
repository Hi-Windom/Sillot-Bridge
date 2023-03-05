import { focusBlock, focusByOffset, focusByRange, focusByWbr, getEditorRange, getSelectionOffset, } from "../util/selection";
import { fetchPost } from "../../util/fetch";
import { replaceFileName, validateName } from "../../editor/rename";
import { MenuItem } from "../../menus/Menu";
import { copySubMenu, movePathToMenu, openFileAttr, openFileWechatNotify, } from "../../menus/commonMenuItem";
/// #if !BROWSER
import { getCurrentWindow } from "@electron/remote";
/// #endif
import { Constants } from "../../constants";
import { hasClosestByClassName } from "../util/hasClosest";
import { matchHotKey } from "../util/hotKey";
import { readText, updateHotkeyTip, writeText } from "../util/compatibility";
import { escapeHtml } from "../../util/escape";
// import * as dayjs from "dayjs";
import { format, parse } from "date-fns";
import { setPanelFocus } from "../../layout/util";
import { updatePanelByEditor } from "../../editor/util";
import { openBacklink, openGraph, openOutline } from "../../layout/dock/util";
import { setTitle } from "../../dialog/processSystem";
import { getNoContainerElement } from "../wysiwyg/getBlock";
import { commonHotkey } from "../wysiwyg/commonHotkey";
import { code160to32 } from "../util/code160to32";
import { deleteFile } from "../../editor/deleteFile";
import { genEmptyElement } from "../../block/util";
import { transaction } from "../wysiwyg/transaction";
import { hideTooltip } from "../../dialog/tooltip";
import { transferBlockRef } from "../../menus/block";
import { openCardByData } from "../../card/openCard";
import { makeCard, quickMakeCard } from "../../card/makeCard";
import { viewCards } from "../../card/viewCards";
export class Title {
    element;
    editElement;
    timeout;
    constructor(protyle) {
        this.element = document.createElement("div");
        this.element.className = "protyle-title";
        if (window.siyuan.config.editor.displayBookmarkIcon) {
            this.element.classList.add("protyle-wysiwyg--attr");
        }
        this.element.innerHTML = `<span aria-label="${window.siyuan.languages.gutterTip2}" class="protyle-title__icon" data-type="a" data-position="right"><svg><use xlink:href="#iconFile"></use></svg></span>
<div contenteditable="true" data-position="center" spellcheck="${window.siyuan.config.editor.spellcheck}" class="protyle-title__input" data-tip="${window.siyuan.languages._kernel[16]}"></div><div class="protyle-attr"></div>`;
        this.editElement = this.element.querySelector(".protyle-title__input");
        this.editElement.addEventListener("paste", (event) => {
            event.stopPropagation();
            event.preventDefault();
            document.execCommand("insertText", false, replaceFileName(event.clipboardData.getData("text/plain")));
            this.rename(protyle);
        });
        this.editElement.addEventListener("click", () => {
            if (protyle.model) {
                setPanelFocus(protyle.model.element.parentElement.parentElement);
                updatePanelByEditor(protyle, false);
            }
            protyle.toolbar?.element.classList.add("fn__none");
        });
        this.editElement.addEventListener("input", (event) => {
            if (event.isComposing) {
                return;
            }
            this.rename(protyle);
        });
        this.editElement.addEventListener("compositionend", () => {
            this.rename(protyle);
        });
        this.editElement.addEventListener("drop", (event) => {
            // https://ld246.com/article/1661911210429
            event.stopPropagation();
            event.preventDefault();
        });
        this.editElement.addEventListener("keydown", (event) => {
            if (event.isComposing) {
                return;
            }
            if (commonHotkey(protyle, event)) {
                return true;
            }
            /// #if !BROWSER
            if (matchHotKey(window.siyuan.config.keymap.editor.general.undo.custom, event)) {
                getCurrentWindow().webContents.undo();
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            if (matchHotKey(window.siyuan.config.keymap.editor.general.redo.custom, event)) {
                getCurrentWindow().webContents.redo();
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            /// #endif
            if (event.key === "ArrowDown") {
                const noContainerElement = getNoContainerElement(protyle.wysiwyg.element.firstElementChild);
                // https://github.com/siyuan-note/siyuan/issues/4923
                if (noContainerElement) {
                    focusBlock(noContainerElement, protyle.wysiwyg.element);
                }
                event.preventDefault();
                event.stopPropagation();
            }
            else if (event.key === "Enter") {
                const newId = Lute.NewNodeID();
                const newElement = genEmptyElement(false, true, newId);
                protyle.wysiwyg.element.insertAdjacentElement("afterbegin", newElement);
                focusByWbr(newElement, protyle.toolbar.range || getEditorRange(newElement));
                transaction(protyle, [{
                        action: "insert",
                        data: newElement.outerHTML,
                        id: newId,
                        parentID: protyle.block.parentID
                    }], [{
                        action: "delete",
                        id: newId,
                    }]);
                event.preventDefault();
                event.stopPropagation();
            }
            else if (matchHotKey(window.siyuan.config.keymap.editor.general.attr.custom, event)) {
                fetchPost("/api/block/getDocInfo", {
                    id: protyle.block.rootID
                }, (response) => {
                    openFileAttr(response.data.ial, protyle.block.rootID);
                });
                event.preventDefault();
                event.stopPropagation();
            }
            else if (matchHotKey(window.siyuan.config.keymap.editor.general.quickMakeCard.custom, event)) {
                quickMakeCard([this.element]);
                event.preventDefault();
                event.stopPropagation();
                return true;
            }
            else if (matchHotKey("⌘A", event)) {
                getEditorRange(this.editElement).selectNodeContents(this.editElement);
                event.preventDefault();
                event.stopPropagation();
            }
            else if (matchHotKey(window.siyuan.config.keymap.editor.general.copyBlockRef.custom, event)) {
                writeText(`((${protyle.block.rootID} '${this.editElement.textContent.replace(/'/g, "&#39;")}'))`);
                event.preventDefault();
                event.stopPropagation();
            }
            else if (matchHotKey(window.siyuan.config.keymap.editor.general.copyID.custom, event)) {
                writeText(protyle.block.rootID);
                event.preventDefault();
                event.stopPropagation();
            }
            else if (matchHotKey(window.siyuan.config.keymap.editor.general.copyBlockEmbed.custom, event)) {
                writeText(`{{select * from blocks where id='${protyle.block.rootID}'}}`);
                event.preventDefault();
                event.stopPropagation();
            }
            else if (matchHotKey(window.siyuan.config.keymap.editor.general.copyProtocol.custom, event)) {
                writeText(`siyuan://blocks/${protyle.block.rootID}`);
                event.preventDefault();
                event.stopPropagation();
            }
        });
        const iconElement = this.element.querySelector(".protyle-title__icon");
        iconElement.addEventListener("click", () => {
            if (window.siyuan.shiftIsPressed) {
                fetchPost("/api/block/getDocInfo", {
                    id: protyle.block.rootID
                }, (response) => {
                    openFileAttr(response.data.ial, protyle.block.rootID);
                });
            }
            else {
                const iconRect = iconElement.getBoundingClientRect();
                this.renderMenu(protyle, { x: iconRect.left, y: iconRect.top + 14 });
            }
        });
        this.element.addEventListener("contextmenu", (event) => {
            if (getSelection().rangeCount === 0) {
                this.renderMenu(protyle, { x: event.clientX, y: event.clientY });
                return;
            }
            protyle.toolbar?.element.classList.add("fn__none");
            window.siyuan.menus.menu.remove();
            const range = getEditorRange(this.editElement);
            if (range.toString() !== "") {
                window.siyuan.menus.menu.append(new MenuItem({
                    icon: "iconCopy",
                    accelerator: "⌘C",
                    label: window.siyuan.languages.copy,
                    click: () => {
                        focusByRange(getEditorRange(this.editElement));
                        document.execCommand("copy");
                    }
                }).element);
                window.siyuan.menus.menu.append(new MenuItem({
                    icon: "iconCut",
                    accelerator: "⌘X",
                    label: window.siyuan.languages.cut,
                    click: () => {
                        focusByRange(getEditorRange(this.editElement));
                        document.execCommand("cut");
                        setTimeout(() => {
                            this.rename(protyle);
                        }, Constants.TIMEOUT_INPUT);
                    }
                }).element);
                window.siyuan.menus.menu.append(new MenuItem({
                    icon: "iconTrashcan",
                    accelerator: "⌫",
                    label: window.siyuan.languages.delete,
                    click: () => {
                        const range = getEditorRange(this.editElement);
                        range.extractContents();
                        focusByRange(range);
                        setTimeout(() => {
                            this.rename(protyle);
                        }, Constants.TIMEOUT_INPUT);
                    }
                }).element);
            }
            window.siyuan.menus.menu.append(new MenuItem({
                label: window.siyuan.languages.paste,
                accelerator: "⌘V",
                click: async () => {
                    focusByRange(getEditorRange(this.editElement));
                    // 不能使用 execCommand https://github.com/siyuan-note/siyuan/issues/7045
                    const text = await readText();
                    document.execCommand("insertText", false, replaceFileName(text));
                    this.rename(protyle);
                }
            }).element);
            window.siyuan.menus.menu.append(new MenuItem({
                label: window.siyuan.languages.selectAll,
                accelerator: "⌘A",
                click: () => {
                    range.selectNodeContents(this.editElement);
                    focusByRange(range);
                }
            }).element);
            window.siyuan.menus.menu.popup({ x: event.clientX, y: event.clientY });
        });
        this.element.querySelector(".protyle-attr").addEventListener("click", (event) => {
            fetchPost("/api/block/getDocInfo", {
                id: protyle.block.rootID
            }, (response) => {
                const attrBookmarkElement = hasClosestByClassName(event.target, "protyle-attr--bookmark");
                if (attrBookmarkElement) {
                    openFileAttr(response.data.ial, protyle.block.rootID, "bookmark");
                    event.stopPropagation();
                    return;
                }
                const attrNameElement = hasClosestByClassName(event.target, "protyle-attr--name");
                if (attrNameElement) {
                    openFileAttr(response.data.ial, protyle.block.rootID, "name");
                    event.stopPropagation();
                    return;
                }
                const attrAliasElement = hasClosestByClassName(event.target, "protyle-attr--alias");
                if (attrAliasElement) {
                    openFileAttr(response.data.ial, protyle.block.rootID, "alias");
                    event.stopPropagation();
                    return;
                }
                const attrMemoElement = hasClosestByClassName(event.target, "protyle-attr--memo");
                if (attrMemoElement) {
                    openFileAttr(response.data.ial, protyle.block.rootID, "memo");
                    event.stopPropagation();
                    return;
                }
            });
        });
    }
    rename(protyle) {
        clearTimeout(this.timeout);
        if (!validateName(this.editElement.textContent, this.editElement)) {
            // 字数过长会导致滚动
            const offset = getSelectionOffset(this.editElement);
            this.setTitle(this.editElement.textContent.substring(0, Constants.SIZE_TITLE));
            focusByOffset(this.editElement, offset.start, offset.end);
            return false;
        }
        hideTooltip();
        this.timeout = window.setTimeout(() => {
            const fileName = replaceFileName(this.editElement.textContent);
            fetchPost("/api/filetree/renameDoc", {
                notebook: protyle.notebookId,
                path: protyle.path,
                title: fileName,
            });
            this.setTitle(fileName);
            setTitle(fileName);
        }, Constants.TIMEOUT_INPUT);
    }
    renderMenu(protyle, position) {
        fetchPost("/api/block/getDocInfo", {
            id: protyle.block.rootID
        }, (response) => {
            window.siyuan.menus.menu.remove();
            window.siyuan.menus.menu.append(new MenuItem({
                label: window.siyuan.languages.copy,
                icon: "iconCopy",
                type: "submenu",
                submenu: copySubMenu(protyle.block.rootID)
            }).element);
            if (!protyle.disabled) {
                window.siyuan.menus.menu.append(movePathToMenu([protyle.path]));
                window.siyuan.menus.menu.append(new MenuItem({
                    icon: "iconTrashcan",
                    label: window.siyuan.languages.delete,
                    click: () => {
                        deleteFile(protyle.notebookId, protyle.path, escapeHtml(this.editElement.textContent));
                    }
                }).element);
                window.siyuan.menus.menu.append(new MenuItem({ type: "separator" }).element);
                const countElement = this.element.lastElementChild.querySelector(".protyle-attr--refcount");
                if (countElement?.textContent) {
                    transferBlockRef(protyle.block.rootID);
                }
                window.siyuan.menus.menu.append(new MenuItem({
                    label: window.siyuan.languages.attr,
                    accelerator: window.siyuan.config.keymap.editor.general.attr.custom + "/" + updateHotkeyTip("⇧Click"),
                    click() {
                        openFileAttr(response.data.ial, protyle.block.rootID);
                    }
                }).element);
            }
            window.siyuan.menus.menu.append(new MenuItem({ type: "separator" }).element);
            window.siyuan.menus.menu.append(new MenuItem({
                icon: "iconAlignCenter",
                label: window.siyuan.languages.outline,
                accelerator: window.siyuan.config.keymap.editor.general.outline.custom,
                click: () => {
                    openOutline(protyle);
                }
            }).element);
            window.siyuan.menus.menu.append(new MenuItem({
                icon: "iconLink",
                label: window.siyuan.languages.backlinks,
                accelerator: window.siyuan.config.keymap.editor.general.backlinks.custom,
                click: () => {
                    openBacklink(protyle);
                }
            }).element);
            window.siyuan.menus.menu.append(new MenuItem({
                icon: "iconGraph",
                label: window.siyuan.languages.graphView,
                accelerator: window.siyuan.config.keymap.editor.general.graphView.custom,
                click: () => {
                    openGraph(protyle);
                }
            }).element);
            window.siyuan.menus.menu.append(new MenuItem({ type: "separator" }).element);
            window.siyuan.menus.menu.append(new MenuItem({
                label: window.siyuan.languages.wechatReminder,
                icon: "iconMp",
                click() {
                    openFileWechatNotify(protyle);
                }
            }).element);
            window.siyuan.menus.menu.append(new MenuItem({
                label: window.siyuan.languages.riffCard,
                type: "submenu",
                icon: "iconRiffCard",
                submenu: [{
                        iconHTML: Constants.ZWSP,
                        label: window.siyuan.languages.spaceRepetition,
                        click: () => {
                            fetchPost("/api/riff/getTreeRiffDueCards", { rootID: protyle.block.rootID }, (response) => {
                                openCardByData(response.data, `<span data-id="${protyle.block.rootID}"  class="fn__flex-center">${escapeHtml(this.editElement.textContent)}</span>`);
                            });
                        }
                    }, {
                        iconHTML: Constants.ZWSP,
                        label: window.siyuan.languages.mgmt,
                        click: () => {
                            viewCards(protyle.block.rootID, escapeHtml(this.editElement.textContent), "Tree");
                        }
                    }, {
                        iconHTML: Constants.ZWSP,
                        label: window.siyuan.languages.quickMakeCard,
                        accelerator: window.siyuan.config.keymap.editor.general.quickMakeCard.custom,
                        click: () => {
                            quickMakeCard([this.element]);
                        }
                    }, {
                        iconHTML: Constants.ZWSP,
                        label: window.siyuan.languages.addToDeck,
                        click: () => {
                            makeCard([protyle.block.rootID]);
                        }
                    }],
            }).element);
            window.siyuan.menus.menu.append(new MenuItem({ type: "separator" }).element);
            window.siyuan.menus.menu.append(new MenuItem({
                iconHTML: Constants.ZWSP,
                type: "readonly",
                label: `${window.siyuan.languages.modifiedAt} ${format(new Date(~~response.data.ial.updated), 'yyyy-MM-dd HH:mm:ss')}<br>
${window.siyuan.languages.createdAt} ${format(new Date(~~response.data.ial.id.subtring(0, 14)), 'yyyy-MM-dd HH:mm:ss')}`
            }).element);
            window.siyuan.menus.menu.popup(position);
        });
    }
    setTitle(title) {
        if (code160to32(title) !== code160to32(this.editElement.textContent)) {
            this.editElement.textContent = title === "Untitled" ? "" : title;
        }
    }
    render(protyle, response, refresh = false) {
        if (this.editElement.getAttribute("data-render") === "true" && !refresh) {
            return false;
        }
        this.element.setAttribute("data-node-id", protyle.block.rootID);
        if (response.data.ial["custom-riff-decks"]) {
            this.element.setAttribute("custom-riff-decks", response.data.ial["custom-riff-decks"]);
        }
        protyle.background.render(response.data.ial, protyle.block.rootID);
        protyle.wysiwyg.renderCustom(response.data.ial);
        this.editElement.setAttribute("data-render", "true");
        this.setTitle(response.data.ial.title);
        let nodeAttrHTML = "";
        if (response.data.ial.bookmark) {
            nodeAttrHTML += `<div class="protyle-attr--bookmark">${Lute.EscapeHTMLStr(response.data.ial.bookmark)}</div>`;
        }
        if (response.data.ial.name) {
            nodeAttrHTML += `<div class="protyle-attr--name"><svg><use xlink:href="#iconN"></use></svg>${Lute.EscapeHTMLStr(response.data.ial.name)}</div>`;
        }
        if (response.data.ial.alias) {
            nodeAttrHTML += `<div class="protyle-attr--alias"><svg><use xlink:href="#iconA"></use></svg>${Lute.EscapeHTMLStr(response.data.ial.alias)}</div>`;
        }
        if (response.data.ial.memo) {
            nodeAttrHTML += `<div class="protyle-attr--memo b3-tooltips b3-tooltips__sw" aria-label="${Lute.EscapeHTMLStr(response.data.ial.memo)}"><svg><use xlink:href="#iconM"></use></svg></div>`;
        }
        this.element.querySelector(".protyle-attr").innerHTML = nodeAttrHTML;
        if (response.data.refCount !== 0) {
            this.element.querySelector(".protyle-attr").insertAdjacentHTML("beforeend", `<div class="protyle-attr--refcount popover__block" data-defids='${JSON.stringify([protyle.block.rootID])}' data-id='${JSON.stringify(response.data.refIDs)}'>${response.data.refCount}</div>`);
        }
        // 存在设置新建文档名模板，不能使用 Untitled 进行判断，https://ld246.com/article/1649301009888
        if (new Date().getTime() - parse(response.data.id.split("-")[0], "yyyyMMdd", new Date()).getTime() < 2000) {
            const range = this.editElement.ownerDocument.createRange();
            range.selectNodeContents(this.editElement);
            focusByRange(range);
        }
    }
}