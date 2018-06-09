<template>
  <div class="TheSidebar__wrapper"
    :class="{'opened':isSidebarOpened}">

    <div class="TheSidebar__profile"
      v-if="currentUser">
      <div
        class="TheSidebar__profile-image"
        :style="{'background-image': 'url('+currentUser.image_url+')'}"></div>
      <div class="TheSidebar__profile-info">
        <span class="TheSidebar__profile-username">
          {{ currentUser.username }}
        </span>
        <span class="TheSidebar__profile-name">
          {{ currentUser.first_name }} {{ currentUser.last_name }}
        </span>
      </div>
    </div>

    <div class="TheSidebar__items">
      <div
        class="TheSidebar__item"
        @click="goTo({name: 'forms'})">
        Forms
      </div>

      <div
        class="TheSidebar__item"
        @click="goTo({name: 'form-builder'})">
        Form Builder
      </div>

      <div
        class="TheSidebar__item"
        @click="signOut(); toggleSidebar()">
        Sign Out
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TheSidebar',
  computed: {
    ...mapGetters('layouts', ['isSidebarOpened']),
    ...mapGetters('user', ['currentUser'])
  },
  methods: {
    ...mapActions({
      signOut: 'oauth/signOut',
      toggleSidebar: 'layouts/toggleSidebar'
    }),
    goTo(to) {
      this.toggleSidebar();
      this.$router.push(to);
    }
  }
};
</script>

<style scoped lang="scss">
@import "the-sidebar.scss";
</style>
