# pmage
这是一个适用于VUE3的渐进式图片加载插件！



<img src="./preview.gif" alt="preview" width="66%" />



**pmage** 即 **Progressive Image** ，它可以帮您：实现从高斯模糊的缩略图到原图的平缓过渡，改善用户体验。

原理：缩略图会被优先下载，使用户先看到一张高斯模糊的缩略图；当原图加载完成时，再平滑过渡到高清图片，这便是渐进加载。

### 安装

```
npm install pmage --save
```

### 引入

##### 全局引入

```javascript
import { createApp } from 'vue'
import App from './App.vue'

import pmage from 'pmage' // 引入pmage
import 'pmage/dist/style.css' // 引入样式文件

const app = createApp(App)

app.use(pmage, {
	blur: 10, // 模糊像素(px)，默认为10
	scale: 1.2, // 缩放倍数，默认为1.2
	time: 0.5, // 动画持续时间(s)，默认为0.5
	animation: true, // 是否启用动画，默认为true
	delay: 1000 // 延时(ms)，默认为0
});

app.mount('#app')
```

请注意，全局配置的属性，会被组件上的Props覆盖。

##### 按需引入

```javascript
import { pmage } from 'pmage' // 引入pmage
import 'pmage/dist/style.css' // 引入样式文件
```

### 使用

##### 最简引用

```vue
<pmage :src="'https://ftp.bmp.ovh/imgs/2021/04/b3a70da0fa596920.jpeg'" />
```

##### 全部能力

```vue
<template>
	<pmage
		:placeholder="'https://ftp.bmp.ovh/imgs/2021/04/c7a9451f12cb70ce.jpg'"
		:src="'https://ftp.bmp.ovh/imgs/2021/04/b3a70da0fa596920.jpeg'"
		:animation="true"
		:blur="10"
		:scale="1.2"
		:time="0.5"
		:delay="2000"
		@before-load="beforeLoad"
		@onload="onload"
	>
		<template #default>
			<div class="default">默认插槽</div>
		</template>
		<template #top>
			<div class="top">上层插槽</div>
		</template>
	</pmage>
</template>
	
<script setup>
import pmage from 'pmage';

const beforeLoad = (next) => {
	console.log('beforeLoad')
	next();
}

const onload = () => {
	console.log('onload')
}
</script>
```

### Props

| 属性        | 类型    | 是否必须 | 说明                       |
| ----------- | ------- | -------- | -------------------------- |
| src         | string  | 必须     | 原图的src                  |
| placeholder | string  | 可选     | 占位图的src                |
| animation   | boolean | 可选     | 是否启用动画，默认为true   |
| blur        | number  | 可选     | 模糊像素(px)，默认为10     |
| scale       | number  | 可选     | 缩放倍数，默认为1.2        |
| time        | number  | 可选     | 动画持续时间(s)，默认为0.5 |
| delay       | number  | 可选     | 延时(ms)，默认为0          |

`placeholder` 占位图建议使用原图等比缩放后的base64格式图片，来使体验最佳化。

### Event

| 事件         | 参数   | 说明                                                         |
| ------------ | ------ | ------------------------------------------------------------ |
| @before-load | next() | 加载前钩子，原图开始加载前触发，参数为next函数，调用next后开始加载原图 |
| @onload      | 无     | 图片加载完成后触发                                           |

### Slot

| name    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| default | 默认插槽，位于占位图与原图中间，原图加载完毕后会被覆盖，适合盛放加载动画 |
| top     | 上层插槽，位于原图上方，不会被覆盖                           |

