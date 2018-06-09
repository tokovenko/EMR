<template>
  <div class="FormBlockInput__wrapper">
   input
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers('forms');

export default {
  name: 'FormBlockInput'
};
</script>

<style scoped lang="scss">
@import "form-block-input.scss";
</style>
