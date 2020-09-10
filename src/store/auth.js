import firebase from '@/firebase';

const state = {
  user: {},
  isSignedIn: false,
};

const mutations = {
  setUser(state, user) {
    if (user) {
      state.user = user;
      state.isSignedIn = true;
    } else {
      state.user = {};
      state.isSignedIn = false;
    }
  },
};

const actions = {
  async signin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  },
  async signout() {
    await firebase.auth().signOut();
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
