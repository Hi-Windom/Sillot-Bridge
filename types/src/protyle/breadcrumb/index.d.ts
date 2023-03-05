export declare class Breadcrumb {
    element: HTMLElement;
    private mediaRecorder;
    private id;
    private messageId;
    constructor(protyle: IProtyle);
    private startRecord;
    showMenu(protyle: IProtyle, position: {
        x: number;
        y: number;
    }): void;
    render(protyle: IProtyle, update?: boolean): void;
    hide(): void;
}
