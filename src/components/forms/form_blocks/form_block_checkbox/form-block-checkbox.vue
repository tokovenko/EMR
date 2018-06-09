<template>
  <div class="FormBlockCheckbox__wrapper">
    checkbox
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers('forms');

export default {
  name: 'FormBlockCheckbox'
};
</script>

<style scoped lang="scss">
@import "form-block-checkbox.scss";
</style>
