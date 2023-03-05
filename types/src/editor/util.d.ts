/// <reference types="./src/types" />
export declare const openFileById: (options: {
    id: string;
    position?: string;
    mode?: TEditorMode;
    action?: string[];
    keepCursor?: boolean;
    zoomIn?: boolean;
    removeCurrentTab?: boolean;
}) => void;
export declare const openAsset: (assetPath: string, page: number | string, position?: string) => void;
export declare const updatePanelByEditor: (protyle?: IProtyle, focus?: boolean, pushBackStack?: boolean, reload?: boolean) => void;
export declare const isCurrentEditor: (blockId: string) => boolean;
export declare const updateBacklinkGraph: (models: IModels, protyle: IProtyle) => void;
export declare const openBy: (url: string, type: "folder" | "app") => void;
