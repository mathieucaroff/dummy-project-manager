export const createXaUtil = (d) => {
    let create = (name, attribute = {}, children = []) => {
        let elem = d.createElement(name);
        Object.entries(attribute).forEach(([name, value]) => {
            if (elem[name] !== undefined) {
                elem[name] = value;
            }
            else {
                elem.setAttribute(name, value);
            }
        });
        children.forEach((child) => {
            elem.appendChild(child);
        });
        return elem;
    };
    let intoTextNode = (child) => {
        let node;
        if (typeof child === 'string') {
            node = d.createTextNode(child);
        }
        else {
            node = child;
        }
        return node;
    };
    let xaUtil = {
        create,
        intoTextNode,
    };
    return xaUtil;
};
//# sourceMappingURL=xaUtil.js.map