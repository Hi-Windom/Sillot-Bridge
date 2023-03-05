import { Constants } from "../constants";
import { exportLayout } from "./util";
/// #endif
import { processMessage } from "../util/processMessage";
import { kernelError } from "../dialog/processSystem";
export class Model {
    ws;
    reqId;
    /// #if !MOBILE
    parent;
    /// #else
    // @ts-ignore
    parent;
    /// #endif
    constructor(options) {
        if (options.msgCallback) {
            this.connect(options);
        }
    }
    connect(options) {
        const websocketURL = `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.host}/ws`;
        const ws = new WebSocket(`${websocketURL}?app=${Constants.SIYUAN_APPID}&id=${options.id}${options.type ? "&type=" + options.type : ""}`);
        ws.onopen = () => {
            if (options.callback) {
                options.callback.call(this);
            }
            const logElement = document.getElementById("errorLog");
            if (logElement) {
                // 内核中断后无法 catch fetch 请求错误，重连会导致无法执行 transactionsTimeout
                /// #if MOBILE
                window.location.reload();
                /// #else
                exportLayout(true);
                /// #endif
            }
        };
        ws.onmessage = (event) => {
            if (options.msgCallback) {
                const data = processMessage(JSON.parse(event.data));
                options.msgCallback.call(this, data);
            }
        };
        ws.onclose = (ev) => {
            if (0 <= ev.reason.indexOf("unauthenticated")) {
                return;
            }
            if (0 > ev.reason.indexOf("close websocket")) {
                console.warn("WebSocket is closed. Reconnect will be attempted in 3 second.", ev);
                setTimeout(() => {
                    this.connect({
                        id: options.id,
                        type: options.type,
                        msgCallback: options.msgCallback
                    });
                }, 3000);
            }
        };
        ws.onerror = (err) => {
            const logElement = document.getElementById("errorLog");
            if (err.target.url.endsWith("&type=main") && err.target.readyState === 3 && !logElement) {
                kernelError();
            }
        };
        this.ws = ws;
    }
    send(cmd, param, process = false) {
        if (!this.ws) { // Inbox 无 ws
            return;
        }
        this.reqId = process ? 0 : new Date().getTime();
        this.ws.send(JSON.stringify({
            cmd,
            reqId: this.reqId,
            param,
            // pushMode
            // 0: 所有应用所有会话广播
            // 1：自我应用会话单播
            // 2：非自我会话广播
            // 4：非自我应用所有会话广播
            // 5：单个应用内所有会话广播
            // 6：非自我应用主会话广播
        }));
    }
}
