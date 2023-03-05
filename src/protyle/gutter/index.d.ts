export declare class Gutter {
    element: HTMLElement;
    constructor(protyle: IProtyle);
    private isMatchNode;
    private turnsOneInto;
    private turnsIntoOne;
    private turnsInto;
    renderMultipleMenu(protyle: IProtyle, selectsElement: Element[]): import("../../menus/Menu").Menu;
    renderMenu(protyle: IProtyle, buttonElement: Element): import("../../menus/Menu").Menu;
    private genHeadingTransform;
    private genClick;
    private genAlign;
    private genBGStyle;
    private genWidths;
    private genFontStyle;
    private genCardStyle;
    private genCopyTextRef;
    render(protyle: IProtyle, element: Element, wysiwyg: HTMLElement): void;
}
