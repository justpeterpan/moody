<template>
  <div id="app">
    <button @click="signin()" v-if="!isSignedIn">Signin</button>
    <button @click="signout()" v-if="isSignedIn">Signout</button>
    <img :src="user.image" alt="" />
    <span>{{ user.name }}</span>
    <div id="nav" v-if="isSignedIn">
      <router-link to="/">Home</router-link> | <router-link to="/select">Tracker</router-link> |
      <router-link to="/overview">Overview</router-link>
    </div>

    <router-view class="container" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: mapState('auth', ['user', 'isSignedIn']),
  methods: mapActions('auth', ['signin', 'signout']),
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
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
