import { Protyle } from "../protyle";
export declare class BlockPanel {
    element: HTMLElement;
    targetElement: HTMLElement;
    nodeIds: string[];
    defIds: string[];
    id: string;
    private stmt;
    editors: Protyle[];
    esc: () => void;
    constructor(options: {
        targetElement: HTMLElement;
        nodeIds?: string[];
        defIds?: string[];
        stmt?: string;
        esc?: () => void;
    });
    private initProtyle;
    destroy(): void;
    private render;
}
