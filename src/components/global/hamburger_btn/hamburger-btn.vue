<template>
  <div class="HamburgerBtn" :class="{'is-active':isActive}">
    <div class="HamburgerBtn__box">
      <div class="HamburgerBtn__inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HamburgerBtn',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
@import "hamburger-btn.scss";
</style>
