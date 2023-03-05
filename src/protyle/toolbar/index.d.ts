/// <reference types="./src/types" />
export declare class Toolbar {
    element: HTMLElement;
    subElement: HTMLElement;
    subElementCloseCB: () => void;
    range: Range;
    private toolbarHeight;
    constructor(protyle: IProtyle);
    render(protyle: IProtyle, range: Range, event?: KeyboardEvent): void;
    getCurrentType(range?: Range): string[];
    private genItem;
    private mergeNode;
    setInlineMark(protyle: IProtyle, type: string, action: "range" | "toolbar", textObj?: ITextOption): void;
    showFileAnnotationRef(protyle: IProtyle, refElement: HTMLElement): void;
    showRender(protyle: IProtyle, renderElement: Element, updateElements?: Element[], oldHTML?: string): void;
    showCodeLanguage(protyle: IProtyle, languageElement: HTMLElement): void;
    showTpl(protyle: IProtyle, nodeElement: HTMLElement, range: Range): void;
    showWidget(protyle: IProtyle, nodeElement: HTMLElement, range: Range): void;
    showAssets(protyle: IProtyle, nodeElement: HTMLElement, range: Range): void;
}
