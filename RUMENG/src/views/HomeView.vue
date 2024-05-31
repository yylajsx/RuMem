<script setup>
import PosterVideo from "@/components/PosterVideo.vue";
</script>

<template>
  <div class="home">
    <h1>Welcome to the Movie App</h1>
    <PosterVideo/>
  </div>
</template>


<style scoped>

.home {
  width: 100%;
  min-height: calc(100vh - 6.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


</style>