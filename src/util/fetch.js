import { Constants } from "../constants";
/// #if !BROWSER
import { ipcRenderer } from "electron";
import { getCurrentWindow } from "@electron/remote";
/// #endif
import { processMessage } from "./processMessage";
import { kernelError } from "../dialog/processSystem";
export const fetchPost = (url, data, cb, headers) => {
    const init = {
        method: "POST",
    };
    if (data) {
        if (["/api/search/searchRefBlock", "/api/graph/getGraph", "/api/graph/getLocalGraph"].includes(url)) {
            window.siyuan.reqIds[url] = new Date().getTime();
            if (data.type === "local" && url === "/api/graph/getLocalGraph") {
                // 当打开文档A的关系图、关系图、文档A后刷新，由于防止请求重复处理，文档A关系图无法渲染。
            }
            else {
                data.reqId = window.siyuan.reqIds[url];
            }
        }
        if (data instanceof FormData) {
            init.body = data;
        }
        else {
            init.body = JSON.stringify(data);
        }
    }
    if (headers) {
        init.headers = headers;
    }
    fetch(url, init).then((response) => {
        return response.json();
    }).then((response) => {
        if (["/api/search/searchRefBlock", "/api/graph/getGraph", "/api/graph/getLocalGraph"].includes(url)) {
            if (response.data.reqId && window.siyuan.reqIds[url] && window.siyuan.reqIds[url] > response.data.reqId) {
                return;
            }
        }
        if (processMessage(response) && cb) {
            cb(response);
        }
    }).catch((e) => {
        console.warn("fetch post error", e);
        if (url === "/api/transactions" && (e.message === "Failed to fetch" || e.message === "Unexpected end of JSON input")) {
            kernelError();
            return;
        }
        /// #if !BROWSER
        if (url === "/api/system/exit" || url === "/api/system/setWorkspaceDir" || (["/api/system/setUILayout"].includes(url) && data.exit // 内核中断，点关闭处理
        )) {
            ipcRenderer.send(Constants.SIYUAN_QUIT, getCurrentWindow().id);
        }
        /// #endif
    });
};
export const fetchSyncPost = async (url, data) => {
    const init = {
        method: "POST",
    };
    if (data) {
        init.body = JSON.stringify(data);
    }
    const res = await fetch(url, init);
    const res2 = await res.json();
    processMessage(res2);
    return res2;
};
export const fetchGet = (url, cb) => {
    fetch(url).then((response) => {
        return response.json();
    }).then((response) => {
        cb(response);
    });
};
