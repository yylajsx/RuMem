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
        <video id="bg" class="poster__bg" jm_neat="1128228866" loop="loop" muted="muted"
               poster="../assets/images/poster/2.png" style="opacity: 1; width: 100%; max-height: calc(100vh - 6.5rem);">
          <source src="#" type="audio/mp4">
          您的浏览器不支持播放此视频.
        </video>
      </div>
    </div>


  </div>
</template>

<style scoped>
.box-block {
  width: 100px;
  height: 100px;
  border: #1d1c1c 1px solid;
}

.box-block2 {
  width: 300px;
  height: 100px;
  border: #e50707 1px solid;
}


</style>