/// <reference types="./src/types" />
import { Layout } from "./index";
import { Tab } from "./Tab";
export declare class Wnd {
    id: string;
    parent?: Layout;
    element: HTMLElement;
    headersElement: HTMLElement;
    children: Tab[];
    resize?: TDirection;
    constructor(resize?: TDirection, parentType?: TLayout);
    showHeading(): void;
    switchTab(target: HTMLElement, pushBack?: boolean, update?: boolean): void;
    addTab(tab: Tab, keepCursor?: boolean): void;
    private renderTabList;
    private removeOverCounter;
    private destroyModel;
    private removeTabAction;
    removeTab(id: string, closeAll?: boolean, needSaveScroll?: boolean, animate?: boolean): void;
    moveTab(tab: Tab, nextId?: string): void;
    split(direction: TDirection): Wnd;
    private remove;
}
