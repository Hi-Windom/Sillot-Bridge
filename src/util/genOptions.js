export const genOptions = (data, key) => {
    let html = "";
    data.forEach((item) => {
        if (typeof item === "string") {
            html += `<option value="${item}" ${key === item ? "selected" : ""}>${item}</option>`;
        }
        else {
            html += `<option value="${item.name}" ${key === item.name ? "selected" : ""}>${item.label}</option>`;
        }
    });
    return html;
};
