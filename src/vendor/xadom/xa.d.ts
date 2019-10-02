import { WrapperFunc } from './elem/wrapperFunc';
import { WrapperProp } from './elem/wrapperProp';
import { XaUtil } from './util/xaUtil';
export interface XaProp {
    document: Document;
}
export declare type XaElement<T extends Element> = T & WrapperProp & WrapperFunc<T> & {
    _: T;
};
export declare type Xa = XaUtil & Document & {
    wrap: <T extends Element>(el: T) => XaElement<T>;
} & {
    body: XaElement<HTMLElement>;
    head: XaElement<HTMLHeadElement>;
    html: XaElement<HTMLElement>;
};
export declare const createXa: (prop: XaProp) => Xa;
//# sourceMappingURL=xa.d.ts.map