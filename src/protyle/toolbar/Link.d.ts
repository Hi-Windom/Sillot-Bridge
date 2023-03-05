import { ToolbarItem } from "./ToolbarItem";
export declare class Link extends ToolbarItem {
    element: HTMLElement;
    constructor(protyle: IProtyle, menuItem: IMenuItem);
}
export declare const removeLink: (linkElement: HTMLElement, range: Range) => void;
