/// <reference types="./src/types" />
export declare const keymap: {
    element: Element;
    _genItem(keymap: Record<string, IKeymapItem>, keys: string): string;
    genHTML(): string;
    _setkeymap(): void;
    _search(value: string, keymapString: string): void;
    bindEvent(): void;
    _getKeymapString(event: KeyboardEvent, it: HTMLInputElement): string;
};
