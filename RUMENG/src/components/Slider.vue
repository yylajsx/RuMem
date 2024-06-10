<script setup>

</script>

<template>
  <div class="slider">
    <div class="list">
      <div v-for="item in 18" :key="item" class="item">
        <img alt="" src=""/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider {
  width: 100%;
  height: 50px;
  border: red 1px solid;
}

.list {
  display: flex;
  width: 100%;
  min-width: calc(18 * 100px);
  position: relative;
}

@keyframes sliderToLeft {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}

.item {
  width: 100px;
  height: 50px;
  border: blue 1px solid;
  position: absolute;
  left: 100%;
  animation: toLeft 10s linear infinite;
  animation-delay: 0ms;
}

@keyframes toLeft {
  to {
    left: -100px;
  }
}

.item img {
  width: 100%;
}
</style>