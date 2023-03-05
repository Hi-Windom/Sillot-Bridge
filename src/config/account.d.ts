/// <reference types="./src/types" />
export declare const account: {
    element: Element;
    genHTML: () => string;
    bindEvent: (element: Element) => void;
    _afterLogin(userResponse: IWebSocketData, element: Element): void;
    onSetaccount(): void;
};
