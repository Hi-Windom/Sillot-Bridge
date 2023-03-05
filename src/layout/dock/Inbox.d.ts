import { Tab } from "../Tab";
import { Model } from "../Model";
export declare class Inbox extends Model {
    private element;
    private selectIds;
    private currentPage;
    private pageCount;
    private data;
    constructor(tab: Tab);
    private updateAction;
    private back;
    private more;
    private remove;
    private move;
    private update;
}
