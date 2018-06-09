<template>
  <div class="MainView__wrapper">
    <the-sidebar></the-sidebar>
    <the-navbar></the-navbar>
    <transition appear
      :name="$route.meta.appearance"
      mode="out-in">
      <router-view :key="$route.name"/>
    </transition>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import TheNavbar from '@/components/the_navbar/the-navbar';
import TheSidebar from '@/components/the_sidebar/the-sidebar';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    TheNavbar,
    TheSidebar
  }
};
</script>
