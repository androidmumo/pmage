<template>
	<div ref="_pmage" :style="state.style"
		:class="{ '_pmage': true, '_pmage-loaded': state.loaded, '_pmage-animation': state.animation }">
		<div ref="_pmageSlotDefault" class="_pmage-slot-default">
			<slot name="default" />
		</div>
		<div ref="_pmageSlotTop" class="_pmage-slot-top">
			<slot name="top" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance, onActivated, onMounted } from "vue"

const { appContext } = getCurrentInstance() || {};
const emit = defineEmits(['beforeLoad', 'onload', 'onerror'])

interface Props {
	placeholder?: string, // 占位图
	src: string, // 原图
	animation?: boolean, // 是否启用动画
	onBeforeLoad?: any, // load前钩子
	blur?: number, // 模糊像素(px)
	scale?: number, // 放大倍数
	time?: number, // 动画时间(s)
	delay?: number, // 延时(ms)
}
const props = withDefaults(defineProps<Props>(), {
	placeholder: '',
	src: '',
	animation: false,
	onBeforeLoad: null,
	blur: NaN,
	scale: NaN,
	time: NaN,
	delay: NaN,
})

const state = reactive({
	loaded: false, // 图片加载完成
	style: '',
	animation: true,
	delay: 0,
})

// 拼装style
const reduceStyle = () => {
	let style = ''
	if (!!props.blur) style = `--blur: ${props.blur}px;`
	if (!!props.scale) style += ` --scale: ${props.scale};`
	if (!!props.time) style += ` --time: ${props.time}s;`
	state.style = style
}
reduceStyle()

// 初始化参数
const initOption = () => {
	const { animation, delay } = appContext?.config.globalProperties.pmage_config;
	state.animation = !!props.animation ? props.animation : animation;
	state.delay = !!props.delay ? props.delay : delay;
}
initOption()


const _pmage = ref()
const _pmageSlotDefault = ref()
const _pmageSlotTop = ref()

const loadPlaceholderImage = () => {
	const img = new Image();
	img.className = "_pmage-placeholder";
	const div = document.createElement("div");
	div.className = "_pmage-overlay-placeholder"
	img.onload = () => {
		_pmage.value.insertBefore(img, _pmageSlotDefault.value);
		_pmage.value.insertBefore(div, _pmageSlotDefault.value);
	};
	img.src = props.placeholder || props.src;
}

const loadImage = () => {
	const img = new Image();
	img.className += " _pmage-origin";
	const div = document.createElement("div");
	div.className = "_pmage-overlay-all"
	img.onload = () => {
		_pmage.value.insertBefore(img, _pmageSlotTop.value);
		_pmage.value.insertBefore(div, _pmageSlotTop.value);
		state.loaded = true
		emit('onload')
	};
	img.onerror = () => {
		emit('onerror')
	}
	img.src = props.src;
}

onActivated(() => {
	if (state.loaded) {
		state.animation = false;
		return;
	};
})

onMounted(() => {
	if (state.loaded) {
		state.animation = false;
		return;
	};
	loadPlaceholderImage();
	setTimeout(() => {
		if (!props.onBeforeLoad) return loadImage();
		emit('beforeLoad', () => loadImage());
	}, state.delay);
})

// todo watch src的时候加载
</script>
  
<style lang="scss">
$saturate: 120%; // 饱和度

// ._pmage {
// 	--blur: 10px; // 模糊像素
// 	--scale: 1.2; // 放大倍数
// 	--time: 0.5s; // 动画时间
// }

@keyframes _pmage-blur {
	from {
		filter: blur(var(--blur));
		-webkit-filter: blur(var(--blur));
		-ms-filter: blur(var(--blur));
		-moz-filter: blur(var(--blur));
		backdrop-filter: saturate($saturate) blur(var(--blur));
		-webkit-backdrop-filter: saturate($saturate) blur(var(--blur));
	}

	to {
		filter: blur(0);
		-webkit-filter: blur(0);
		-ms-filter: blur(0);
		-moz-filter: blur(0);
		backdrop-filter: saturate(100%) blur(0);
		-webkit-backdrop-filter: saturate(100%) blur(0);
	}
}

@keyframes _pmage-scale {
	from {
		transform: scale(var(--scale));
	}

	to {
		transform: scale(1);
	}
}

._pmage {
	overflow: hidden;
	width: 100%;
	position: relative;

	img {
		overflow: hidden;
		width: 100%;
		display: block;
		padding: 0;
		margin: 0;
	}

	._pmage-placeholder {
		overflow: hidden;
		width: 100%;
		height: 100%;
		transform: scale(var(--scale));
	}

	._pmage-overlay-placeholder {
		overflow: hidden;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		filter: blur(var(--blur));
		-webkit-filter: blur(var(--blur));
		-ms-filter: blur(var(--blur));
		-moz-filter: blur(var(--blur));
		backdrop-filter: saturate($saturate) blur(var(--blur));
		-webkit-backdrop-filter: saturate($saturate) blur(var(--blur));
	}

	._pmage-origin {
		overflow: hidden;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	._pmage-slot-default {
		overflow: hidden;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	._pmage-overlay-all {
		overflow: hidden;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	._pmage-slot-top {
		overflow: hidden;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
}

._pmage-loaded._pmage-animation {
	._pmage-origin {
		animation: _pmage-scale var(--time) cubic-bezier(0.39, 0.575, 0.565, 1);
	}

	._pmage-overlay-all {
		animation: _pmage-blur var(--time) cubic-bezier(0.39, 0.575, 0.565, 1);
	}
}
</style>
  