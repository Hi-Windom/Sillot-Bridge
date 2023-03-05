export const initEditorOptions = {
    // value: "",
    autoDetectHighContrast: true,
    acceptSuggestionOnCommitCharacter: true,
    acceptSuggestionOnEnter: "on",
    tabCompletion: "on",
    accessibilityPageSize: 10,
    accessibilitySupport: "on",
    autoClosingBrackets: "always",
    autoClosingDelete: "always",
    autoClosingOvertype: "always",
    autoClosingQuotes: "always",
    autoIndent: "advanced",
    automaticLayout: true,
    codeLens: true,
    codeLensFontFamily: "",
    codeLensFontSize: 14,
    colorDecorators: true,
    comments: {
        ignoreEmptyLines: true,
        insertSpace: true, // 在行注释标记之后和块注释标记内插入一个空格。默认为真。
    },
    contextmenu: true,
    columnSelection: false,
    autoSurround: "never",
    copyWithSyntaxHighlighting: true,
    cursorBlinking: "smooth",
    cursorSmoothCaretAnimation: "on",
    cursorStyle: "line",
    cursorSurroundingLines: 3,
    cursorSurroundingLinesStyle: "all",
    cursorWidth: 2,
    minimap: {
        enabled: true, // 是否启用预览图
    },
    folding: true,
    links: true,
    overviewRulerBorder: false,
    renderLineHighlight: "all",
    roundedSelection: true,
    scrollBeyondLastLine: false,
    wordWrap: "on",
    wordBreak: "keepAll",
    fontSize: 14,
    insertSpaces: true,
    matchBrackets: "always",
    mouseWheelZoom: true,
    multiCursorLimit: 20,
    padding: { top: 16, bottom: 16 },
    renderWhitespace: "selection",
    smoothScrolling: false,
    showUnused: true,
    // suggestFontSize: 16, // 自动建议的字体大小，默认使用编辑器字体大小可以跟随滚轮缩放
    tabSize: 2, // TAB 缩进量
};
export const groupTheme = {
    "build-in": ["vs", "vs-dark", "hc-light", "hc-black"],
    light: ["IPlastic", "Katzenmilch", "Solarized-light"],
    dark: [
        "Birds-of-Paradise",
        "Blackboard",
        "Cobalt",
        "Cobalt2",
        "Dracula",
        "IdleFingers",
        "Monokai",
        "Night-Owl",
        "Sunburst",
        "Tomorrow-Night-Eighties",
        "Zenburnesque",
    ],
};
export const colorsTheme = {
    "build-in": "primary",
    light: "neutral",
    dark: "success",
};
export function isLightTheme(theme) {
    const ltArray = [
        "vs",
        "hc-light",
        "IPlastic",
        "Katzenmilch",
        "Solarized-light",
    ];
    if (ltArray.includes(theme))
        return true;
    return false;
}
export const groupLang = {
    IntelliSenseable: [
        "css",
        "html",
        "json",
        "javascript",
        "less",
        "scss",
        "typescript",
    ],
    Popular: ["cpp", "csharp", "go", "markdown", "python", "sql"],
    Other: [
        "dart",
        "dockerfile",
        "fsharp",
        "java",
        "julia",
        "kotlin",
        "lua",
        "objective-c",
        "pascal",
        "perl",
        "pgsql",
        "php",
        "powershell",
        "r",
        "ruby",
        "rust",
        "shell",
        "vb",
        "xml",
        "yaml",
    ],
};
export const colorsLang = {
    IntelliSenseable: "primary",
    Popular: "danger",
    Other: "neutral",
};
export const groupLangText = {
    css: "CSS",
    html: "HTML",
    json: "Json",
    javascript: "JavaScript",
    less: "Less",
    scss: "Scss",
    typescript: "TypeScript",
    cpp: "C++",
    csharp: "C#",
    dart: "Dart",
    dockerfile: "Dockerfile",
    fsharp: "F#",
    go: "Go",
    java: "Java",
    julia: "Julia",
    kotlin: "Kotlin",
    lua: "Lua",
    markdown: "Markdown",
    "objective-c": "Objective-C",
    pascal: "Pascal",
    perl: "Perl",
    pgsql: "PostgreSQL",
    php: "PHP",
    powershell: "PowerShell",
    python: "Python",
    r: "R",
    ruby: "Ruby",
    rust: "Rust",
    shell: "Shell",
    sql: "SQL",
    vb: "VB",
    xml: "XML",
    yaml: "Yaml",
};
// 值得一提的是，根据monaco-editor的说法，整个支持的语言分为两组：
// 具有丰富和验证的语言IntelliSense
// TypeScript
// JavaScript
// CSS
// LESS
// SCSS
// JSON
// HTML
// 仅具有基本语法着色的语言
// XML
// PHP
// C#
// C++
// Razor
// Markdown
// Diff
// Java
// VB
// CoffeeScript
// Handlebars
// Batch
// Pug
// F#
// Lua
// Powershell
// Python
// Ruby
// SASS
// R
// Objective-C
