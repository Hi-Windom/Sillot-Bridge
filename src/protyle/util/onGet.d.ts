/// <reference types="./src/types" />
export declare const onGet: (data: IWebSocketData, protyle: IProtyle, action?: string[], scrollAttr?: IScrollAttr, renderTitle?: boolean) => void;
export declare const disabledForeverProtyle: (protyle: IProtyle) => void;
/** 禁用编辑器 */
export declare const disabledProtyle: (protyle: IProtyle) => void;
/** 解除编辑器禁用 */
export declare const enableProtyle: (protyle: IProtyle) => void;
