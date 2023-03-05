/// <reference types="./src/types" />
import { Tab } from "../Tab";
import { Model } from "../Model";
export declare class Files extends Model {
    element: HTMLElement;
    parent: Tab;
    private actionsElement;
    closeElement: HTMLElement;
    constructor(options: {
        tab: Tab;
    });
    private genNotebook;
    private init;
    private onMkdir;
    private onRemove;
    private onMount;
    onRename(data: {
        path: string;
        title: string;
        box: string;
    }): void;
    private onMove;
    private onLsHTML;
    private onLsSelect;
    private setCurrent;
    getLeaf(liElement: Element, notebookId: string): void;
    selectItem(notebookId: string, filePath: string, data?: {
        files: IFile[];
        box: string;
        path: string;
    }): void;
    private genFileHTML;
    private initMoreMenu;
}
