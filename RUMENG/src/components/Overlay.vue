<!-- Overlay.vue -->
<!--遮罩层-->
<template>
  <div v-if="isVisible" class="overlay">
    <div class="closeBtn" @click="close"></div>
    <div class="main-context">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const isVisible = ref(true);

// 关闭遮罩层
function close() {
  isVisible.value = false;
  move();
}

// 更新遮罩层状态
function updateVisible(newVisible) {
  isVisible.value = newVisible;
}

// 记录页面滚动位置
const pageLocation = ref('');

// 禁止滚动-在显示遮罩层的时候调用
function stop(e) {
  let scrollTop = window.scrollY;//滚动的高度；
  pageLocation.value = scrollTop;
  document.body.style.position = 'fixed';
  document.body.style.top = '-' + scrollTop + 'px';
};

// 取消滑动限制-在关闭遮罩层的时候调用
function move() {
  document.body.style.position = 'static';
  window.scrollTo(0, pageLocation.value);
}
</script>

<style scoped>
.overlay {

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);
  z-index: 1000;
}

.closeBtn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #71c4ef;
  position: absolute;
  right: 60px;
  top: 40px;
}
</style>
