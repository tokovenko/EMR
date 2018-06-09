import Vue from 'vue';
import api from '@/api';

const state = {
  forms: [
    { name: 'form 1'},
    { name: 'form 2'}
  ],
  blocks: [
    { type: 'input', id: 0},
    { type: 'checkbox', id: 1}
  ]
};

const getters = {
  forms: state => state.forms,
  blocks: blocks => state.blocks
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
