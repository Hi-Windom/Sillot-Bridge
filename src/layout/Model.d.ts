/// <reference types="./src/types" />
import { Tab } from "./Tab";
export declare class Model {
    ws: WebSocket;
    reqId: number;
    parent: Tab;
    parent: any;
    constructor(options: {
        id: string;
        type?: TWS;
        callback?: () => void;
        msgCallback?: (data: IWebSocketData) => void;
    });
    private connect;
    send(cmd: string, param: Record<string, unknown>, process?: boolean): void;
}
