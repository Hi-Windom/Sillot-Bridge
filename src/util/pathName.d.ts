/// <reference types="node" />
/// <reference types="./src/types" />
import * as path from "path";
export declare const addBaseURL: () => void;
export declare const getDisplayName: (filePath: string, basename?: boolean, removeSY?: boolean) => string;
export declare const getAssetName: (assetPath: string) => string;
export declare const isLocalPath: (link: string) => boolean;
export declare const pathPosix: () => path.PlatformPath;
export declare const originalPath: () => path.PlatformPath;
export declare const getTopPaths: (liElements: Element[]) => string[];
export declare const moveToPath: (fromPaths: string[], toNotebook: string, toPath: string) => void;
export declare const movePathTo: (cb: (toPath: string[], toNotebook: string[]) => void, paths?: string[], range?: Range, title?: string) => void;
export declare const getNotebookName: (id: string) => string;
export declare const getNotebookIcon: (id: string) => string;
export declare const setNotebookName: (id: string, name: string) => void;
export declare const getOpenNotebookCount: () => number;
export declare const setNoteBook: (cb?: (notebook: INotebook[]) => void) => void;
