/// <reference types="./src/types" />
import { Tab } from "../layout/Tab";
import { Protyle } from "../protyle";
import { Model } from "../layout/Model";
export declare class Editor extends Model {
    element: HTMLElement;
    editor: Protyle;
    headElement: HTMLElement;
    constructor(options: {
        tab: Tab;
        blockId: string;
        mode?: TEditorMode;
        action?: string[];
        scrollAttr?: IScrollAttr;
    });
    private initProtyle;
}
