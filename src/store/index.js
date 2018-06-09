import Vue from 'vue';
import Vuex from 'vuex';
import oauth from './oauth/oauth';
import user from './user/user';
import forms from './forms/forms';
import layouts from './layouts/layouts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    oauth,
    user,
    forms,
    layouts
  }
});
