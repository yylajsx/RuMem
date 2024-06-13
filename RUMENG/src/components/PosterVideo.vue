<script setup>

import {onMounted, ref} from "vue";
import SvgIcon from "@/components/SvgIcon.vue";


const video = ref()
const volume = ref()

function playVideo() {
  console.log("q")
  video.value.muted = true
  video.value.play()
  const ctx = new AudioContext()
  //通过这个可以判断出视频能不能够自动播放 如何可以它的值就是“running” 否则为"suspended"
  // 如果是不能播放我们就执行下面的逻辑，其实就是类似于第一种方法，让用户与其交互
  const canAutoPlay = ctx.state === 'running';
  console.log(ctx.state)
  console.log(canAutoPlay)
  ctx.close();
  if (canAutoPlay) {
    video.value.muted = false;
    volume.value.style.display = 'none';
  } else {
    volume.value.style.display = 'block';
  }

}

onMounted(() => {
  playVideo()
})

function pauseVideo() {
  video.value.pause()

}
</script>

<template>
  <div class="poster">
    <!--      海报背景-->
    <div id="bgWrap">
      <div ref="volume" class="volume" @click="playVideo">
        <svg-icon color="blue" name="VolumeOn"></svg-icon>
      </div>
      <video id="bg" ref="video" autoplay class="poster__bg" loop="loop"
             poster="../assets/images/poster/2.png">
        <source src="../assets/images/poster/poster.mp4" type="audio/mp4">
        您的浏览器不支持播放此视频.
      </video>
    </div>
  </div>
</template>

<style scoped>
.poster {
  width: 50%;
}
#bgWrap {
  width: 100%;
  position: relative;
}

#bg {
  object-fit: cover;
  opacity: 1;
  width: 100%;
  max-height: calc(100vh - 6.5rem);
}

.volume {
  width: 36px;
  height: 36px;
  background-color: #fff;
  position: absolute;
  top: 20px;
  right: 10px;
  border-radius: 50%;
  z-index: 222;


}
</style>