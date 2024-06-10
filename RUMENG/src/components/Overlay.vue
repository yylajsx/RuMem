<!-- Overlay.vue -->
<!--遮罩层-->
<template>
  <div v-if="isVisible" class="overlay" @click="close">
    <!-- 这里可以放置内容，例如加载动画或提示信息 -->
    <!-- 例如：<div class="loading-spinner">Loading...</div> -->
    <!-- 例如：<p>点击遮罩层关闭</p> -->
  </div>
</template>

<script setup>
import {ref} from 'vue';

const isVisible = ref(false);

function close() {
  isVisible.value = false;
}

function updateVisible(newVisible) {
  isVisible.value = newVisible;
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //background-color: rgba(0, 0, 0, 0.5);
  background-color: rgba(245, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
