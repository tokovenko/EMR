import api from '@/api';

const state = {
  currentUser: null
};

const getters = {
  currentUser: state => state.currentUser
};

const actions = {
  async getCurrentUser({ commit }) {
    const response = await api.fetchCurrentUser();
    commit('setCurrentUser', response);
  }
};

const mutations = {
  setCurrentUser(state, user) {
    state.currentUser = user;
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
