/// <reference types="./src/types" />
export declare const bazaar: {
    element: Element;
    genHTML(): string;
    _genCardHTML(item: IBazaarItem, bazaarType: TBazaarType): string;
    _genMyHTML(bazaarType: TBazaarType): void;
    _data: {
        themes: IBazaarItem[];
        templates: IBazaarItem[];
        icons: IBazaarItem[];
        widgets: IBazaarItem[];
        downloaded: IBazaarItem[];
    };
    _renderReadme(cardElement: HTMLElement, bazaarType: TBazaarType): void;
    bindEvent(): void;
    _onBazaar(response: IWebSocketData, bazaarType: TBazaarType, reload: boolean): void;
};
