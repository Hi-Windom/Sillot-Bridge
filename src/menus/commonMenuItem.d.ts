/// <reference types="./src/types" />
export declare const openWechatNotify: (nodeElement: Element) => void;
export declare const openFileWechatNotify: (protyle: IProtyle) => void;
export declare const openFileAttr: (attrs: IObject, id: string, focusName?: string) => void;
export declare const openAttr: (nodeElement: Element, protyle: IProtyle, focusName?: string) => void;
export declare const copySubMenu: (id: string, accelerator?: boolean, focusElement?: Element) => ({
    icon: string;
    accelerator: string;
    label: any;
    click: () => void;
} | {
    label: any;
    accelerator: string;
    click: () => void;
    icon?: undefined;
})[];
export declare const exportMd: (id: string) => HTMLElement;
export declare const openMenu: (src: string, onlyMenu: boolean, showAccelerator: boolean) => any[];
export declare const renameMenu: (options: {
    path: string;
    notebookId: string;
    name: string;
    type: "notebook" | "file";
}) => HTMLElement;
export declare const movePathToMenu: (paths: string[]) => HTMLElement;
