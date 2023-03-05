import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
const _jsxFileName = "C:/GitRepo/Sillot/app/src/sillot/react-toastify.tsx";
import * as ReactDOM from "react-dom/client";
// https://zhuanlan.zhihu.com/p/148081795
// https://blog.leodots.me/post/40-think-about-allowSyntheticDefaultImports.html
import { toast, ToastContainer, Slide, Zoom, Flip, Bounce, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export class Toastify {
    root;
    position;
    limit;
    transition;
    cID;
    constructor(props) {
        this.root = ReactDOM.createRoot(document.getElementById(props.id)); // https://beta.reactjs.org/reference/react/createElement 示例
        this.setPosition(props.position);
        this.transition = Bounce;
        this.limit = props.limit;
        this.cID = `cID-${props.id}`;
        this.root.render(_jsxDEV(_Fragment, { children: _jsxDEV(ToastContainer, { enableMultiContainer: true, containerId: this.cID, limit: this.limit, theme: props.theme }, void 0, false, { fileName: _jsxFileName, lineNumber: 42, columnNumber: 9 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 40, columnNumber: 22 }, this));
    }
    /**
     * @param p - 语义化的位置声明
     * @return {void}
     * ```tsx
     * switch (p) {
        case ??:
          this.position = toast.??;
          ...
      }
          ```
     * 将 {@link Toastify.position} 设置为 {@link toast.POSITION} 规定的值
     */
    setPosition(p) {
        switch (p) {
            case "ToCenter":
            case "TOP_CENTER":
            case "top-center":
                this.position = toast.POSITION.TOP_CENTER;
                break;
            case "ToLeft":
            case "TOP_LEFT":
            case "top-left":
                this.position = toast.POSITION.TOP_LEFT;
                break;
            case "ToRight":
            case "TOP_RIGHT":
            case "top-right":
                this.position = toast.POSITION.TOP_RIGHT;
                break;
            case "BoCenter":
            case "BOTTOM_CENTER":
            case "bottom-center":
                this.position = toast.POSITION.BOTTOM_CENTER;
                break;
            case "BoLeft":
            case "BOTTOM_LEFT":
            case "bottom-left":
                this.position = toast.POSITION.BOTTOM_LEFT;
                break;
            case "BoRight":
            case "BOTTOM_RIGHT":
            case "bottom-right":
            default:
                this.position = toast.POSITION.BOTTOM_RIGHT;
                break;
        }
    }
    /**
     * 返回一个 {@link toast.POSITION} 规定的值
     * @param p - 语义化的位置声明
     */
    getPosition(p) {
        switch (p) {
            case "ToCenter":
            case "TOP_CENTER":
            case "top-center":
                return toast.POSITION.TOP_CENTER;
            case "ToLeft":
            case "TOP_LEFT":
            case "top-left":
                return toast.POSITION.TOP_LEFT;
            case "ToRight":
            case "TOP_RIGHT":
            case "top-right":
                return toast.POSITION.TOP_RIGHT;
            case "BoCenter":
            case "BOTTOM_CENTER":
            case "bottom-center":
                return toast.POSITION.BOTTOM_CENTER;
            case "BoLeft":
            case "BOTTOM_LEFT":
            case "bottom-left":
                return toast.POSITION.BOTTOM_LEFT;
            case "BoRight":
            case "BOTTOM_RIGHT":
            case "bottom-right":
                return toast.POSITION.BOTTOM_RIGHT;
            default:
                return this.position;
        }
    }
    /**
     *
     * ```tsx
     *  if (d) return d * 1000
     *  return false
     * ```
     * 传入一个秒数，返回一个持续时间，没有传入则返回 `false`
     * @param d - 以秒为单位的数字
     */
    getDuration(d) {
        if (d && d > 0)
            return d * 1000;
        return false;
    }
    setTransition(t) {
        switch (t) {
            case "slide":
                this.transition = Slide;
            case "zoom":
                this.transition = Zoom;
            case "flip":
                this.transition = Flip;
            default:
                this.transition = Bounce;
        }
    }
    getTransition(t) {
        switch (t) {
            case "slide":
                return Slide;
            case "zoom":
                return Zoom;
            case "flip":
                return Flip;
            case "bounce":
                return Bounce;
            default:
                return this.transition;
        }
    }
    getType(t) {
        switch (t) {
            case "error":
            case "warning":
            case "success":
            case "info":
                return t;
            default:
                return "info";
        }
    }
    getTheme(t) {
        switch (t) {
            case "light":
            case "dark":
            case "colored":
                return t;
            default:
                return "colored";
        }
    }
    /**
     * @param message - 字符串信息
     * @param p - 语义化的位置声明
     * @param d - 以秒为单位的持续时间，留空、小于等于 `0` 表示不会自动消失
     */
    success(_) {
        toast.success(_.message, {
            containerId: this.cID,
            position: this.getPosition(_.position),
            autoClose: this.getDuration(_.duration),
            transition: this.getTransition(_.transition),
            theme: this.getTheme(_.theme),
        });
    }
    error(_) {
        toast.error(_.message, {
            containerId: this.cID,
            position: this.getPosition(_.position),
            autoClose: this.getDuration(_.duration),
            transition: this.getTransition(_.transition),
            theme: this.getTheme(_.theme),
        });
    }
    warn(_) {
        toast.warn(_.message, {
            containerId: this.cID,
            position: this.getPosition(_.position),
            autoClose: this.getDuration(_.duration),
            transition: this.getTransition(_.transition),
            theme: this.getTheme(_.theme),
        });
    }
    info(_) {
        toast.info(_.message, {
            containerId: this.cID,
            position: this.getPosition(_.position),
            autoClose: this.getDuration(_.duration),
            transition: this.getTransition(_.transition),
            theme: this.getTheme(_.theme),
        });
    }
    toast(_) {
        toast(_.message, {
            containerId: this.cID,
            position: this.getPosition(_.position),
            autoClose: this.getDuration(_.duration),
            transition: this.getTransition(_.transition),
            theme: this.getTheme(_.theme),
        });
    }
    tt(type, _) {
        toast(_.message, {
            type: this.getType(type),
            containerId: this.cID,
            position: this.getPosition(_.position),
            autoClose: this.getDuration(_.duration),
            transition: this.getTransition(_.transition),
            theme: this.getTheme(_.theme),
        });
    }
    async promise(functionThatReturnPromise, whenPending, whenSucess, whenError) {
        return toast.promise(functionThatReturnPromise, {
            pending: whenPending ? whenPending : "Promise is pending",
            success: whenSucess ? whenSucess : "Promise resolved 👌",
            error: whenError ? whenError : "Promise rejected 🤯",
        });
    }
    /**
     * 清除全部 `toast`
     * https://fkhadra.github.io/react-toastify/remove-toast
     * `toast.dismiss` has no effect if called during the delay before a given toast appears.
     */
    dismissAll = () => toast.dismiss();
    /**
     * 清除队列中等待显示的 `toast`
     * https://fkhadra.github.io/react-toastify/limit-the-number-of-toast-displayed
     */
    clearWaitingQueue = () => toast.clearWaitingQueue();
    // __.toastify.test()
    test() {
        toast("Default Notification !");
        toast.success("Success Notification !", {
            containerId: this.cID,
            position: toast.POSITION.TOP_CENTER,
        });
        toast.error("Error Notification !", {
            containerId: this.cID,
            position: toast.POSITION.TOP_LEFT,
        });
        toast.warn("Warning Notification !", {
            containerId: this.cID,
            position: toast.POSITION.BOTTOM_LEFT,
        });
        toast.info("Info Notification !", {
            containerId: this.cID,
            position: toast.POSITION.BOTTOM_CENTER,
        });
        toast("Custom Style Notification with css class!", {
            containerId: this.cID,
            position: toast.POSITION.BOTTOM_RIGHT,
            className: "foo-bar",
            autoClose: false,
            onOpen: () => window.alert("Called when I open"),
            onClose: () => window.alert("Called when I close"),
        });
        const functionThatReturnPromise = () => new Promise((resolve) => setTimeout(resolve, 3000));
        toast.promise(functionThatReturnPromise, {
            pending: "Promise is pending",
            success: "Promise resolved 👌",
            error: "Promise rejected 🤯",
        });
    }
}
