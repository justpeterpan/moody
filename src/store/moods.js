import { firestoreAction } from 'vuexfire';
import db from '@/db';

const state = {
  moods: [],
  picked: [],
};
const actions = {
  bindMoods: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef('moods', db.collection('moods'));
  }),
};

export default {
  namespaced: true,
  state,
  actions,
};
