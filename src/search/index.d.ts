/// <reference types="./src/types" />
import { Model } from "../layout/Model";
import { Tab } from "../layout/Tab";
import { Protyle } from "../protyle";
export declare class Search extends Model {
    private element;
    config: ISearchOption;
    edit: Protyle;
    constructor(options: {
        tab: Tab;
        config: ISearchOption;
    });
    updateSearch(text: string, replace: boolean): void;
}
