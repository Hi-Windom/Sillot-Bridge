/// <reference types="./src/types" />
export declare class Menu {
    element: HTMLElement;
    removeCB: () => void;
    private wheelEvent;
    constructor();
    showSubMenu(subMenuElement: HTMLElement): void;
    private preventDefault;
    remove(): void;
    append(element?: HTMLElement): void;
    popup(options: {
        x: number;
        y: number;
        h?: number;
        w?: number;
    }, isLeft?: boolean): void;
}
export declare class MenuItem {
    element: HTMLElement;
    constructor(options: IMenu);
}
export declare const bindMenuKeydown: (event: KeyboardEvent) => boolean;
