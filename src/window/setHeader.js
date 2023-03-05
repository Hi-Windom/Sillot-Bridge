import { isWindow } from "../util/functions";
import { Wnd } from "../layout/Wnd";
import { getCurrentWindow } from "@electron/remote";
import { Layout } from "../layout";
const getAllWnds = (layout, wnds) => {
    for (let i = 0; i < layout.children.length; i++) {
        const item = layout.children[i];
        if (item instanceof Wnd) {
            wnds.push(item);
        }
        else if (item instanceof Layout) {
            getAllWnds(item, wnds);
        }
    }
};
export const setTabPosition = () => {
    if (!isWindow()) {
        return;
    }
    const wndsTemp = [];
    getAllWnds(window.siyuan.layout.layout, wndsTemp);
    wndsTemp.forEach(item => {
        const headerElement = item.headersElement.parentElement;
        const rect = headerElement.getBoundingClientRect();
        const dragElement = headerElement.querySelector(".item--readonly .fn__flex-1");
        if (rect.top <= 0) {
            dragElement.style.height = dragElement.parentElement.clientHeight + "px";
            // @ts-ignore
            dragElement.style.WebkitAppRegion = "drag";
        }
        else {
            // @ts-ignore
            dragElement.style.WebkitAppRegion = "";
        }
        const headersLastElement = headerElement.lastElementChild;
        if ("darwin" === window.siyuan.config.system.os) {
            if (rect.top <= 0 && rect.left <= 0 && !getCurrentWindow().isFullScreen()) {
                item.headersElement.style.paddingLeft = "69px";
                headersLastElement.style.paddingRight = "42px";
            }
            else {
                item.headersElement.style.paddingLeft = "";
                headersLastElement.style.paddingRight = "";
            }
        }
        else {
            // 显示器缩放后像素存在小数点偏差 https://github.com/siyuan-note/siyuan/issues/7355
            if (rect.top <= 0 && rect.right + 8 >= window.innerWidth) {
                headersLastElement.style.paddingRight = (42 * 4) + "px";
            }
            else {
                headersLastElement.style.paddingRight = "";
            }
        }
    });
};
