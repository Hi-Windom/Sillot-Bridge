import { Server } from "socket.io";
export declare class bS {
    io: Server;
    constructor();
    newBridge(): void;
    createDOM(id: string, dom: string): void;
}
