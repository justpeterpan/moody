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

const actions = {
  async getUserMoods({ commit }, user) {
    console.log('start');
    const snapshot = await db
      .collection('users')
      .doc(user)
      .collection('pickedMoods')
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
  actions,
};
