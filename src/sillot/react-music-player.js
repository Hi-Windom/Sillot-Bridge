import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
const _jsxFileName = "C:/GitRepo/Sillot/app/src/sillot/react-music-player.tsx";
import * as ReactDOM from "react-dom/client";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
export class MusicPlayer {
    root;
    constructor(props) {
        const e = document.getElementById(props.id);
        if (!e) {
            return;
        }
        const options = {
            audioLists: [
                {
                    name: "姬霓太美",
                    musicSrc: "",
                    cover: "",
                },
                {
                    name: "姬霓太美",
                    musicSrc: "",
                    cover: "",
                },
                {
                    name: "姬霓太美",
                    musicSrc: "",
                    cover: "",
                },
            ],
        };
        this.root = ReactDOM.createRoot(e);
        this.root.render(_jsxDEV(_Fragment, { children: _jsxDEV(ReactJkMusicPlayer, { ...options }, void 0, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 9 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 33, columnNumber: 22 }, this));
    }
}
