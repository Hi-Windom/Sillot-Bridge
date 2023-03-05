import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
const _jsxFileName = "C:/GitRepo/Sillot/app/src/sillot/joyUI/com_/hi.tsx";
import * as React from "react";
import * as Client from "react-dom/client";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
export class HiJoy {
    root;
    id;
    constructor(props) {
        this.id = props.id;
        this.CloseButton = this.CloseButton.bind(this);
        const e = document.getElementById(props.id);
        if (!e) {
            return;
        }
        this.root = Client.createRoot(e);
        this.root.render(_jsxDEV(_Fragment, { children: _jsxDEV(CssVarsProvider, { children: [_jsxDEV(this.ModeToggle, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 27, columnNumber: 9 }, this), _jsxDEV(this.CloseButton, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 28, columnNumber: 9 }, this), _jsxDEV(Sheet, { sx: {
                            width: 300,
                            mx: "auto",
                            my: 4,
                            py: 3,
                            px: 2,
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            borderRadius: "sm",
                            boxShadow: "md",
                        }, children: [_jsxDEV("div", { children: [_jsxDEV(Typography, { level: "h4", component: "h1", children: "Welcome!" }, void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 15 }, this), _jsxDEV(Typography, { level: "body2", children: "Sign in to continue." }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 15 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 43, columnNumber: 13 }, this), _jsxDEV(FormControl, { children: [_jsxDEV(FormLabel, { children: "Email" }, void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 15 }, this), _jsxDEV(Input
                                    // html input attribute
                                    , { 
                                        // html input attribute
                                        name: "email", type: "email", placeholder: "johndoe@email.com" }, void 0, false, { fileName: _jsxFileName, lineNumber: 51, columnNumber: 15 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 13 }, this), _jsxDEV(FormControl, { children: [_jsxDEV(FormLabel, { children: "Password" }, void 0, false, { fileName: _jsxFileName, lineNumber: 59, columnNumber: 15 }, this), _jsxDEV(Input, { name: "password", type: "password", placeholder: "password" }, void 0, false, { fileName: _jsxFileName, lineNumber: 60, columnNumber: 15 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 58, columnNumber: 13 }, this), _jsxDEV(Button, { sx: { mt: 1 /* margin top */ }, children: "Log in" }, void 0, false, { fileName: _jsxFileName, lineNumber: 62, columnNumber: 13 }, this), _jsxDEV(Typography, { endDecorator: _jsxDEV(Link, { href: "/sign-up", children: "Sign up" }, void 0, false, { fileName: _jsxFileName, lineNumber: 64, columnNumber: 29 }, this), fontSize: "sm", sx: { alignSelf: "center" }, children: "Don't have an account?" }, void 0, false, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 13 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 29, columnNumber: 11 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 26, columnNumber: 9 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 24, columnNumber: 22 }, this));
    }
    ModeToggle() {
        const { mode, setMode } = useColorScheme();
        const [mounted, setMounted] = React.useState(false);
        // necessary for server-side rendering
        // because mode is undefined on the server
        React.useEffect(() => {
            setMounted(true);
        }, []);
        if (!mounted) {
            return null;
        }
        return (_jsxDEV(Button, { variant: "outlined", onClick: () => {
                setMode(mode === "light" ? "dark" : "light");
            }, children: mode === "light" ? "Turn dark" : "Turn light" }, void 0, false, { fileName: _jsxFileName, lineNumber: 88, columnNumber: 13 }, this));
    }
    CloseButton() {
        return (_jsxDEV(Button, { variant: "outlined", onClick: () => { this.root.render(); }, children: "Close" }, void 0, false, { fileName: _jsxFileName, lineNumber: 100, columnNumber: 13 }, this));
    }
}
