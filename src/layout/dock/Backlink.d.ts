/// <reference types="./src/types" />
import { Tab } from "../Tab";
import { Model } from "../Model";
import { Tree } from "../../util/Tree";
import { Protyle } from "../../protyle";
export declare class Backlink extends Model {
    element: HTMLElement;
    inputsElement: NodeListOf<HTMLInputElement>;
    type: "pin" | "local";
    blockId: string;
    rootId: string;
    tree: Tree;
    private notebookId;
    mTree: Tree;
    editors: Protyle[];
    status: {
        [key: string]: {
            sort: string;
            mSort: string;
            scrollTop: number;
            mScrollTop: number;
            backlinkOpenIds: string[];
            backlinkMOpenIds: string[];
            backlinkMStatus: number;
        };
    };
    constructor(options: {
        tab: Tab;
        blockId: string;
        rootId?: string;
        type: "pin" | "local";
    });
    private setFocus;
    private showSortMenu;
    private toggleItem;
    private refresh;
    private searchBacklinks;
    saveStatus(): void;
    render(data: {
        box: string;
        backlinks: IBlockTree[];
        backmentions: IBlockTree[];
        linkRefsCount: number;
        mentionsCount: number;
        k: string;
        mk: string;
    }): void;
}
