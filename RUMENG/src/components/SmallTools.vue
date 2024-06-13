<script setup>

import IconPageUp from "@/components/icons/IconPageUp.vue";
import IconCallme from "@/components/icons/IconCallme.vue";
import {computed, onMounted, onUnmounted, ref} from "vue";

let scrollY = ref(0);

let scrollToTop = function () {
  window.scrollTo({top: 0, behavior: 'smooth'}); // pageUp实现
}
let show = computed(() => {
  // 判断滚动距离是否大于100，大于则显示按钮
  return scrollY.value > 90
})
let handleScroll = function () {
  scrollY.value = window.scrollY; // 更新滚动距离
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll); // 监听滚动事件
})
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll); // 移除滚动事件监听
})


</script>

<template>
  <div class="container" v-if="show">
    <div class="wrapper">
      <IconPageUp @click="scrollToTop"/>
    </div>
    <div class="wrapper">
      <IconCallme @pointerdown="console.log('17745214589')"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 2rem;
  min-height: 2.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  position: fixed;
  bottom: 2rem;
  right: 1rem;
}

.wrapper {
  width: 100%;
  height: auto;
  //background-color: transparent;
  background-color: var(--bg-000);
  border: 1px black solid;
  border-radius: 0.75rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-bottom: 0.75rem;
}

</style>