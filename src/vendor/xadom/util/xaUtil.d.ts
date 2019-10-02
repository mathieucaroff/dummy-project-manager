export declare const createXaUtil: (d: Document) => {
    create: <K extends "a" | "script" | "style" | "title">(name: K, attribute?: Record<string, string>, children?: Element[]) => HTMLElementTagNameMap[K];
    intoTextNode: (child: string | Node) => Node;
};
export declare type XaUtil = ReturnType<typeof createXaUtil>;
//# sourceMappingURL=xaUtil.d.ts.map