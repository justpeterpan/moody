import db from '@/db';

const state = {
  userMoods: [],
};

const mutations = {
  setUserMoods(state, moods) {
    if (moods) {
      state.userMoods = moods;
    } else {
      state.userMoods = [];
    }
  },
};

const getters = {
  getTimestamps: state => {
    let timestamps = [];
    state.userMoods.forEach(mood => {
      const regexp = /.*(?= GMT)/;
      const strippedTimestamp = mood.timestamp
        .toDate()
        .toString()
        .match(regexp);
      timestamps.push(strippedTimestamp);
    });
    return timestamps;
  },
  getMoodValues: state => {
    let moodValues = [];
    state.userMoods.forEach(mood => {
      moodValues.push(mood.value);
    });
    return moodValues;
  },
};

const actions = {
  async getUserMoods({ commit }, user) {
    const snapshot = await db
      .collection('picked')
      .where('userId', '==', user)
      .orderBy('timestamp', 'asc')
      .get();
    let moods = [];
    snapshot.forEach(doc => {
      moods.push(doc.data());
    });
    commit('setUserMoods', moods);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
