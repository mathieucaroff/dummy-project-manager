import { Xa, XaElement } from '../xa';
export interface WrapperFunc<T> {
    $: <R extends Element>(selector: string) => XaElement<R> | undefined;
    $$: <R extends Element>(selector: string) => XaElement<R>[];
    append: <T extends Node | string>(child: T) => T;
    clone: (deep: boolean) => T;
    on: <K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, option?: boolean | AddEventListenerOptions) => void;
}
export declare const wrapperFunc: <T extends Element>(el: T, xa: Xa) => WrapperFunc<T>;
//# sourceMappingURL=wrapperFunc.d.ts.map