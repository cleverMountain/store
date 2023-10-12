<template>
  <a>{{ a }}</a>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const a = ref(1);
const store = useStore();
console.log(store);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
