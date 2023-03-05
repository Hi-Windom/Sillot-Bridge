export declare const initNavigationMenu: (liElement: HTMLElement) => import("./Menu").Menu;
export declare const initFileMenu: (notebookId: string, pathString: string, liElement: Element) => import("./Menu").Menu;
export declare const sortMenu: (type: "notebooks" | "notebook", sortMode: number, clickEvent: (sort: number) => void) => void;
