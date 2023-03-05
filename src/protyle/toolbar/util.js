import { fetchPost } from "../../util/fetch";
export const previewTemplate = (pathString, element, parentId) => {
    if (!pathString) {
        element.innerHTML = "";
        return;
    }
    fetchPost("/api/template/render", {
        id: parentId,
        path: pathString
    }, (response) => {
        element.innerHTML = `<div class="protyle-wysiwyg" style="padding: 8px">${response.data.content.replace(/contenteditable="true"/g, "")}</div>`;
    });
};
