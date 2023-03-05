/// <reference types="./src/types" />
import { Tab } from "../Tab";
import { Model } from "../Model";
import { Tree } from "../../util/Tree";
export declare class Outline extends Model {
    tree: Tree;
    element: HTMLElement;
    headerElement: HTMLElement;
    type: "pin" | "local";
    blockId: string;
    private openNodes;
    constructor(options: {
        tab: Tab;
        blockId: string;
        type: "pin" | "local";
    });
    updateDocTitle(ial?: IObject): void;
    private onTransaction;
    setCurrent(nodeElement: HTMLElement): void;
    private setCurrentById;
    update(data: IWebSocketData, callbackId?: string): void;
}
