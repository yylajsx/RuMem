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
  <div class="content">
    <ul class="catalog">
      <li v-for="(catalog, index) in catalogs" :key="index" class="catalogItem">
        <h3>{{ catalog.catalog }}</h3>
        <ul class="catalogLinks">
          <li v-for="(link, index) in catalog.links" :key="index" class="catalogLinksItem">
            <a :href="link.link">{{ link.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>

</template>

<style scoped>
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
</style>