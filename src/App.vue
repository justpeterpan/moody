<template>
  <div id="app">
    <NavBar />

    <router-view class="container" />
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  components: { NavBar },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

#app {
  display: grid;
  justify-items: center;
  gap: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
