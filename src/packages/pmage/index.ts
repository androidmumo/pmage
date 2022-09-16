import Pmage from "./index.vue";

// 按需引入
export { Pmage };

const pmage = {
	install(App: any, options?: any) {
		console.log(123, options)
		App.component('Pmage', Pmage);
	},
};

export default pmage;