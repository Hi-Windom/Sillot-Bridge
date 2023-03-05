/// <reference types="./src/types" />
import { Protyle } from "../protyle";
export declare const openGlobalSearch: (text: string, replace: boolean) => void;
export declare const genSearch: (config: ISearchOption, element: Element, closeCB?: () => void) => Protyle;
