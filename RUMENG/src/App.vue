<script setup>
import NavBar from "@/components/NavBar.vue";
import SmallTools from "@/components/SmallTools.vue";
import Footer from "@/components/Footer.vue";
import {RouterView} from 'vue-router'
</script>

<template>
  <header>
    <!--    <Transition name="nav">-->
      <NavBar/>
    <!--    </Transition>-->
  </header>
  <main>

    <!--    <Transition name="route">-->
    <!--      <RouterView />-->
    <!--    </Transition>-->
    <RouterView v-slot="{ Component }">
      <Transition mode="out-in" name="route">
        <component :is="Component"></component>
      </Transition>
    </RouterView>

  </main>
  <SmallTools/>
  <Footer></Footer>
</template>

<style scoped>
header{
  width: 100vw;
  height:auto;
  //overflow: hidden;
  background-color: var(--bg-200);
  border-bottom: 1px solid var(--bg-300);
  position: sticky;
  top: 0;
  z-index: 999;
}

main{
  width: auto;
  min-height: calc(100vh - 6.5rem);
  overflow: hidden;
  padding: 0.62rem 5rem;
  background-color: var(--bg-100);
}

.nav-enter-active,
.nav-leave-active {
  transition: opacity 1.5s ease;
}

.nav-enter-from,
.nav-leave-to {
  opacity: 0;
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
