<template>
  <div class="FormFieldSelect__wrapper">
    <div>{{field.data.label}}</div>
    <select>
      <option
        v-for="(option, index) in field.data.options"
        :key="index">
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapMutations } = createNamespacedHelpers('form');

export default {
  name: 'FormFieldSelect',
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
@import "form-field-select.scss";
</style>
