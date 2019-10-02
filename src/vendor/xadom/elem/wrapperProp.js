export const wrapperProp = (el, xa) => {
    let xaProp = {
        get count() {
            return el.childElementCount;
        },
        get first() {
            let res = el.firstElementChild;
            return res !== null ? xa.wrap(res) : undefined;
        },
        get firstNode() {
            return el.firstChild || undefined;
        },
        get last() {
            let res = el.lastElementChild;
            return res !== null ? xa.wrap(res) : undefined;
        },
        get lastNode() {
            return el.lastChild || undefined;
        },
        get nodes() {
            return Array.from(el.childNodes);
        },
    };
    return xaProp;
};
//# sourceMappingURL=wrapperProp.js.map