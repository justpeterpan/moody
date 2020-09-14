<template>
  <div class="home">
    <div>Hello!</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions('auth', ['signin', 'signout']),
};
</script>
