import Vue from 'vue';
import Vuex from 'vuex';
import oauth from './oauth/oauth';
import user from './user/user';
import forms from './forms/forms';
import form from './form/form';
import layouts from './layouts/layouts';
import formBuilder from './form-builder/form-builder';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    oauth,
    user,
    forms,
    form,
    layouts,
    formBuilder
  }
});
