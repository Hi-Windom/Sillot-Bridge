export const escapeHtml = (html) => {
    return html.replace(/&/g, "&amp;").replace(/</g, "&lt;");
};
export const escapeAttr = (html) => {
    return html.replace(/"/g, "&quot;").replace(/'/g, "&apos;");
};
