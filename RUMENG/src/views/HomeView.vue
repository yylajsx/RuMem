<script setup>
function down(event) {
  console.log(event)
}
</script>

<template>
  <div class="home">
    <!--    海报-->
    <div class="poster">
      <!--      海报背景-->
      <div id="bgWrap">
        <video id="bg" autoplay class="poster__bg" jm_neat="1128228866" loop="loop"
               poster="../assets/images/poster/2.png" style="opacity: 1; width: 100%; max-height: calc(100vh - 6.5rem);">
          <source src="../assets/images/poster/poster.mp4" type="audio/mp4">
          您的浏览器不支持播放此视频.
        </video>
      </div>
    </div>

  </div>
</template>

<style scoped>

#bg {
  object-fit: cover;
}



</style>