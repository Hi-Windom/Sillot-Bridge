import { fetchPost } from "../util/fetch";
export const fileTree = {
    element: undefined,
    genHTML: () => {
        return `<label class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.selectOpen}
        <div class="b3-label__text">${window.siyuan.languages.fileTree2}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-switch fn__flex-center" id="alwaysSelectOpenedFile" type="checkbox"${window.siyuan.config.fileTree.alwaysSelectOpenedFile ? " checked" : ""}/>
</label>
<label class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.fileTree7}
        <div class="b3-label__text">${window.siyuan.languages.fileTree8}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-switch fn__flex-center" id="openFilesUseCurrentTab" type="checkbox"${window.siyuan.config.fileTree.openFilesUseCurrentTab ? " checked" : ""}/>
</label>
<label class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.fileTree9}
        <div class="b3-label__text">${window.siyuan.languages.fileTree10}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-switch fn__flex-center" id="closeTabsOnStart" type="checkbox"${window.siyuan.config.fileTree.closeTabsOnStart ? " checked" : ""}/>
</label>
<label class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.fileTree18}
        <div class="b3-label__text">${window.siyuan.languages.fileTree19}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-switch fn__flex-center" id="allowCreateDeeper" type="checkbox"${window.siyuan.config.fileTree.allowCreateDeeper ? " checked" : ""}/>
</label>
<label class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.fileTree3}
        <div class="b3-label__text">${window.siyuan.languages.fileTree4}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-switch fn__flex-center" id="removeDocWithoutConfirm" type="checkbox"${window.siyuan.config.fileTree.removeDocWithoutConfirm ? " checked" : ""}/>
</label>
<label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
        ${window.siyuan.languages.fileTree12}
        <div class="b3-label__text">${window.siyuan.languages.fileTree13}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-text-field fn__flex-center fn__size200" id="docCreateSavePath" value="">
</label>
<label class="b3-label fn__flex config__item">
    <div class="fn__flex-1">
        ${window.siyuan.languages.fileTree5}
        <div class="b3-label__text">${window.siyuan.languages.fileTree6}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-text-field fn__flex-center fn__size200" id="refCreateSavePath" value="${window.siyuan.config.fileTree.refCreateSavePath}">
</label>
<label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
        ${window.siyuan.languages.fileTree16}
        <div class="b3-label__text">${window.siyuan.languages.fileTree17}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-text-field fn__flex-center fn__size200" id="maxListCount" type="number" min="1" max="10240" value="${window.siyuan.config.fileTree.maxListCount}">
</label>
<label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
        ${window.siyuan.languages.tabLimit}
        <div class="b3-label__text">${window.siyuan.languages.tabLimit1}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-text-field fn__flex-center fn__size200" id="maxOpenTabCount" type="number" min="1" max="32" value="${window.siyuan.config.fileTree.maxOpenTabCount}">
</label>`;
    },
    _send() {
        // 限制页签最大打开数量为 `32` https://github.com/siyuan-note/siyuan/issues/6303
        let inputMaxOpenTabCount = parseInt(fileTree.element.querySelector("#maxOpenTabCount").value);
        if (32 < inputMaxOpenTabCount) {
            inputMaxOpenTabCount = 32;
            fileTree.element.querySelector("#maxOpenTabCount").value = "32";
        }
        if (1 > inputMaxOpenTabCount) {
            inputMaxOpenTabCount = 1;
            fileTree.element.querySelector("#maxOpenTabCount").value = "1";
        }
        fetchPost("/api/setting/setFiletree", {
            sort: window.siyuan.config.fileTree.sort,
            alwaysSelectOpenedFile: fileTree.element.querySelector("#alwaysSelectOpenedFile").checked,
            refCreateSavePath: fileTree.element.querySelector("#refCreateSavePath").value,
            docCreateSavePath: fileTree.element.querySelector("#docCreateSavePath").value,
            openFilesUseCurrentTab: fileTree.element.querySelector("#openFilesUseCurrentTab").checked,
            closeTabsOnStart: fileTree.element.querySelector("#closeTabsOnStart").checked,
            allowCreateDeeper: fileTree.element.querySelector("#allowCreateDeeper").checked,
            removeDocWithoutConfirm: fileTree.element.querySelector("#removeDocWithoutConfirm").checked,
            maxListCount: parseInt(fileTree.element.querySelector("#maxListCount").value),
            maxOpenTabCount: inputMaxOpenTabCount,
        }, response => {
            fileTree.onSetfiletree(response.data);
        });
    },
    bindEvent: () => {
        fileTree.element.querySelector("#docCreateSavePath").value = window.siyuan.config.fileTree.docCreateSavePath;
        fileTree.element.querySelector("#refCreateSavePath").value = window.siyuan.config.fileTree.refCreateSavePath;
        fileTree.element.querySelectorAll("input").forEach((item) => {
            item.addEventListener("change", () => {
                fileTree._send();
            });
        });
    },
    onSetfiletree: (fileTree) => {
        window.siyuan.config.fileTree = fileTree;
    }
};
