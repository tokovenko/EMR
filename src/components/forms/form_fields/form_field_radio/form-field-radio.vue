<template>
  <div class="FormFieldRadio__wrapper">
    radio
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapMutations } = createNamespacedHelpers('form');

export default {
  name: 'FormFieldRadio',
  props: {
    field: {
      type: Object
    }
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
@import "form-field-radio.scss";
</style>
