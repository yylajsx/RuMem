<script setup>

import {ref} from "vue";

let catalogs = ref([
  {
    catalog: '产品',
    links: [{title: '产品1', link: '/product1'},
      {title: '产品2', link: '/product1'},
      {
        title: '产品3', link: '/product1'
      }]
  },
  {
    catalog: '计划',
    links: [{title: '计划', link: '/product1'},
      {title: '计划2', link: '/product1'},
      {
        title: '计划3', link: '/product1'
      }]
  },
  {
    catalog: '社区',
    links: [{title: '社区1', link: '/product1'},
      {title: '社区2', link: '/product1'},
      {
        title: '社区3', link: '/product1'
      }]
  }

])

</script>

<template>
  <div class="container">
    <!--    <div class="content">-->
    <!--      <ul class="catalog">-->
    <!--        <li class="catalogItem" v-for="(catalog, index) in catalogs" :key="index">-->
    <!--          <h3>{{ catalog.catalog }}</h3>-->
    <!--          <ul class="catalogLinks">-->
    <!--            <li class="catalogLinksItem" v-for="(link, index) in catalog.links" :key="index">-->
    <!--              <a :href="link.link">{{ link.title }}</a>-->
    <!--            </li>-->
    <!--          </ul>-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--    </div>-->
    <div class="content">

    </div>
    <hr/>
    <div class="credits">
      <p>&copy;2024&nbsp;xu-feng.online&nbsp;海口龙华叙锋网络科技工作室产品版权所有</p>
      <ul class="settings">
        <li><a href="#" target="_blank">隐私政策</a></li>
        <li><a href="#" target="_blank">服务条款</a></li>
        <li><a href="#" target="_blank">cookie设置</a></li>
        <li><a href="https://beian.miit.gov.cn/" target="_blank">琼ICP备202300001号</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  border-top: 1px solid var(--bg-300);
  overflow: hidden;
  width: auto;
  height: auto;
  background-color: var(--bg-200);
  padding: 1rem 5rem;
}

.content {
  width: 100%;
  height: auto;
  display: grid;
}

.catalog {
  width: 100%;
  display: flex;
  //margin: 0;
  //padding: 0;
  justify-content: space-around;
  list-style-type: none;
}

.catalogItem {
  width: 25%;
}

.catalogLinks {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.catalogLinks a {
  text-decoration: none;
  color: var(--text-200);
}
.catalogLinks a:hover {
  color: var(--text-100);
}

.catalogLinksItem {
  line-height: 1.6em;
}

.credits {
  font-size: 0.9rem;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
}


@media (max-width: 600px) {
  .credits {
    flex-flow: column;
    align-items: center;

  }
}

.settings {
  list-style-type: none;
  display: flex;
  padding: 0;
}

.settings a {
  margin-right: 1rem;
  text-decoration: none;
  color: var(--text-200);
}
</style>