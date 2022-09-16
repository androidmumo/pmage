declare const _sfc_main: import("vue").DefineComponent<{
    placeholder: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    src: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    animation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    onBeforeLoad: {
        type: null;
        required: false;
        default: null;
    };
    blur: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    scale: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    time: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    delay: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, {
    emit: (event: "beforeLoad" | "onload", ...args: any[]) => void;
    props: {
        placeholder: string;
        src: string;
        animation: boolean;
        onBeforeLoad: any;
        blur: number;
        scale: number;
        time: number;
        delay: number;
    };
    state: {
        loaded: boolean;
        style: string;
    };
    _pmage: import("vue").Ref<any>;
    _pmageSlotDefault: import("vue").Ref<any>;
    _pmageSlotTop: import("vue").Ref<any>;
    loadPlaceholderImage: () => void;
    loadImage: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("beforeLoad" | "onload")[], "beforeLoad" | "onload", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    src: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    animation: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    onBeforeLoad: {
        type: null;
        required: false;
        default: null;
    };
    blur: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    scale: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    time: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    delay: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>> & {
    onBeforeLoad?: ((...args: any[]) => any) | undefined;
    onOnload?: ((...args: any[]) => any) | undefined;
}, {
    onBeforeLoad: any;
    placeholder: string;
    src: string;
    animation: boolean;
    blur: number;
    scale: number;
    time: number;
    delay: number;
}>;
export default _sfc_main;
