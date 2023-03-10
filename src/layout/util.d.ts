/// <reference types="./src/types" />
import { Layout } from "./index";
import { Wnd } from "./Wnd";
import { Tab } from "./Tab";
import { Model } from "./Model";
import { Dock } from "./dock";
export declare const setPanelFocus: (element: Element) => void;
export declare const getDockByType: (type: TDockType) => Dock;
export declare const switchWnd: (newWnd: Wnd, targetWnd: Wnd) => void;
export declare const getWndByLayout: (layout: Layout) => Wnd;
export declare const resetLayout: () => void;
export declare const exportLayout: (reload: boolean, cb?: () => void) => void;
export declare const JSONToCenter: (json: any, layout?: Layout | Wnd | Tab | Model, isStart?: boolean) => void;
export declare const JSONToLayout: (isStart: boolean) => void;
export declare const layoutToJSON: (layout: Layout | Wnd | Tab | Model, json: any) => void;
export declare const resizeDrag: () => void;
export declare const resizeTabs: () => void;
export declare const copyTab: (tab: Tab) => Tab;
export declare const pdfIsLoading: (element: HTMLElement) => boolean;
export declare const getInstanceById: (id: string, layout?: Layout) => Tab | Wnd | Layout;
export declare const addResize: (obj: Layout | Wnd) => void;
export declare const newCenterEmptyTab: () => Tab;
