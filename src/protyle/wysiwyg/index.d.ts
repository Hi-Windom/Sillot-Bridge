/// <reference types="./src/types" />
export declare class WYSIWYG {
    lastHTMLs: {
        [key: string]: string;
    };
    element: HTMLDivElement;
    preventKeyup: boolean;
    constructor(protyle: IProtyle);
    renderCustom(ial: IObject): void;
    private escapeInline;
    private setEmptyOutline;
    private bindCommonEvent;
    private bindEvent;
}
