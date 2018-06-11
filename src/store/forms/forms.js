import Vue from 'vue';
import api from '@/api';

const state = {
  forms: [
    { name: 'form 1', fields: []},
    { name: 'form 2', fields: []}
  ]
};

const getters = {
  forms: state => state.forms
};

const actions = {
  async fetchForms({ commit }) {
    const response = await api.fetchForms();
    commit('setForms', response.forms);
  }
};

const mutations = {
  setForms(state, forms) {
    state.forms = forms;
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
