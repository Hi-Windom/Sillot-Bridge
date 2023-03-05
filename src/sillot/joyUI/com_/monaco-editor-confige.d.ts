import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
export declare const initEditorOptions: monaco.editor.IStandaloneEditorConstructionOptions;
export declare const groupTheme: {
    "build-in": string[];
    light: string[];
    dark: string[];
};
export declare const colorsTheme: {
    "build-in": string;
    light: string;
    dark: string;
};
export declare function isLightTheme(theme: string): boolean;
export declare const groupLang: {
    IntelliSenseable: string[];
    Popular: string[];
    Other: string[];
};
export declare const colorsLang: {
    IntelliSenseable: string;
    Popular: string;
    Other: string;
};
export declare const groupLangText: {
    css: string;
    html: string;
    json: string;
    javascript: string;
    less: string;
    scss: string;
    typescript: string;
    cpp: string;
    csharp: string;
    dart: string;
    dockerfile: string;
    fsharp: string;
    go: string;
    java: string;
    julia: string;
    kotlin: string;
    lua: string;
    markdown: string;
    "objective-c": string;
    pascal: string;
    perl: string;
    pgsql: string;
    php: string;
    powershell: string;
    python: string;
    r: string;
    ruby: string;
    rust: string;
    shell: string;
    sql: string;
    vb: string;
    xml: string;
    yaml: string;
};
