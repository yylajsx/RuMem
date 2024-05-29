<script setup>
import NavBar from "@/components/NavBar.vue";
import VideoBackground from "@/components/VideoBackground.vue";
import SmallTools from "@/components/SmallTools.vue";
import Footer from "@/components/Footer.vue";
import {RouterView, useRoute} from 'vue-router'
import {reactive, ref, watchEffect} from "vue";

let bgShow = ref(true)
const style = reactive({
  background: 'var(--bg-200)',
})

const route = useRoute()
watchEffect(() => {
  console.log(route.path);
  if (route.path === '/') {
    bgShow.value = true
    style.background = 'transparent'
  } else {
    bgShow.value = false
    style.background = 'var(--bg-500)'
  }

})


</script>

<template>
  <!--  首屏动画背景-->
  <VideoBackground v-show="bgShow"/>
  <div id="context">
    <header :style="style">
      <NavBar/>
    </header>
    <main>
      <RouterView v-slot="{ Component }">
        <Transition mode="out-in" name="route">
          <component :is="Component"></component>
        </Transition>
      </RouterView>


    </main>
    <SmallTools/>
    <Footer :style="style"></Footer>
  </div>

</template>

<style scoped>
#context {
  width: 100vw;
  min-height: 100vh;
  z-index: 10;
}

header{
  width: auto;
  height:auto;
  //background-color: var(--bg-200);
  //background-color: transparent;
  border-bottom: 1px solid var(--bg-300);
  position: sticky;
  top: 0;
  z-index: 999;

}

@media (max-width: 400px) {
  header {
    overflow: hidden;
  }
}

main{
  width: auto;
  min-height: calc(100vh - 6.5rem);
  overflow: hidden;
  //padding: 0.62rem 5rem;
  padding: 0.62rem 0;
}
.route-enter-active,
.route-leave-active {
  transition: all 0.5s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;

}

</style>
