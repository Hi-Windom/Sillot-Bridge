import { Tab } from "../Tab";
import { Model } from "../Model";
import { Tree } from "../../util/Tree";
export declare class Bookmark extends Model {
    private openNodes;
    tree: Tree;
    private element;
    constructor(tab: Tab);
    update(): void;
}
