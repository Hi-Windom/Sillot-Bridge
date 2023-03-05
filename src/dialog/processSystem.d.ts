/// <reference types="./src/types" />
export declare const lockScreen: () => void;
export declare const lockFile: (id: string) => void;
export declare const kernelError: () => void;
export declare const exitSiYuan: () => void;
export declare const transactionError: (data: {
    code: number;
    data: string;
}) => void;
export declare const progressStatus: (data: IWebSocketData) => void;
export declare const progressLoading: (data: IWebSocketData) => void;
export declare const progressBackgroundTask: (tasks: {
    action: string;
}[]) => void;
export declare const bootSync: () => void;
export declare const setTitle: (title: string) => void;
export declare const downloadProgress: (data: {
    id: string;
    percent: number;
}) => void;
export declare const processSync: (data?: IWebSocketData) => void;
