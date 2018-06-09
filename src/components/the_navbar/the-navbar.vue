<template>
  <header class="TheNavbar__wrapper">
    <nav class="TheNavbar__container">
      <router-link
        :to="{name: 'home'}"
        class="TheNavbar__brand ripple">
        <img
          src="/static/logo.svg"
          class="TheNavbar__logo" />
      </router-link>

      <div class="TheNavbar__nav-container"
        v-if="checkLogged">

        <transition-group
          name="appear-from-right"
          appear
          tag="div"
          class="TheNavbar__nav-actions">
          <div
            key="profile"
            v-if="currentUser"
            class="TheNavbar__profile">
            <div
              class="TheNavbar__profile-avatar"
              :style="{'background-image': 'url('+currentUser.image_url+')'}">
            </div>
            <div class="TheNavbar__profile-username">
              {{ currentUser.username }}
            </div>
          </div>
        </transition-group>

        <div @click="toggleSidebar">
          <hamburger-btn
            :is-active="isSidebarOpened">
          </hamburger-btn>
        </div>
      </div>
      <div v-else
        class="TheNavbar__nav-container">
        <router-link
          class="TheNavbar__nav-link"
          :to="{name: 'signin'}">
          Sign in
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import HamburgerBtn from '@/components/global/hamburger_btn/hamburger-btn';

export default {
  name: 'TheNavbar',
  components: {
    HamburgerBtn
  },
  computed: {
    ...mapGetters('oauth', ['checkLogged']),
    ...mapGetters('layouts', ['isSidebarOpened']),
    ...mapGetters('user', ['currentUser'])
  },
  methods: {
    ...mapActions({
      toggleSidebar: 'layouts/toggleSidebar'
    })
  }
};
</script>
<style scoped lang="scss">
@import "the-navbar.scss";
</style>
