/// <reference types="./src/types" />
export declare const promiseTransactions: () => void;
export declare const onTransaction: (protyle: IProtyle, operation: IOperation, focus: boolean) => void;
export declare const turnsIntoOneTransaction: (options: {
    protyle: IProtyle;
    selectsElement: Element[];
    type: string;
    level?: string;
}) => void;
export declare const turnsIntoTransaction: (options: {
    protyle: IProtyle;
    selectsElement?: Element[];
    nodeElement?: Element;
    type: string;
    level?: number | string;
    isContinue?: boolean;
}) => void;
export declare const transaction: (protyle: IProtyle, doOperations: IOperation[], undoOperations?: IOperation[]) => void;
export declare const updateTransaction: (protyle: IProtyle, id: string, newHTML: string, html: string) => void;
export declare const updateBatchTransaction: (nodeElements: Element[], protyle: IProtyle, cb: (e: HTMLElement) => void) => void;
