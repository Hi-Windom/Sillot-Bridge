import { genUUID } from "../util/genID";
export class Dialog {
    destroyCallback;
    element;
    id;
    disableClose;
    constructor(options) {
        this.disableClose = options.disableClose;
        this.id = genUUID();
        window.siyuan.dialogs.push(this);
        this.destroyCallback = options.destroyCallback;
        this.element = document.createElement("div");
        this.element.innerHTML = `<div class="b3-dialog">
<div class="b3-dialog__scrim"${options.transparent ? 'style="background-color:transparent"' : ""}></div>
<div class="b3-dialog__container" style="width:${options.width || "auto"}">
  <svg class="b3-dialog__close fn__a${this.disableClose ? " fn__none" : ""}"><use xlink:href="#iconClose"></use></svg>
  <div class="b3-dialog__header${options.title ? "" : " fn__none"}" onselectstart="return false;">${options.title || ""}</div>
  <div style="height:${options.height || "auto"}">${options.content}</div>
</div></div>`;
        this.element.querySelector(".b3-dialog__scrim").addEventListener("click", (event) => {
            if (!this.disableClose) {
                this.destroy();
            }
            event.preventDefault();
            event.stopPropagation();
            // https://ld246.com/article/1657969292700/comment/1658147006669#comments
            window.siyuan.menus.menu.remove();
        });
        if (!this.disableClose) {
            this.element.querySelector(".b3-dialog__close").addEventListener("click", (event) => {
                this.destroy();
                event.preventDefault();
                event.stopPropagation();
            });
        }
        document.body.append(this.element);
        if (options.disableAnimation) {
            this.element.classList.add("b3-dialog--open");
        }
        else {
            setTimeout(() => {
                this.element.classList.add("b3-dialog--open");
            });
        }
        // https://github.com/siyuan-note/siyuan/issues/6783
        window.siyuan.menus.menu.remove();
    }
    destroy() {
        this.element.remove();
        // https://github.com/siyuan-note/siyuan/issues/6783
        window.siyuan.menus.menu.remove();
        if (this.destroyCallback) {
            this.destroyCallback();
        }
        window.siyuan.dialogs.find((item, index) => {
            if (item.id === this.id) {
                window.siyuan.dialogs.splice(index, 1);
                return true;
            }
        });
    }
    bindInput(inputElement, enterEvent) {
        inputElement.focus();
        inputElement.addEventListener("keydown", (event) => {
            if (event.isComposing) {
                event.preventDefault();
                return;
            }
            if (event.key === "Escape") {
                this.destroy();
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            if (event.key === "Enter" && enterEvent) {
                enterEvent();
                event.preventDefault();
            }
        });
    }
}
