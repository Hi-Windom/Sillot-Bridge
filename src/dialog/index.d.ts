export declare class Dialog {
    private destroyCallback;
    element: HTMLElement;
    private id;
    private disableClose;
    constructor(options: {
        title?: string;
        transparent?: boolean;
        content: string;
        width?: string;
        height?: string;
        destroyCallback?: () => void;
        disableClose?: boolean;
        disableAnimation?: boolean;
    });
    destroy(): void;
    bindInput(inputElement: HTMLInputElement | HTMLTextAreaElement, enterEvent?: () => void): void;
}
