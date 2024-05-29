<script setup>

</script>

<template>
  <div class="container">
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
  padding: 1rem 5rem;
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
  color: inherit;
}
</style>