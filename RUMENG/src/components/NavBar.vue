<script setup>
import {ref} from "vue";
import Overlay from "@/components/Overlay.vue";
import LoginView from "@/views/LoginView.vue";

// let logoSrc = ref("src/assets/images/logo.png")
let logoSrc = ref("/logo.png")

let tabs = ref([{tab: "Games", link: "/"}, {tab: "Newswire", link: "/newswire"}, {tab: "Downloads", link: "/downloads"}
  , {tab: "Store", link: "/store"}, {tab: "Support", link: "/support"}])

let showOverlay = ref(false);

function showInf() {
  let item = localStorage.getItem("token");
  // 未登录处理
  if (!item) {
    showOverlay.value = true;
    stop();
  }
}

// 记录页面滚动位置
const pageLocation = ref(0);

// 禁止滚动-在显示遮罩层的时候调用
function stop(e) {
  let scrollTop = window.scrollY;//滚动的高度；
  console.log(scrollTop)
  pageLocation.value = scrollTop;
  document.body.style.position = 'fixed';
  document.body.style.top = '-' + scrollTop + 'px';
};


// function update(states) {
//   showOverlay.value = states;
// }

</script>

<template>
  <div class="container">
    <div class="content">
      <div class="logo">
        <img :src="logoSrc" alt="">
      </div>

      <div class="tabs">
        <!--        <div class="movingBar"></div>-->
        <div class="tab" v-for="tab in tabs" :key="tab">
          <RouterLink :to="tab.link">{{ tab.tab }}</RouterLink>
        </div>

      </div>
    </div>
    <div class="actions">
      <div class="action">
        <svg-icon name="Bars"></svg-icon>
      </div>
      <div class="action">
        <svg-icon name="Avatar" @click="showInf"></svg-icon>
        <!--        <Overlay :show="showOverlay" @updateStates="update">-->
        <!--        <Overlay :modelValue="showOverlay" @update:modelValue="update">-->
        <Overlay v-model="showOverlay" :pageLocation="pageLocation">
          <LoginView/>
        </Overlay>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: auto;
  height: 3rem;
  padding: 6px 5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  z-index: 999;
}

.content {
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.logo {
  height: 3rem;
  opacity: 1;
  display: flex;
}

.logo img {
  width: 3rem;
  border-radius: 16px;
  object-fit: fill;
}

.movingBar {
  //position: absolute;
  //z-index: 1;
  //transition: all 0.2s ease-in-out 0s;
  //background-color: rgb(105, 224, 255);
  //height: 5px;
  //left: 200px;
  //width: 40px;
  //top: 0px;
}

.tabs {
  position: relative;
  width: auto;
  height: 3rem;
  margin-left: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

}

.tab {
  width: auto;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  font-weight: 400;
  letter-spacing: 0.12rem;
  line-height: 1.5rem;
}


.tab a {
  text-decoration: none;
  //color: var(--text-000);
  color: inherit;
}

.tab a:hover {
  color: var(--text-100);
}

.actions {
  width: auto;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 400px) {
  .actions {

    display: none;
  }
}

.action {
  margin: 0 0.5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
