<template>
  <div class="FormBuilderFieldRadio__wrapper">
    {{field.id}} - radio - options({{field.data.options}})
    <br>
    <button @click="addFieldOption(field.id)">Add Option</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapMutations } = createNamespacedHelpers('formBuilder');

export default {
  name: 'FormFieldRadio',
  props: {
    field: {
      type: Object
    }
  },
  methods: {
    ...mapMutations(['addFieldOption'])
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-field-radio.scss";
</style>
