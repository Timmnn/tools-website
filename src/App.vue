<script setup>
import NavHeader from "./components/NavHeader.vue";
</script>

<template>
  <NavHeader/>
  <main>
    <router-view/>
  </main>
</template>

<style scoped>
main{
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
