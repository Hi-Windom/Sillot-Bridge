import { onTransaction, transaction } from "../wysiwyg/transaction";
import { preventScroll } from "../scroll/preventScroll";
import { Constants } from "../../constants";
import { hideElements } from "../ui/hideElements";
import { scrollCenter } from "../../util/highlightById";
/// #if !BROWSER
import { getCurrentWindow } from "@electron/remote";
/// #endif
import { matchHotKey } from "../util/hotKey";
export class Undo {
    hasUndo = false;
    redoStack;
    undoStack;
    constructor() {
        this.redoStack = [];
        this.undoStack = [];
    }
    undo(protyle) {
        if (protyle.disabled) {
            return;
        }
        if (this.undoStack.length === 0) {
            return;
        }
        const state = this.undoStack.pop();
        this.render(protyle, state, false);
        this.hasUndo = true;
        this.redoStack.push(state);
    }
    redo(protyle) {
        if (protyle.disabled) {
            return;
        }
        if (this.redoStack.length === 0) {
            return;
        }
        const state = this.redoStack.pop();
        this.render(protyle, state, true);
        this.undoStack.push(state);
    }
    render(protyle, state, redo) {
        hideElements(["hint", "gutter"], protyle);
        protyle.wysiwyg.lastHTMLs = {};
        if (!redo) {
            state.undoOperations.forEach(item => {
                onTransaction(protyle, item, true);
            });
            transaction(protyle, state.undoOperations);
        }
        else {
            state.doOperations.forEach(item => {
                onTransaction(protyle, item, true);
            });
            transaction(protyle, state.doOperations);
        }
        preventScroll(protyle);
        scrollCenter(protyle);
    }
    replace(doOperations) {
        if (this.undoStack.length > 0) {
            this.undoStack[this.undoStack.length - 1].doOperations = doOperations;
        }
    }
    add(doOperations, undoOperations) {
        this.undoStack.push({ undoOperations, doOperations });
        if (this.undoStack.length > Constants.SIZE_UNDO) {
            this.undoStack.shift();
        }
        if (this.hasUndo) {
            this.redoStack = [];
            this.hasUndo = false;
        }
    }
    clear() {
        this.undoStack = [];
        this.redoStack = [];
    }
}
export const electronUndo = (event) => {
    /// #if !BROWSER
    if (matchHotKey(window.siyuan.config.keymap.editor.general.undo.custom, event)) {
        getCurrentWindow().webContents.undo();
        event.preventDefault();
        event.stopPropagation();
        return true;
    }
    if (matchHotKey(window.siyuan.config.keymap.editor.general.redo.custom, event)) {
        getCurrentWindow().webContents.redo();
        event.preventDefault();
        event.stopPropagation();
        return true;
    }
    /// #endif
    return false;
};
