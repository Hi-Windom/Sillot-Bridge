/// <reference types="./src/types" />
import { Layout } from "../index";
import { Model } from "../Model";
export declare class Dock {
    element: HTMLElement;
    layout: Layout;
    private position;
    resizeElement: HTMLElement;
    pin: boolean;
    data: {
        [key: string]: Model | boolean;
    };
    constructor(options: {
        data: {
            pin: boolean;
            data: IDockTab[][];
        };
        position: TDockPosition;
    });
    togglePin(): void;
    resetDockPosition(show: boolean): void;
    showDock(reset?: boolean): void;
    hideDock(reset?: boolean): void;
    toggleModel(type: TDockType, show?: boolean, close?: boolean): void;
    add(index: number, sourceElement: Element): void;
    private getClassDirect;
    setSize(): void;
    private getMaxSize;
    private genButton;
}
