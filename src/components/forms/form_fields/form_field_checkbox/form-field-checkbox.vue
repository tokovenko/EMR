<template>
  <div class="FormFieldCheckbox__wrapper">
    <div>{{field.data.label}}</div>
    <div
      v-for="(option, index) in field.data.options"
      :key="index">
        <input type="checkbox" name="">
        <label>{{option.title}}</label>
        <hr>
      </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapMutations } = createNamespacedHelpers('form');

export default {
  name: 'FormFieldCheckbox',
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
@import "form-field-checkbox.scss";
</style>
