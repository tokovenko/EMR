<template>
  <div id="app">
    <router-view/>
    <modals-container/>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('oauth');
export default {
  name: 'App',
  methods: mapActions(['init']),
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss">
  @import './stylesheets/global.scss';
</style>
