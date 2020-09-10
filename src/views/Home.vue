<template>
  <div class="home">
    <div>home</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions('auth', ['signin', 'signout']),
};
</script>
