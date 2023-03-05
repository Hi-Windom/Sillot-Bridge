import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
const _jsxFileName = "C:/GitRepo/Sillot/app/src/layout/SillotDrawer.tsx";
import * as React from "react";
import * as Client from "react-dom/client";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlined from "@mui/icons-material/ModeCommentOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import Face from "@mui/icons-material/Face";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import CloseIcon from "@mui/icons-material/Close";
export default function SillotDrawer(props) {
    const id = props.id;
    const e = document.getElementById(id);
    if (!e) {
        return;
    }
    const root = Client.createRoot(e);
    // 在 React 中， <></> 是 <React.Fragment/> 的语法糖
    root.render(_jsxDEV(_Fragment, { children: _jsxDEV(InstagramPost, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 32, columnNumber: 7 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 30, columnNumber: 15 }, this));
}
function InstagramPost() {
    const [open, setOpen] = React.useState(true); // react hooks
    return (_jsxDEV(Card, { variant: "soft", sx: {
            display: open ? "flex" : "none",
            minWidth: 300,
            backgroundColor: "var(--b3-theme-surface)",
            "--Card-radius": (theme) => theme.vars.radius.xs,
        }, children: [_jsxDEV(Box, { sx: { display: "flex", alignItems: "center", pb: 1.5, gap: 1 }, children: [_jsxDEV(Box, { sx: {
                            position: "relative",
                            "&:before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                m: "-2px",
                                borderRadius: "50%",
                                background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                            },
                        }, children: _jsxDEV(Avatar, { size: "sm", src: "/stage/icon.png", sx: { p: 0.5, border: "2px solid", borderColor: "background.body" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 67, columnNumber: 11 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 9 }, this), _jsxDEV(Typography, { fontWeight: "lg", children: "Sillot" }, void 0, false, { fileName: _jsxFileName, lineNumber: 73, columnNumber: 9 }, this), _jsxDEV(IconButton, { variant: "plain", color: "neutral", size: "sm", sx: { ml: "auto" }, children: _jsxDEV(MoreHoriz, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 80, columnNumber: 11 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 74, columnNumber: 9 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 7 }, this), _jsxDEV(CardOverflow, { children: _jsxDEV(AspectRatio, { sx: { backgroundColor: "transparent" }, children: _jsxDEV("img", { src: "/stage/icon.png", alt: "", loading: "lazy" }, void 0, false, { fileName: _jsxFileName, lineNumber: 85, columnNumber: 11 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 84, columnNumber: 9 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 83, columnNumber: 7 }, this), _jsxDEV(Box, { sx: { display: "flex", alignItems: "center", mx: -1, my: 1 }, children: [_jsxDEV(Box, { sx: { width: 0, display: "flex", gap: 0.5 }, children: [_jsxDEV(IconButton, { variant: "plain", color: "neutral", size: "sm", children: _jsxDEV(FavoriteBorder, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 91, columnNumber: 13 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 90, columnNumber: 11 }, this), _jsxDEV(IconButton, { variant: "plain", color: "neutral", size: "sm", children: _jsxDEV(ModeCommentOutlined, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 94, columnNumber: 13 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 93, columnNumber: 11 }, this), _jsxDEV(IconButton, { variant: "plain", color: "neutral", size: "sm", children: _jsxDEV(SendOutlined, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 97, columnNumber: 13 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 96, columnNumber: 11 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 89, columnNumber: 9 }, this), _jsxDEV(Box, { sx: { display: "flex", alignItems: "center", gap: 0.5, mx: "auto" }, children: [...Array(5)].map((_, index) => (_jsxDEV(Box
                        // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        , { sx: {
                                borderRadius: "50%",
                                width: `max(${6 - index}px, 3px)`,
                                height: `max(${6 - index}px, 3px)`,
                                bgcolor: index === 0 ? "primary.solidBg" : "background.level3",
                            } }, index, false, { fileName: _jsxFileName, lineNumber: 103, columnNumber: 45 }, this))) }, void 0, false, { fileName: _jsxFileName, lineNumber: 100, columnNumber: 9 }, this), _jsxDEV(Box, { sx: { width: 0, display: "flex", flexDirection: "row-reverse" }, children: _jsxDEV(IconButton, { variant: "plain", color: "neutral", size: "sm", children: _jsxDEV(BookmarkBorderRoundedIcon, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 118, columnNumber: 13 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 117, columnNumber: 11 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 116, columnNumber: 9 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 88, columnNumber: 7 }, this), _jsxDEV(Link, { component: "button", underline: "none", fontSize: "sm", fontWeight: "lg", textColor: "text.primary", children: "8.1M Likes" }, void 0, false, { fileName: _jsxFileName, lineNumber: 122, columnNumber: 7 }, this), _jsxDEV(Link, { component: "button", underline: "none", fontSize: "sm", startDecorator: "\u2026", sx: { color: "text.tertiary" }, children: "more" }, void 0, false, { fileName: _jsxFileName, lineNumber: 131, columnNumber: 7 }, this), _jsxDEV(Link, { component: "button", underline: "none", fontSize: "10px", sx: { color: "text.tertiary", my: 0.5 }, children: "2 DAYS AGO" }, void 0, false, { fileName: _jsxFileName, lineNumber: 140, columnNumber: 7 }, this), _jsxDEV(CardOverflow, { sx: { p: "var(--Card-padding)", display: "flex" }, children: [_jsxDEV(IconButton, { size: "sm", variant: "plain", color: "neutral", sx: { ml: -1 }, children: _jsxDEV(Face, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 150, columnNumber: 11 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 149, columnNumber: 9 }, this), _jsxDEV(Input, { variant: "plain", size: "sm", placeholder: "Add a comment\u2026", sx: { flexGrow: 1, mr: 1, "--Input-focusedThickness": "0px" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 152, columnNumber: 9 }, this), _jsxDEV(Button, { onClick: () => {
                            setOpen(false);
                        }, startDecorator: _jsxDEV(CloseIcon, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 162, columnNumber: 27 }, this), children: "Close" }, void 0, false, { fileName: _jsxFileName, lineNumber: 158, columnNumber: 9 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 148, columnNumber: 7 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 11 }, this));
}
