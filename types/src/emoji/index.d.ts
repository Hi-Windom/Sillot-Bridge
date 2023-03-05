export declare const getRandomEmoji: () => string;
export declare const unicode2Emoji: (unicode: string, assic?: boolean, className?: string, needSpan?: boolean, lazy?: boolean) => string;
export declare const lazyLoadEmoji: (element: HTMLElement, assic?: boolean) => void;
export declare const lazyLoadEmojiImg: (element: Element) => void;
export declare const filterEmoji: (key?: string, max?: number, assic?: boolean) => string;
export declare const addEmoji: (unicode: string) => void;
export declare const openEmojiPanel: (id: string, target: HTMLElement, isNotebook?: boolean) => void;
export declare const updateOutlineEmoji: (unicode: string, id: string) => void;
export declare const updateFileTreeEmoji: (unicode: string, id: string, icon?: string) => void;