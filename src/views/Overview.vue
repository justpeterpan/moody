<template>
  <header>
    <h2>Overview</h2>
    <div>
      <ul v-for="mood in userMoods" :key="mood.moods">
        <li>{{ mood.emoji }} {{ mood.timestamp.toDate() }}</li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  mounted() {
    this.getUserMoods(this.user.id);
  },
  computed: { ...mapState('user', ['userMoods']), ...mapState('auth', ['user']) },
  methods: mapActions('user', ['getUserMoods']),
};
</script>

<style></style>
