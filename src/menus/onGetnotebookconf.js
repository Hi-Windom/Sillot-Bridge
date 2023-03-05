import { Dialog } from "../dialog";
import { fetchPost } from "../util/fetch";
import { isMobile } from "../util/functions";
import { escapeHtml } from "../util/escape";
import { writeText } from "../protyle/util/compatibility";
import { showMessage } from "../dialog/message";
export const onGetnotebookconf = (data) => {
    const titleHTML = `<div class="fn__flex">${escapeHtml(data.name)}
<div class="fn__space"></div>
<button class="b3-button b3-button--small">${window.siyuan.languages.copy} ID</button></div>`;
    const contentHTML = `<div style="max-height: 80vh;overflow: auto;">
<div class="b3-label">
    ${window.siyuan.languages.fileTree12}
    <div class="fn__hr"></div>
    <div class="b3-label__text">${window.siyuan.languages.fileTree13}</div>
    <div class="fn__hr"></div>
    <input class="b3-text-field fn__flex-center fn__block" id="docCreateSavePath" value="">
</div>
<div class="b3-label">
    ${window.siyuan.languages.fileTree5}
    <div class="fn__hr"></div>
    <div class="b3-label__text">${window.siyuan.languages.fileTree6}</div>
    <div class="fn__hr"></div>
    <input class="b3-text-field fn__flex-center fn__block" id="refCreateSavePath" value="${window.siyuan.config.fileTree.refCreateSavePath}">
</div>
<div class="b3-label">
    ${window.siyuan.languages.fileTree11}
    <div class="fn__hr"></div>
    <div class="b3-label__text">${window.siyuan.languages.fileTree14}</div>
    <div class="fn__hr"></div>
    <input class="b3-text-field fn__flex-center fn__block" id="dailyNoteSavePath" value="">
    <div class="fn__hr"></div>
    <div class="b3-label__text">${window.siyuan.languages.fileTree15}</div>
    <div class="fn__hr"></div>
    <input class="b3-text-field fn__flex-center fn__block" id="dailyNoteTemplatePath" value="${data.conf.dailyNoteTemplatePath}">
</div></div>`;
    let contentElement;
    if (isMobile()) {
        contentElement = document.getElementById("model");
        contentElement.style.top = "0";
        contentElement.querySelector(".toolbar__icon").innerHTML = '<use xlink:href="#iconSettings"></use>';
        contentElement.querySelector(".toolbar__text").innerHTML = titleHTML;
        contentElement.querySelector("#modelMain").innerHTML = contentHTML;
    }
    else {
        const dialog = new Dialog({
            width: "80vw",
            title: titleHTML,
            content: contentHTML
        });
        contentElement = dialog.element;
    }
    contentElement.querySelector(".b3-button--small").addEventListener("click", () => {
        writeText(data.box);
        showMessage(window.siyuan.languages.copied);
    });
    const dailyNoteSavePathElement = contentElement.querySelector("#dailyNoteSavePath");
    dailyNoteSavePathElement.value = data.conf.dailyNoteSavePath;
    const docCreateSavePathElement = contentElement.querySelector("#docCreateSavePath");
    docCreateSavePathElement.value = data.conf.docCreateSavePath;
    const refCreateSavePathElement = contentElement.querySelector("#refCreateSavePath");
    refCreateSavePathElement.value = data.conf.refCreateSavePath;
    const dailyNoteTemplatePathElement = contentElement.querySelector("#dailyNoteTemplatePath");
    dailyNoteTemplatePathElement.value = data.conf.dailyNoteTemplatePath;
    contentElement.querySelectorAll("input").forEach((item) => {
        item.addEventListener("change", () => {
            fetchPost("/api/notebook/setNotebookConf", {
                notebook: data.box,
                conf: {
                    refCreateSavePath: refCreateSavePathElement.value,
                    docCreateSavePath: docCreateSavePathElement.value,
                    dailyNoteSavePath: dailyNoteSavePathElement.value,
                    dailyNoteTemplatePath: dailyNoteTemplatePathElement.value,
                }
            });
        });
    });
};
