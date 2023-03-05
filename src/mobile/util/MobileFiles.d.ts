/// <reference types="./src/types" />
import { Model } from "../../layout/Model";
export declare class MobileFiles extends Model {
    element: HTMLElement;
    private actionsElement;
    private closeElement;
    constructor();
    private genSort;
    private genNotebook;
    private init;
    private onMove;
    private onMkdir;
    private onRemove;
    onRename(data: {
        path: string;
        title: string;
        box: string;
    }): void;
    private onMount;
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
}
