<script setup>
import NavBar from "@/components/NavBar.vue";
import SmallTools from "@/components/SmallTools.vue";
import Footer from "@/components/Footer.vue";
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <Transition>
      <NavBar/>
    </Transition>
  </header>
  <main>
    <SmallTools/>
    <RouterView />
  </main>
  <Footer></Footer>
</template>

<style scoped>
header{
  width: 100%;
  height:auto;
  background-color: var(--bg-200);
}

main{
  width: 100%;
  min-height: 1800px;
  background-color: var(--bg-100);
}

</style>
