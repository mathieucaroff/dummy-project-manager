export const wrapperFunc = (el, xa) => {
    let wrapperFunc = {
        $: (selector) => {
            let result = el.querySelector(selector);
            return result !== null ? xa.wrap(result) : undefined;
        },
        $$: (selector) => {
            return Array.from(el.querySelectorAll(selector)).map(xa.wrap);
        },
        append: (child) => {
            el.appendChild(xa.intoTextNode(child));
            return child;
        },
        clone: (deep) => xa.wrap(el.cloneNode(deep)),
        on: (type, listener, option) => {
            el.addEventListener(type, listener, option);
            let remove = () => {
                el.removeEventListener(type, listener, option);
            };
            return { remove };
        },
    };
    return wrapperFunc;
};
//# sourceMappingURL=wrapperFunc.js.map