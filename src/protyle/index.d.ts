export declare class Protyle {
    readonly version: string;
    protyle: IProtyle;
    /**
     * @param id 要挂载 Protyle 的元素或者元素 ID。
     * @param options Protyle 参数
     */
    constructor(id: HTMLElement, options?: IOptions);
    private init;
    /** 聚焦到编辑器 */
    focus(): void;
    /** 上传是否还在进行中 */
    isUploading(): boolean;
    /** 清空 undo & redo 栈 */
    clearStack(): void;
    /** 销毁编辑器 */
    destroy(): void;
}
