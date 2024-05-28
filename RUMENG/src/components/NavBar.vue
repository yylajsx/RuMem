<script setup>
import BarsIcon from "@/components/icons/IconBars.vue";
import AvatarIcon from "@/components/icons/IconAvatar.vue";
import {ref} from "vue";

// let logoSrc = ref("src/assets/images/logo.png")
let logoSrc = ref("../../public/logo.png")
let tabs = ref([{tab: "Games", link: "/"}, {tab: "Newswire", link: "/newswire"}, {tab: "Downloads", link: "/downloads"}
  , {tab: "Store", link: "/store"}, {tab: "Support", link: "/support"}])

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
        <div class="dropdown">
          <BarsIcon/>
          <div class="dropdown-content">
            <a href="#">HTML</a>
            <a href="#">CSS</a>
            <a href="#">Bootstrap</a>
          </div>
        </div>
      </div>
      <div class="action">
        <AvatarIcon/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: auto;
  height: 4.5rem;
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
  height: 4.5rem;
  margin-left: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

}

.tab {
  width: auto;
  height: 4.5rem;
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
  color: var(--text-200);
}

.tab a:hover {
  color: var(--text-100);
}

.actions {
  width: auto;
  height: 4.5rem;
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
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: var(--bg-200);
  min-width: 120px;
}

.dropdown-content a {
  color: var(--text-200);
  padding: 10px;
  display: block;
  text-align: left;
  text-decoration: none;
}

.dropdown-content a:hover {
  background-color: var(--bg-100);
  color: var(--text-100);
}

.dropdown:hover .dropdown-content {
  display: block;
}

</style>
