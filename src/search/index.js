import { Model } from "../layout/Model";
import { genSearch } from "./util";
export class Search extends Model {
    element;
    config;
    edit;
    constructor(options) {
        super({
            id: options.tab.id,
        });
        this.element = options.tab.panelElement;
        this.config = options.config;
        this.edit = genSearch(this.config, this.element);
    }
    updateSearch(text, replace) {
        const inputElement = this.element.querySelector(".b3-text-field");
        if (text === "") {
            inputElement.select();
            return;
        }
        const oldText = inputElement.value;
        if (oldText === text) {
            return;
        }
        if (!replace) {
            if (oldText.indexOf(text) > -1) {
                text = oldText.replace(text + " ", "").replace(" " + text, "");
            }
            else if (oldText !== "") {
                text = oldText + " " + text;
            }
        }
        inputElement.value = text;
        inputElement.select();
        inputElement.dispatchEvent(new CustomEvent("input"));
    }
}
