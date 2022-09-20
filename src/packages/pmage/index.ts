import Pmage from "./index.vue";

// 按需引入
export { Pmage };

interface Args {
	blur?: number,
	scale?: number,
	time?: number,
	animation?: boolean,
	delay?: number,
}

// 拼装style
const reduceStyle = (args: Args) => {
	const { blur, scale, time } = args
	let style = ''
	style = `--blur: ${blur || 10}px;`
	style += ` --scale: ${scale || 1.2};`
	style += ` --time: ${time || 0.5}s;`
	return style
}

const pmage = {
	install(app: any, options?: Args) {
		let css = ''
		css = reduceStyle(options || {});
		css = `<style type="text/css">._pmage{${css}}</style>`;
		document.head.insertAdjacentHTML("beforeend", css);
		app.component('Pmage', Pmage);

		const { animation, delay } = options || {};
		app.config.globalProperties.pmage_config = {
			animation: animation || true,
			delay: delay || 0,
		}
	},
};

export default pmage;