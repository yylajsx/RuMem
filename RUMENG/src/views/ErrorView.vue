<script setup>
import {ref} from "vue";

let cmd = ref("");
let cmds = ref(["You don't exist. ", "Go away."])
function submit() {
  cmds.value.push(cmd.value)

  if (cmds.value.length > 10) {
    cmds.value.splice(0, 1);
  }
  cmd.value = ""
}

// function isLastElement(index) {
//   return index === cmds.value.length - 1;
// }

// watch(() => cmd.value, (newValue) => {
//   cmds.value.splice(-1, 0, cmd.value)
// })
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <div class="err-code">
        404
      </div>
      <hr/>
      <div class="cmd">
        <span v-for="(item,index) in cmds" :key="index">
<!--          &gt;_ <span :class="{'last-element': isLastElement(index)}">{{ item }}</span>-->
          &gt;_ <span>{{ item }}</span>
          <br/>
        </span>
      </div>
      <div class="cmd-input">
        <input v-model="cmd" placeholder="Enter some commands..." type="text" @keyup.enter="submit"/>
      </div>
      <hr/>
      <div class="help">
        <p>Go ahead then.</p>
        <p>Click the terminal message.</p>
      </div>
    </div>


  </div>

</template>

<style scoped>
.container {
  width: 100%;
  height: auto;
  min-height: calc(100vh - 6.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.wrapper {
  width: 50%;
  padding: 1rem;
  border-left: 1px solid var(--bg-000);
  border-right: 1px solid var(--bg-000);
}

.err-code {
  font-size: 10vw;
  text-align: center;
  text-shadow: 2px 2px 5px;
  -webkit-animation: shadow 1s infinite alternate ease-in-out;
  animation: shadow 1s infinite alternate ease-in-out;
}

@keyframes shadow {
  0% {
    text-shadow: 1px 1px 1px;
  }
  100% {
    text-shadow: 2px 2px 10px;
  }
}

.cmd {
  font-size: 1.4rem;
  //height: 300px;
  overflow: scroll;
}

.cmd span {
  margin-left: 10px;

}

.last-element::after {
  content: '|';
  -webkit-animation: cursor 1s infinite normal linear;
  animation: cursor 1s infinite normal linear;
}

@keyframes cursor {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }

  75% {
    opacity: 1;
  }
}

.cmd-input {
  width: 100%;
}

.cmd-input input {
  //width: 100%;
  outline-style: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: 8px;
  background: transparent;
  color: var(--text-000);
}
</style>

