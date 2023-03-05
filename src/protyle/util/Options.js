import { Constants } from "../../constants";
import { merge } from "./merge";
import { hintEmbed, hintRef, hintSlash, hintTag } from "../hint/extend";
import { isMobile } from "../../util/functions";
export class Options {
    options;
    defaultOptions = {
        mode: "wysiwyg",
        blockId: "",
        render: {
            background: false,
            title: false,
            gutter: true,
            scroll: false,
            breadcrumb: true,
            breadcrumbDocName: false,
        },
        action: [],
        after: undefined,
        classes: {
            preview: "",
        },
        debugger: Constants.NODE_ENV === "development",
        hint: {
            delay: 200,
            emoji: {
                "+1": "👍",
                "-1": "👎",
                "confused": "😕",
                "eyes": "👀️",
                "heart": "❤️",
                "rocket": "🚀️",
                "smile": "😄",
                "tada": "🎉️",
            },
            emojiPath: "/emojis",
            extend: [{
                    key: "((",
                    hint: hintRef,
                }, {
                    key: "【【",
                    hint: hintRef,
                }, {
                    key: "（（",
                    hint: hintRef,
                }, {
                    key: "[[",
                    hint: hintRef,
                }, {
                    key: "{{",
                    hint: hintEmbed,
                }, {
                    key: "「「",
                    hint: hintEmbed,
                }, {
                    key: "#",
                    hint: hintTag,
                }, {
                    key: "/",
                    hint: hintSlash,
                }, {
                    key: "、",
                    hint: hintSlash,
                }, {
                    key: ":" // 必须在最后一个，否则块引用后的 : 不能被解析
                }],
        },
        lang: window.siyuan.config.appearance.lang,
        preview: {
            actions: ["desktop", "tablet", "mobile", "mp-wechat", "zhihu", "yuque"],
            delay: 1000,
            markdown: {
                paragraphBeginningSpace: window.siyuan.config.export.paragraphBeginningSpace,
                listStyle: false,
                sanitize: true,
            },
            mode: "both",
        },
        toolbar: isMobile() ? [
            "block-ref",
            "a",
            "|",
            "text",
            "strong",
            "em",
            "u",
            "clear",
            "|",
            "code",
            "tag",
            "inline-math",
            "inline-memo",
        ] : [
            "block-ref",
            "a",
            "|",
            "text",
            "strong",
            "em",
            "u",
            "s",
            "mark",
            "sup",
            "sub",
            "clear",
            "|",
            "code",
            "kbd",
            "tag",
            "inline-math",
            "inline-memo",
        ],
        typewriterMode: false,
        upload: {
            max: 1024 * 1024 * 1024 * 4,
            url: Constants.UPLOAD_ADDRESS,
            extraData: {},
            fieldName: "file[]",
            filename: (name) => name.replace(/[\\/:*?"'<>|]/g, ""),
            linkToImgUrl: "",
            withCredentials: false,
        }
    };
    constructor(options) {
        this.options = options;
    }
    merge() {
        if (this.options) {
            if (this.options.toolbar) {
                this.options.toolbar = this.mergeToolbar(this.options.toolbar);
            }
            else {
                this.options.toolbar = this.mergeToolbar(this.defaultOptions.toolbar);
            }
            if (this.options.hint?.emoji) {
                this.defaultOptions.hint.emoji = this.options.hint.emoji;
            }
        }
        return merge(this.defaultOptions, this.options);
    }
    mergeToolbar(toolbar) {
        const toolbarItem = [{
                name: "block-ref",
                hotkey: window.siyuan.config.keymap.editor.insert.blockRef.custom,
                lang: "blockRef",
                icon: "iconRef",
                tipPosition: "ne",
            }, {
                name: "a",
                hotkey: window.siyuan.config.keymap.editor.insert.link.custom,
                lang: "link",
                icon: "iconLink",
                tipPosition: "n",
            }, {
                name: "strong",
                lang: "bold",
                hotkey: window.siyuan.config.keymap.editor.insert.bold.custom,
                icon: "iconBold",
                tipPosition: "n",
            }, {
                name: "em",
                lang: "italic",
                hotkey: window.siyuan.config.keymap.editor.insert.italic.custom,
                icon: "iconItalic",
                tipPosition: "n",
            }, {
                name: "u",
                lang: "underline",
                hotkey: window.siyuan.config.keymap.editor.insert.underline.custom,
                icon: "iconUnderline",
                tipPosition: "n",
            }, {
                name: "s",
                lang: "strike",
                hotkey: window.siyuan.config.keymap.editor.insert.strike.custom,
                icon: "iconStrike",
                tipPosition: "n",
            }, {
                name: "mark",
                lang: "mark",
                hotkey: window.siyuan.config.keymap.editor.insert.mark.custom,
                icon: "iconMark",
                tipPosition: "n",
            }, {
                name: "sup",
                lang: "sup",
                hotkey: window.siyuan.config.keymap.editor.insert.sup.custom,
                icon: "iconSup",
                tipPosition: "n",
            }, {
                name: "sub",
                lang: "sub",
                hotkey: window.siyuan.config.keymap.editor.insert.sub.custom,
                icon: "iconSub",
                tipPosition: "n",
            }, {
                name: "kbd",
                lang: "kbd",
                hotkey: window.siyuan.config.keymap.editor.insert.kbd.custom,
                icon: "iconKeymap",
                tipPosition: "n",
            }, {
                name: "tag",
                lang: "tag",
                hotkey: window.siyuan.config.keymap.editor.insert.tag.custom,
                icon: "iconTags",
                tipPosition: "n",
            }, {
                name: "code",
                lang: "inline-code",
                hotkey: window.siyuan.config.keymap.editor.insert["inline-code"].custom,
                icon: "iconInlineCode",
                tipPosition: "n",
            }, {
                name: "inline-math",
                lang: "inline-math",
                hotkey: window.siyuan.config.keymap.editor.insert["inline-math"].custom,
                icon: "iconMath",
                tipPosition: "n",
            }, {
                name: "inline-memo",
                lang: "memo",
                hotkey: window.siyuan.config.keymap.editor.insert.memo.custom,
                icon: "iconM",
                tipPosition: "n",
            }, {
                name: "text",
                lang: "font",
                hotkey: window.siyuan.config.keymap.editor.insert.font.custom,
                icon: "iconFont",
                tipPosition: "n",
            }, {
                name: "clear",
                lang: "clearFontStyle",
                hotkey: window.siyuan.config.keymap.editor.insert.clearFontStyle.custom,
                icon: "iconClear",
                tipPosition: "n",
            }, {
                name: "|",
            }];
        const toolbarResult = [];
        toolbar.forEach((menuItem) => {
            let currentMenuItem = menuItem;
            toolbarItem.find((defaultMenuItem) => {
                if (typeof menuItem === "string" && defaultMenuItem.name === menuItem) {
                    currentMenuItem = defaultMenuItem;
                    return true;
                }
                if (typeof menuItem === "object" && defaultMenuItem.name === menuItem.name) {
                    currentMenuItem = Object.assign({}, defaultMenuItem, menuItem);
                    return true;
                }
            });
            toolbarResult.push(currentMenuItem);
        });
        return toolbarResult;
    }
}