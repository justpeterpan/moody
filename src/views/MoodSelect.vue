<template>
  <div class="form">
    <header class="form__header">
      <h2 class="form__title">Emoodji</h2>
    </header>

    <form>
      <fieldset class="form__options">
        <legend class="form__question">How ya doin?</legend>
        <div class="form__answer" v-for="mood in moods" :key="mood.name">
          <input
            type="radio"
            name="mood"
            :id="mood.id"
            :value="mood.name"
            :alt="mood.emoji"
            @click="handleSubmit($event)"
          />
          <label :for="mood.id">
            <p class="form__emoji">{{ mood.emoji }}</p>
            {{ mood.name }}
          </label>
        </div>
      </fieldset>
      <!-- <button class="form__button">Submit Mood</button> -->
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import router from '@/router';
import db from '@/db';

export default {
  mounted() {
    this.bindMoods();
  },
  computed: { ...mapState('moods', ['moods']), ...mapState('auth', ['user']) },
  methods: {
    ...mapActions('moods', ['bindMoods']),
    handleSubmit(e) {
      db.collection('users')
        .doc(this.user.id)
        .collection('pickedMoods')
        .add({
          id: e.target.id,
          emoji: e.target.alt,
          timestamp: new Date(),
        });
      router.push('/overview');
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding: 0;
  margin: 0;
}
.form__options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  border: none;
}

.form__answer {
  display: flex;
  flex-direction: column;
  min-width: 120px;
  min-height: 120px;
}

.form__emoji {
  font-size: 40px;
  margin: 20px;
}

label {
  border: 1px solid black;
  border-radius: 4px;
  height: 100%;
  width: 100%;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    border: 1px solid rgba(green, 0.5);
    background-color: aquamarine;
  }
}

input[type='radio'] {
  opacity: 0;
  width: 0;
  height: 0;
  display: none;
}

input[type='radio']:active ~ label {
  opacity: 1;
}

input[type='radio']:checked ~ label {
  opacity: 1;
  border: 2px solid lightcoral;
}
</style>
