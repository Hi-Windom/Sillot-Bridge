import { Tab } from "../Tab";
import { Model } from "../Model";
export declare class Graph extends Model {
    inputElement: HTMLInputElement;
    private graphElement;
    private panelElement;
    private element;
    private network;
    blockId: string;
    rootId: string;
    private timeout;
    graphData: {
        nodes: {
            box: string;
            id: string;
            path: string;
            type: string;
        }[];
        links: Record<string, unknown>[];
        box: string;
    };
    type: "local" | "pin" | "global";
    constructor(options: {
        tab: Tab;
        blockId?: string;
        rootId?: string;
        type: "local" | "pin" | "global";
    });
    private reset;
    searchGraph(focus: boolean, id?: string): void;
    hlNode(id: string): void;
    onGraph(hl: boolean): void;
}
