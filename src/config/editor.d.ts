/// <reference types="./src/types" />
export declare const editor: {
    element: Element;
    setReadonly: (readOnly?: boolean) => void;
    genHTML: () => string;
    bindEvent: () => void;
    onSetEditor: (editorData: IEditor) => void;
};
