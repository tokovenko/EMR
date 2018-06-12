import Vue from 'vue';
import api from '@/api';

const state = {
  forms: []
};

const getters = {
  forms: state => state.forms
};

const actions = {
  async fetchForms({ commit }) {
    const response = await api.fetchForms();
    commit('setForms', response);
  }
};

const mutations = {
  setForms(state, forms) {
    state.forms = forms;
  },

  resetForms(state) {
    state.forms = [];
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
