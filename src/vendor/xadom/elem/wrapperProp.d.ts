import { Xa, XaElement } from '../xa';
export declare type WrapperProp = {
    count: number;
    first?: XaElement<Element>;
    last?: XaElement<Element>;
    firstNode?: Node;
    lastNode?: Node;
    nodes: Node[];
};
export declare const wrapperProp: <T extends Element>(el: T, xa: Xa) => WrapperProp;
//# sourceMappingURL=wrapperProp.d.ts.map