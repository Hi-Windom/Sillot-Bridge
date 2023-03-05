export declare class Scroll {
    element: HTMLElement;
    private parentElement;
    private inputElement;
    lastScrollTop: number;
    keepLazyLoad: boolean;
    constructor(protyle: IProtyle);
    private setIndex;
    update(protyle: IProtyle): void;
}
