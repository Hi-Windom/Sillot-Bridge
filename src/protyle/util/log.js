export const log = (method, content, type, print) => {
    if (print) {
        // @ts-ignore
        console.log(`${method} - ${type}: ${content}`);
    }
};
