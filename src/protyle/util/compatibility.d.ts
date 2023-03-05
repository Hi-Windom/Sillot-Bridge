export declare const openByMobile: (uri: string) => void;
export declare const readText: () => Promise<string>;
export declare const writeText: (text: string) => Promise<void>;
export declare const copyPlainText: (text: string) => Promise<void>;
export declare const getEventName: () => "click" | "touchstart";
export declare const isCtrl: (event: KeyboardEvent) => boolean;
export declare const isMac: () => boolean;
export declare const updateHotkeyTip: (hotkey: string) => string;
export declare const hotKey2Electron: (key: string) => string;
export declare const getLocalStorage: (cb: () => void) => void;
export declare const setStorageVal: (key: string, val: any) => void;