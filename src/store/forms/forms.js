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
  },
  async saveForm({ commit }, form) {
    const response = await api.saveForm(form);
  }
};

const mutations = {
  setForms(state, forms) {
    state.forms = forms;
  },
  addForm(state, form) {
    state.forms = [...state.forms, form];
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
