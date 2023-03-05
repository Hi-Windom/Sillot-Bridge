export declare const hintSlash: (key: string, protyle: IProtyle) => IHintData[];
export declare const hintTag: (key: string, protyle: IProtyle) => IHintData[];
export declare const hintRef: (key: string, protyle: IProtyle, isQuick?: boolean) => IHintData[];
export declare const hintEmbed: (key: string, protyle: IProtyle) => IHintData[];
export declare const hintRenderTemplate: (value: string, protyle: IProtyle, nodeElement: Element) => void;
export declare const hintRenderWidget: (value: string, protyle: IProtyle) => void;
export declare const hintRenderAssets: (value: string, protyle: IProtyle) => void;
export declare const hintMoveBlock: (pathString: string, sourceElements: Element[], protyle: IProtyle) => void;
