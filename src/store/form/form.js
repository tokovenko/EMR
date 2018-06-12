import Vue from 'vue';
import api from '@/api';

const state = {
  form: {}
};

const getters = {
  form: state => state.form
};

const actions = {
  async fetchForm({ commit }, id) {
    const response = await api.fetchForm();
    commit('setForm', response);
  }
};

const mutations = {
  setForm(state, form) {
    state.form = form;
  },

  resetForm(state) {
    state.form = {};
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
