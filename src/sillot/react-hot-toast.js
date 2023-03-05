import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
const _jsxFileName = "C:/GitRepo/Sillot/app/src/sillot/react-hot-toast.tsx";
/*
需要在 react-hot-toast 的 index.d.ts 中修改声明，具体如下：
// declare const Toaster: react.FC<ToasterProps>;
declare const Toaster: React;
*/
import toast, { Toaster } from "react-hot-toast";
import * as ReactDOM from "react-dom/client";
export class HotToast {
    root;
    constructor(props) {
        this.root = ReactDOM.createRoot(document.getElementById(props.id));
        this.root.render(_jsxDEV(_Fragment, { children: _jsxDEV(Toaster, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 16, columnNumber: 24 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 16, columnNumber: 22 }, this));
    }
    alert(message, options) {
        toast(message, options);
    }
}
