# pmage
这是一个适用于VUE3的渐进式图片加载插件！

**pmage** 即 **Progressive Image** ，它可以帮您：实现从高斯模糊的缩略图到原图的平缓过渡，改善用户体验。

原理：缩略图会被优先下载，使用户先看到一张高斯模糊的缩略图；当原图加载完成时，再平滑过渡到高清图片，这便是渐进加载。

### 安装

```
npm install pmage --save
```

### 引入

```javascript
import { pmage } from 'pmage'
```

### 使用

##### 最简引用

任何情况下，您都需要给 `<pmage />` 组件指定一个宽度。

```vue
<pmage
  :style="{width: '100%'}"
  :placeholder="'https://ftp.bmp.ovh/imgs/2021/04/c7a9451f12cb70ce.jpg'"
  :src="'https://ftp.bmp.ovh/imgs/2021/04/b3a70da0fa596920.jpeg'">
</pmage>
```

##### 全部能力

```vue
<template>
	<pmage
		:style="{width: '100%'}"
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
import pmage from '../index.vue';

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

| 属性        | 类型    | 说明                       |
| ----------- | ------- | -------------------------- |
| placeholder | string  | 占位图的src                |
| src         | string  | 原图的src                  |
| animation   | boolean | 是否启用动画，默认为true   |
| blur        | number  | 模糊像素(px)，默认为10     |
| scale       | number  | 缩放倍数，默认为1.2        |
| time        | number  | 动画持续时间(s)，默认为0.5 |
| delay       | number  | 延时(ms)，默认为0          |

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

