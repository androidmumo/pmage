import Pmage from "./index.vue";

// 按需引入
export { Pmage };

interface Args {
	blur?: number,
	scale?: number,
	time?: number,
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
	install(App: any, options?: Args) {
		let css = ''
		if (options) {
			css = reduceStyle(options)
		}
		css = `<style type="text/css">._pmage{${css}}</style>`;
		document.head.insertAdjacentHTML("beforeend", css);
		App.component('Pmage', Pmage);
	},
};

export default pmage;