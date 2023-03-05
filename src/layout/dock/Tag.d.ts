import { Tab } from "../Tab";
import { Model } from "../Model";
import { Tree } from "../../util/Tree";
export declare class Tag extends Model {
    private openNodes;
    tree: Tree;
    private element;
    constructor(tab: Tab);
    private update;
}
