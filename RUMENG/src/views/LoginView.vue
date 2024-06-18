<script setup>

</script>

<template>
  <div class="login-container">
      <div class="login-box">
        <h1>登录</h1>
        <form>
          <div class="input-group">
            <label for="username">用户名</label>
            <input id="username" name="username" required type="text">
          </div>
          <div class="input-group">
            <label for="password">密码</label>
            <input id="password" name="password" required type="password">
          </div>
          <button type="submit">登录</button>
        </form>
      </div>

  </div>
</template>

<style scoped>
.login-container {
  color: var(--text-400);
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 100vh;
  //background-color: #f5f5f5;
}

.login-box {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

</style>