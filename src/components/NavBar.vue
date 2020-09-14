<template>
  <nav class="navbar">
    <ul class="navbar__links">
      <li class="navbar__items" v-if="isSignedIn"><router-link to="/">Home</router-link></li>
      <li class="navbar__items" v-if="isSignedIn"><router-link to="/select">Select</router-link></li>
      <li class="navbar__items" v-if="isSignedIn"><router-link to="/overview">Overview</router-link></li>
    </ul>
    <button class="navbar__button" @click="signin()" v-if="!isSignedIn">Signin</button>
    <button class="navbar__button" @click="signout()" v-if="isSignedIn">Signout</button>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: mapState('auth', ['user', 'isSignedIn']),
  methods: mapActions('auth', ['signin', 'signout']),
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: black;
  width: 100%;
  display: flex;
  min-height: 50px;
  justify-content: space-between;
  align-items: center;

  &__links {
    display: flex;
  }

  &__items a {
    list-style: none;
    display: inline-block;
    padding: 15px 15px;
    color: whitesmoke;
    text-decoration: none;

    &:hover {
      background-color: whitesmoke;
      color: black;
    }
  }

  &__button {
    border: 1px solid white;
    background-color: black;
    color: whitesmoke;
    margin-right: 5px;
    padding: 8px;
    cursor: pointer;
  }

  ::marker {
    content: '';
  }
}
</style>
