import "react-toastify/dist/ReactToastify.css";
interface ItoastifyOptions {
    message: string;
    position?: string;
    duration?: number;
    transition?: string;
    theme?: any;
}
export declare class Toastify {
    readonly root: any;
    position: any;
    limit: number;
    transition: any;
    cID: any;
    constructor(props: {
        id: string;
        limit: number;
        theme: string;
        position?: string;
    });
    /**
     * @param p - 语义化的位置声明
     * @return {void}
     * ```tsx
     * switch (p) {
        case ??:
          this.position = toast.??;
          ...
      }
          ```
     * 将 {@link Toastify.position} 设置为 {@link toast.POSITION} 规定的值
     */
    setPosition(p: string): void;
    /**
     * 返回一个 {@link toast.POSITION} 规定的值
     * @param p - 语义化的位置声明
     */
    getPosition(p: string): any;
    /**
     *
     * ```tsx
     *  if (d) return d * 1000
     *  return false
     * ```
     * 传入一个秒数，返回一个持续时间，没有传入则返回 `false`
     * @param d - 以秒为单位的数字
     */
    getDuration(d?: number): number | false;
    setTransition(t?: string): void;
    getTransition(t?: string): any;
    getType(t?: string): "info" | "error" | "success" | "warning";
    getTheme(t?: string): "dark" | "light" | "colored";
    /**
     * @param message - 字符串信息
     * @param p - 语义化的位置声明
     * @param d - 以秒为单位的持续时间，留空、小于等于 `0` 表示不会自动消失
     */
    success(_: ItoastifyOptions): void;
    error(_: ItoastifyOptions): void;
    warn(_: ItoastifyOptions): void;
    info(_: ItoastifyOptions): void;
    toast(_: ItoastifyOptions): void;
    tt(type: string, _: ItoastifyOptions): void;
    promise(functionThatReturnPromise: any, whenPending?: string, whenSucess?: string, whenError?: string): Promise<unknown>;
    /**
     * 清除全部 `toast`
     * https://fkhadra.github.io/react-toastify/remove-toast
     * `toast.dismiss` has no effect if called during the delay before a given toast appears.
     */
    dismissAll: () => void;
    /**
     * 清除队列中等待显示的 `toast`
     * https://fkhadra.github.io/react-toastify/limit-the-number-of-toast-displayed
     */
    clearWaitingQueue: () => void;
    test(): void;
}
export {};
