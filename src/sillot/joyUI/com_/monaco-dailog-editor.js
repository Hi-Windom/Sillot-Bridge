import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
const _jsxFileName = "C:/GitRepo/Sillot/app/src/sillot/joyUI/com_/monaco-dailog-editor.tsx";
import * as React from "react";
import * as Client from "react-dom/client";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Modal from "@mui/joy/Modal";
import Checkbox from "@mui/joy/Checkbox";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Switch from "@mui/joy/Switch";
import Select, { selectClasses } from "@mui/joy/Select";
import Option, { optionClasses } from "@mui/joy/Option";
import Chip from "@mui/joy/Chip";
import List from "@mui/joy/List";
import ListItemDecorator, { listItemDecoratorClasses, } from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import Check from "@mui/icons-material/Check";
import CircularProgress from "@mui/joy/CircularProgress";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import loader from "@monaco-editor/loader";
import { uriFromPath } from "../../util/path";
import { fetchPost } from "../../../util/fetch";
const path = require("path");
import { initEditorOptions, groupTheme, colorsTheme, groupLang, groupLangText, colorsLang, isLightTheme, } from "./monaco-editor-confige";
// theme
import BirdsofParadise from "./monacoThemes/Birds-of-Paradise";
import Blackboard from "./monacoThemes/Blackboard";
import Cobalt from "./monacoThemes/Cobalt";
import Cobalt2 from "./monacoThemes/Cobalt2";
import Dracula from "./monacoThemes/Dracula";
import IdleFingers from "./monacoThemes/idleFingers";
import IPlastic from "./monacoThemes/iPlastic";
import Katzenmilch from "./monacoThemes/Katzenmilch";
import Monokai from "./monacoThemes/Monokai";
import NightOwl from "./monacoThemes/Night-Owl";
import Solarizedlight from "./monacoThemes/Solarized-light";
import Sunburst from "./monacoThemes/Sunburst";
import TomorrowNightEighties from "./monacoThemes/Tomorrow-Night-Eighties";
import Zenburnesque from "./monacoThemes/Zenburnesque";
const SharedProps = React.createContext(null);
export default function MDDialog(props) {
    const id = props.id;
    const nodeID = props.nodeID;
    const initConfig = {
        lang: props.lang,
        theme: props.theme,
        readonly: props.readonly,
        editable: props.editable,
    };
    const e = document.getElementById(id);
    if (!e) {
        return;
    }
    const root = Client.createRoot(e);
    // 在 React 中， <></> 是 <React.Fragment/> 的语法糖
    root.render(_jsxDEV(_Fragment, { children: _jsxDEV(Loader, { nodeID: nodeID, initConfig: initConfig }, void 0, false, { fileName: _jsxFileName, lineNumber: 80, columnNumber: 7 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 78, columnNumber: 15 }, this));
}
function Loader(props) {
    const [open, setOpen] = React.useState(true); // react hooks
    const [editor, setEditor] = React.useState(null);
    const [mmodel, setmmodel] = React.useState(null);
    const [monacoIns, setmonacoIns] = React.useState(null);
    const nodeID = props.nodeID;
    const initConfig = props.initConfig;
    React.useEffect(() => {
        /// #if !BROWSER
        const pp = path.join(__dirname, "../../app/node_modules/monaco-editor/min/vs"); // 思源路径特殊
        // console.log(pp)
        loader.config({
            paths: {
                vs: uriFromPath(pp),
            },
            "vs/nls": {
                availableLanguages: {
                    "*": "zh-cn",
                },
            },
        });
        /// #endif
        loader.init().then((monacoInstance) => {
            monacoInstance.editor.defineTheme("Birds-of-Paradise", BirdsofParadise); // 不要放到箭头函数里
            monacoInstance.editor.defineTheme("Blackboard", Blackboard);
            monacoInstance.editor.defineTheme("Cobalt", Cobalt);
            monacoInstance.editor.defineTheme("Cobalt2", Cobalt2);
            monacoInstance.editor.defineTheme("Dracula", Dracula);
            monacoInstance.editor.defineTheme("IdleFingers", IdleFingers);
            monacoInstance.editor.defineTheme("IPlastic", IPlastic);
            monacoInstance.editor.defineTheme("Katzenmilch", Katzenmilch);
            monacoInstance.editor.defineTheme("Monokai", Monokai);
            monacoInstance.editor.defineTheme("Night-Owl", NightOwl);
            monacoInstance.editor.defineTheme("Solarized-light", Solarizedlight);
            monacoInstance.editor.defineTheme("Sunburst", Sunburst);
            monacoInstance.editor.defineTheme("Tomorrow-Night-Eighties", TomorrowNightEighties);
            monacoInstance.editor.defineTheme("Zenburnesque", Zenburnesque);
            const model_x = monacoInstance.editor.createModel("", initConfig.lang);
            const _editor = monacoInstance.editor.create(document.getElementById("monaco-editor"), { ...initConfig, ...initEditorOptions, model: model_x });
            setEditor(_editor);
            setmmodel(model_x);
            setmonacoIns(monacoInstance);
            _editor.updateOptions({ readOnly: initConfig.readonly });
            _editor.onDidChangeModelContent(() => {
                // window.sout.slog(_editor.getValue());
            });
            window.sout.tracker(model_x);
            window.sout.tracker(monacoInstance.editor);
        });
    }, [] // 空数组保证只执行一次
    );
    const [loading, setLoading] = React.useState(true); // 顺序重要
    React.useEffect(() => {
        if (!editor)
            return; // 第一次初始化时不执行
        fetchPost("/api/block/getBlockKramdown", {
            id: nodeID,
        }, (res) => {
            if (res.code === 0 && editor) {
                window.sout.info(nodeID);
                window.sout.success(res);
                // editor.setValue(res.data.kramdown);
                window.sout.tracker(monacoIns.editor.getModels()[0]);
                mmodel.setValue(res.data.kramdown);
                // editor.updateOptions({ model: IEditor.createModel(res.data.kramdown,initConfig.lang) })
                setLoading(false);
                setOpen(true);
                document.getElementById("monaco-editor-container").style.display =
                    "inherit";
                window.sout.tracker(editor);
            }
            else {
                setOpen(false);
                window.__.toastify.error({
                    message: res.msg,
                    position: "bottom-center",
                    duration: 1,
                });
            }
        });
    }, [editor]);
    return (_jsxDEV(SharedProps.Provider, { value: {
            nodeID: nodeID,
            editor: editor,
            mmodel: mmodel,
            monacoIns: monacoIns,
            initConfig: initConfig,
        }, children: _jsxDEV(CssVarsProvider, { children: _jsxDEV(Modal, { "aria-labelledby": "close-modal-title", color: "primary", open: open, onClose: (event, reason) => {
                    window.sout.tracker(`Reason: ${reason}`);
                    setOpen(false);
                    mmodel.dispose(); // 手动创建的需要手动销毁
                }, sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }, children: _jsxDEV(Sheet, { variant: "plain", color: "neutral", sx: {
                        minWidth: 300,
                        borderRadius: "md",
                        p: 3,
                    }, style: loading
                        ? {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }
                        : {}, children: [_jsxDEV(CircularProgress, { id: "monaco-editor-CircularProgress", color: "neutral", value: 30, variant: "solid", size: "lg", style: loading ? {} : { display: "none" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 225, columnNumber: 13 }, this), _jsxDEV("div", { id: "monaco-editor-container", style: loading ? { display: "none" } : {}, children: _jsxDEV(EditorContainer, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 237, columnNumber: 15 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 233, columnNumber: 13 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 207, columnNumber: 11 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 192, columnNumber: 9 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 191, columnNumber: 7 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 180, columnNumber: 11 }, this));
}
function Configer() {
    const _props = React.useContext(SharedProps);
    const [readonly, setReadonly] = React.useState(false);
    const { mode, setMode } = useColorScheme();
    console.log(_props.initConfig.lang, _props.initConfig.theme);
    React.useEffect(() => {
        setMode(_props.initConfig.theme === "vs" ? "light" : "dark");
        window.sout.tracker(_props.initConfig.readonly);
        setReadonly(_props.initConfig.readonly);
    }, [] // 只运行一次
    );
    return (_jsxDEV(_Fragment, { children: _jsxDEV(Typography, { component: "div", sx: { display: "flex", alignItems: "center" }, children: [_jsxDEV(Select, { color: "primary", placeholder: "Language", defaultValue: _props.initConfig.lang, variant: "soft", indicator: _jsxDEV(KeyboardArrowDown, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 271, columnNumber: 22 }, this), onChange: (e, newValue) => {
                        // let Ms = _props.monacoIns.editor.getModels();
                        _props.monacoIns.editor.setModelLanguage(_props.mmodel, newValue);
                    }, slotProps: {
                        listbox: {
                            component: "div",
                            sx: {
                                maxHeight: 360,
                                overflow: "auto",
                                "--List-padding": "0px",
                            },
                        },
                    }, endDecorator: _jsxDEV(Chip, { size: "sm", color: "danger", variant: "soft", children: window._.sum(window._.map(groupLang, (i) => {
                            return i.length;
                        })) }, void 0, false, { fileName: _jsxFileName, lineNumber: 289, columnNumber: 25 }, this), sx: {
                        width: 240,
                        flex: 1,
                        [`& .${selectClasses.indicator}`]: {
                            transition: "0.2s",
                            [`&.${selectClasses.expanded}`]: {
                                transform: "rotate(-180deg)",
                            },
                        },
                    }, style: { minWidth: "16em", margin: "1% 0.3%" }, children: Object.entries(groupLang).map(([name, items], index) => (_jsxDEV(React.Fragment, { children: [index !== 0 && _jsxDEV(ListDivider, { role: "none" }, void 0, false, { fileName: _jsxFileName, lineNumber: 312, columnNumber: 30 }, this), _jsxDEV(List, { "aria-labelledby": `select-group-${name}`, sx: { "--List-decorator-size": "28px" }, children: [_jsxDEV(ListItem, { id: `select-group-${name}`, sticky: true, children: _jsxDEV(Typography, { level: "body3", 
                                            // textTransform="uppercase"
                                            letterSpacing: "md", children: [name, " (", items.length, ")"] }, void 0, true, { fileName: _jsxFileName, lineNumber: 318, columnNumber: 19 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 317, columnNumber: 17 }, this), items.map((item) => (_jsxDEV(Option, { value: item, label: _jsxDEV(React.Fragment, { children: [_jsxDEV(Chip, { size: "sm", color: colorsLang[name], sx: { borderRadius: "xs", mr: 1, ml: -0.5 }, children: name }, void 0, false, { fileName: _jsxFileName, lineNumber: 332, columnNumber: 25 }, this), " ", groupLangText[item] /*关闭下拉框后显示的值*/] }, void 0, true, { fileName: _jsxFileName, lineNumber: 330, columnNumber: 28 }, this), sx: {
                                            [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]: {
                                                opacity: 1,
                                            },
                                        }, children: [_jsxDEV(ListItemDecorator, { sx: { opacity: 0 }, children: _jsxDEV(Check, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 350, columnNumber: 23 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 349, columnNumber: 21 }, this), groupLangText[item] /*在下拉框里显示的值*/] }, item, true, { fileName: _jsxFileName, lineNumber: 326, columnNumber: 39 }, this)))] }, void 0, true, { fileName: _jsxFileName, lineNumber: 313, columnNumber: 15 }, this)] }, name, true, { fileName: _jsxFileName, lineNumber: 310, columnNumber: 69 }, this))) }, void 0, false, { fileName: _jsxFileName, lineNumber: 266, columnNumber: 9 }, this), _jsxDEV(Select, { color: "primary", placeholder: "Theme", defaultValue: _props.initConfig.theme || "markdown", variant: "soft", indicator: _jsxDEV(KeyboardArrowDown, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 364, columnNumber: 22 }, this), slotProps: {
                        listbox: {
                            component: "div",
                            sx: {
                                maxHeight: 360,
                                overflow: "auto",
                                "--List-padding": "0px",
                            },
                        },
                    }, endDecorator: _jsxDEV(Chip, { size: "sm", color: "neutral", variant: "soft", children: window._.sum(window._.map(groupTheme, (i) => {
                            return i.length;
                        })) }, void 0, false, { fileName: _jsxFileName, lineNumber: 375, columnNumber: 25 }, this), sx: {
                        width: 240,
                        flex: 1,
                        [`& .${selectClasses.indicator}`]: {
                            transition: "0.2s",
                            [`&.${selectClasses.expanded}`]: {
                                transform: "rotate(-180deg)",
                            },
                        },
                    }, style: { minWidth: "20em", margin: "1% 0.3%" }, onChange: (e, newValue) => {
                        _props.editor.updateOptions({ theme: newValue });
                        setMode(isLightTheme(newValue) ? "light" : "dark");
                    }, children: Object.entries(groupTheme).map(([name, items], index) => (_jsxDEV(React.Fragment, { children: [index !== 0 && _jsxDEV(ListDivider, { role: "none" }, void 0, false, { fileName: _jsxFileName, lineNumber: 402, columnNumber: 30 }, this), _jsxDEV(List, { "aria-labelledby": `select-group-${name}`, sx: { "--List-decorator-size": "28px" }, children: [_jsxDEV(ListItem, { id: `select-group-${name}`, sticky: true, children: _jsxDEV(Typography, { level: "body3", textTransform: "uppercase", letterSpacing: "md", children: [name, " (", items.length, ")"] }, void 0, true, { fileName: _jsxFileName, lineNumber: 408, columnNumber: 19 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 407, columnNumber: 17 }, this), items.map((item) => (_jsxDEV(Option, { value: item, label: _jsxDEV(React.Fragment, { children: [_jsxDEV(Chip, { size: "sm", color: colorsTheme[name], sx: { borderRadius: "xs", mr: 1, ml: -0.5 }, children: name }, void 0, false, { fileName: _jsxFileName, lineNumber: 422, columnNumber: 25 }, this), " ", item] }, void 0, true, { fileName: _jsxFileName, lineNumber: 420, columnNumber: 28 }, this), sx: {
                                            [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]: {
                                                opacity: 1,
                                            },
                                        }, children: [_jsxDEV(ListItemDecorator, { sx: { opacity: 0 }, children: _jsxDEV(Check, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 440, columnNumber: 23 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 439, columnNumber: 21 }, this), item] }, item, true, { fileName: _jsxFileName, lineNumber: 416, columnNumber: 39 }, this)))] }, void 0, true, { fileName: _jsxFileName, lineNumber: 403, columnNumber: 15 }, this)] }, name, true, { fileName: _jsxFileName, lineNumber: 400, columnNumber: 70 }, this))) }, void 0, false, { fileName: _jsxFileName, lineNumber: 359, columnNumber: 9 }, this), _jsxDEV(Checkbox, { color: "primary", label: "\u53CA\u65F6\u4FDD\u5B58", size: "lg", variant: "soft", disabled: true, style: { margin: "0 1em", flex: 1 } }, void 0, false, { fileName: _jsxFileName, lineNumber: 449, columnNumber: 9 }, this), _jsxDEV(Checkbox, { color: "primary", label: "\u81EA\u52A8\u6362\u884C", size: "lg", variant: "soft", defaultChecked: true, style: { margin: "0 1em", flex: 1 }, onChange: (event) => {
                        const isChecked = event.target.checked;
                        _props.editor.updateOptions({ wordWrap: isChecked ? "on" : "off" });
                    } }, void 0, false, { fileName: _jsxFileName, lineNumber: 457, columnNumber: 9 }, this), _jsxDEV(Typography, { component: "label", sx: { margin: 0 }, endDecorator: _jsxDEV(Switch, { checked: readonly, disabled: !_props.initConfig.editable, onChange: (event) => {
                            const isChecked = event.target.checked;
                            _props.editor.updateOptions({ readOnly: isChecked }); // https://www.cnblogs.com/zzsdream/p/14055963.html
                            setReadonly(isChecked);
                        }, slotProps: {
                            track: {
                                children: (_jsxDEV(_Fragment, { children: [_jsxDEV(Typography, { component: "span", level: "inherit", sx: { ml: "10px" }, children: "On" }, void 0, false, { fileName: _jsxFileName, lineNumber: 485, columnNumber: 23 }, this), _jsxDEV(Typography, { component: "span", level: "inherit", sx: { mr: "8px" }, children: "Off" }, void 0, false, { fileName: _jsxFileName, lineNumber: 492, columnNumber: 23 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 483, columnNumber: 30 }, this)),
                            },
                        }, sx: {
                            "--Switch-thumb-size": "27px",
                            "--Switch-track-width": "64px",
                            "--Switch-track-height": "31px",
                        } }, void 0, false, { fileName: _jsxFileName, lineNumber: 472, columnNumber: 25 }, this), children: "\u53EA\u8BFB\u6A21\u5F0F" }, void 0, false, { fileName: _jsxFileName, lineNumber: 469, columnNumber: 9 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 262, columnNumber: 7 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 260, columnNumber: 11 }, this));
}
function EditorContainer() {
    const _props = React.useContext(SharedProps);
    return (_jsxDEV(_Fragment, { children: [_jsxDEV(ModalClose, { variant: "soft" }, void 0, false, { fileName: _jsxFileName, lineNumber: 532, columnNumber: 7 }, this), _jsxDEV(Typography, { component: "h2", id: "close-modal-title", level: "h4", textColor: "inherit", fontWeight: "lg", children: _props.nodeID }, void 0, false, { fileName: _jsxFileName, lineNumber: 533, columnNumber: 7 }, this), _jsxDEV(Configer, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 542, columnNumber: 7 }, this), _jsxDEV("div", { id: "monaco-editor", className: "editor-monaco", style: {
                    width: "85vw",
                    maxWidth: "2000px",
                    maxHeight: "calc(100vh - 300px)",
                    height: "600px",
                } }, void 0, false, { fileName: _jsxFileName, lineNumber: 543, columnNumber: 7 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 530, columnNumber: 11 }, this));
}
