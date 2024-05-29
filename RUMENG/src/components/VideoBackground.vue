<script setup>

</script>

<template>
  <video id="bbg" ref="video" autoplay class="poster__bg" loop="loop" muted
         poster="../assets/images/poster/2.png">
    <source src="../assets/images/poster/poster.mp4" type="audio/mp4">
    您的浏览器不支持播放此视频.
  </video>
</template>

<style scoped>
#bbg {
  position: fixed;
  z-index: -1;
}

@media (min-aspect-ratio: 16/9) {
  #bbg {
    width: 100%;
    height: auto;
  }
}

@media (max-aspect-ratio: 16/9) {
  #bbg {
    width: auto;
    height: 100%;
  }
}

@media (max-width: 768px) {
  #bbg {
    display: none;
  }

  html {
    background-image: url("src/assets/images/poster/2.png");
    object-fit: cover;
  }
}
</style>