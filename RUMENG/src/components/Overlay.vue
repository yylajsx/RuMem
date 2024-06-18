<!-- Overlay.vue -->
<!--遮罩层-->
<template>
  <Teleport to="body">
    <div v-if="modelValue" class="overlay">
      <!--    关闭遮罩层按钮-->
      <div class="closeBtn" @click="close"></div>
      <!--    遮罩层内容-->
      <div class="main-context">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup>

let props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  pageLocation: {
    type: Number,
    default: 0
  }
})

let emits = defineEmits(['update:modelValue'])

// 关闭遮罩层
function close() {
  emits('update:modelValue', false)
  move();
}

// 取消滑动限制-在关闭遮罩层的时候调用
function move() {
  document.body.style.position = 'static';
  window.scrollTo(0, props.pageLocation);
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
