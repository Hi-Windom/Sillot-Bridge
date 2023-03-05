import { Protyle } from "../protyle";
import { Model } from "../layout/Model";
import { disabledProtyle } from "../protyle/util/onGet";
import { setPadding } from "../protyle/ui/initUI";
import { getAllModels } from "../layout/getAll";
import { countBlockWord } from "../layout/status";
export class Editor extends Model {
    element;
    editor;
    headElement;
    constructor(options) {
        super({
            id: options.tab.id,
        });
        if (window.siyuan.config.fileTree.openFilesUseCurrentTab) {
            options.tab.headElement.classList.add("item--unupdate");
        }
        this.headElement = options.tab.headElement;
        this.element = options.tab.panelElement;
        this.initProtyle(options);
    }
    initProtyle(options) {
        this.editor = new Protyle(this.element, {
            action: options.action || [],
            blockId: options.blockId,
            mode: options.mode,
            render: {
                title: true,
                background: true,
                scroll: true,
            },
            scrollAttr: options.scrollAttr,
            typewriterMode: true,
            after: (editor) => {
                if (window.siyuan.config.readonly || window.siyuan.config.editor.readOnly) {
                    disabledProtyle(editor.protyle);
                }
                if (window.siyuan.editorIsFullscreen) {
                    editor.protyle.element.classList.add("fullscreen");
                    setPadding(editor.protyle);
                    getAllModels().editor.forEach(item => {
                        if (!editor.protyle.element.isSameNode(item.element) && item.element.classList.contains("fullscreen")) {
                            item.element.classList.remove("fullscreen");
                            setPadding(item.editor.protyle);
                        }
                    });
                }
                countBlockWord([], editor.protyle.block.rootID);
            },
        });
        // 需在 after 回调之前，否则不会聚焦 https://github.com/siyuan-note/siyuan/issues/5303
        this.editor.protyle.model = this;
    }
}