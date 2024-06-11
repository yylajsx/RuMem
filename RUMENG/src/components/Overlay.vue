<!-- Overlay.vue -->
<!--遮罩层-->
<template>
  <div v-if="isVisible" class="overlay">
    <div class="closeBtn" @click="close"></div>
    <div class="main-context">
      {{ counter.count }}
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import {useCounterStore} from "@/stores/counter.js";
import {ref} from 'vue';

const counter = useCounterStore();
const isVisible = ref(true);

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
