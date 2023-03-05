import { ToolbarItem } from "./ToolbarItem";
import { hasClosestBlock, hasClosestByAttribute } from "../util/hasClosest";
import { hasNextSibling, hasPreviousSibling } from "../wysiwyg/getBlock";
export class InlineMath extends ToolbarItem {
    constructor(protyle, menuItem) {
        super(protyle, menuItem);
        this.element.addEventListener("click", async (event) => {
            protyle.toolbar.element.classList.add("fn__none");
            event.stopPropagation();
            const range = protyle.toolbar.range;
            const nodeElement = hasClosestBlock(range.startContainer);
            if (!nodeElement) {
                return;
            }
            let mathElement = hasClosestByAttribute(range.startContainer, "data-type", "inline-math");
            if (!mathElement && range.startContainer.nodeType !== 3 && range.startContainer.childNodes[range.startOffset]) {
                const previousSibling = hasPreviousSibling(range.startContainer.childNodes[range.startOffset]);
                if (previousSibling && previousSibling.getAttribute("data-type").indexOf("inline-math") > -1) {
                    mathElement = previousSibling;
                }
            }
            if (!mathElement && range.startOffset === range.startContainer.textContent.length && range.startContainer.nodeType === 3) {
                let isMath = true;
                let hasMath = false;
                // https://github.com/siyuan-note/siyuan/issues/6007
                range.cloneContents().childNodes.forEach((item) => {
                    if ((item.nodeType !== 3 && item.getAttribute("data-type").indexOf("inline-math") > -1) ||
                        (item.nodeType === 3 && item.textContent === "")) {
                        // 是否仅选中数学公式
                        hasMath = true;
                    }
                    else {
                        isMath = false;
                    }
                });
                if (isMath && hasMath) {
                    const nextSibling = hasNextSibling(range.startContainer);
                    if (nextSibling && nextSibling.nodeType !== 3 && nextSibling.getAttribute("data-type").indexOf("inline-math") > -1) {
                        mathElement = nextSibling;
                    }
                    else {
                        const previousSibling = hasPreviousSibling(range.startContainer);
                        if (range.startOffset === 0 && previousSibling && previousSibling.nodeType !== 3 && previousSibling.getAttribute("data-type").indexOf("inline-math") > -1) {
                            mathElement = previousSibling;
                        }
                    }
                }
            }
            if (mathElement) {
                protyle.toolbar.showRender(protyle, mathElement);
                return;
            }
            protyle.toolbar.setInlineMark(protyle, "inline-math", "range", {
                type: "inline-math",
            });
        });
    }
}
