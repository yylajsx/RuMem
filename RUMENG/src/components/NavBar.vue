<script setup>
import BarsIcon from "@/components/icons/IconBars.vue";
import {ref} from "vue";

let logoSrc = ref("src/assets/images/logo.png")
let tabs = ref([{tab: "首页", link: "/"},{tab: "下载", link: "/downLoad"},{tab: "开发者工具", link: "/developer"}
  ,{tab: "文档", link: "/doc"},{tab: "定价与订阅", link: "/store"},{tab: "帮助中心", link: "/help"},{tab: "关于我们", link: "/about"},])


</script>

<template>
  <div class="container">
    <div class="content">
      <div class="logo">
        <img :src="logoSrc" alt="">
      </div>
      <div class="tabs">
        <div class="tab" v-for="tab in tabs" :key="tab">
          <RouterLink :to="tab.link">{{tab.tab}}</RouterLink>
        </div>

      </div>
    </div>
    <div class="actions">
      <div class="action">
        <BarsIcon/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  width: auto;
  height: 72px;
  //margin-top: 32px;
  padding: 16px 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  //background-color: rgb(144, 213, 127);
}
.content{
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.logo{
  height: 72px;
  opacity: 1;
  border-radius: 6px;
  display: flex;
}
.tabs{
  width: auto;
  height: 72px;
  margin-left: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

}
.tab{
  width: auto;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 24px;
}
.tab a{
  text-decoration: none;
  //color: rgba(29, 33, 41, 1);
  color: var(--text-200);
}

.tab a:hover{
  color: var(--text-100);
}
.actions{
  width: auto;
  height: 72px;
}
.action{
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>