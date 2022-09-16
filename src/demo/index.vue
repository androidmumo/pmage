<template>
  <div>
    <pmage
      :src="'https://ftp.bmp.ovh/imgs/2021/04/b3a70da0fa596920.jpeg'"
      :animation="true"
      :blur="10"
      :scale="1.2"
      :time="0.5"
      :delay="2000"
      @before-load="beforeLoad"
      @onload="onload">
      <template #default>
        <div class="default">默认插槽</div>
      </template>
      <template #top>
        <div class="top">上层插槽</div>
      </template>
    </pmage>
  </div>
</template>

<script setup lang="ts">
const beforeLoad = (next: Function) => {
  console.log('beforeLoad')
  next();
}

const onload = () => {
  console.log('onload')
}
</script>

<style>
.default {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.top {
  color: #fff;
}
</style>
