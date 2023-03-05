export declare class Hint {
    timeId: number;
    element: HTMLDivElement;
    enableSlash: boolean;
    private enableEmoji;
    enableExtend: boolean;
    splitChar: string;
    lastIndex: number;
    constructor(protyle: IProtyle);
    render(protyle: IProtyle): void;
    genLoading(protyle: IProtyle): void;
    bindUploadEvent(protyle: IProtyle, element: HTMLElement): void;
    getHTMLByData(data: IHintData[], hasSearch?: boolean): string;
    genHTML(data: IHintData[], protyle: IProtyle, hide?: boolean, hasSearch?: boolean): void;
    private genSearchHTML;
    private genEmojiHTML;
    fill(value: string, protyle: IProtyle): void;
    select(event: KeyboardEvent, protyle: IProtyle): boolean;
    private fixImageCursor;
    private getKey;
}
