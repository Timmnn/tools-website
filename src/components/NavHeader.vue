<template>
  <header>
    <nav>
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" to="/loop-timer">Loop Timer</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavHeader"
}
</script>

<style lang="scss" scoped>
nav {
  padding: 1rem;
  border-bottom: 1px solid black;
  .nav-item {
    margin: 0.5rem 1rem;
    outline: 1px solid black;
    padding: 0.5rem;
    border-radius: 0.5rem;

    &:hover {
      background-color: #777;
    }
  }
}
</style>