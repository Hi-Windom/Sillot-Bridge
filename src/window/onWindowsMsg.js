import { exportLayout, getInstanceById } from "../layout/util";
import { Tab } from "../layout/Tab";
import { fetchPost } from "../util/fetch";
import { isWindow } from "../util/functions";
const closeTab = (ipcData) => {
    const tab = getInstanceById(ipcData.data);
    if (tab && tab instanceof Tab) {
        tab.parent.removeTab(ipcData.data);
    }
};
export const onWindowsMsg = (ipcData) => {
    switch (ipcData.cmd) {
        case "closetab":
            closeTab(ipcData);
            break;
        case "lockscreen":
            if (isWindow()) {
                window.location.href = `/check-auth?url=${window.location.href}`;
            }
            else {
                exportLayout(false, () => {
                    fetchPost("/api/system/logoutAuth", {}, () => {
                        window.location.href = `/check-auth?url=${window.location.href}`;
                    });
                });
            }
            break;
    }
};
