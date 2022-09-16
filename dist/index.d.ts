import Pmage from "./index.vue";
export { Pmage };
interface Args {
    blur?: number;
    scale?: number;
    time?: number;
}
declare const pmage: {
    install(App: any, options?: Args | undefined): void;
};
export default pmage;
