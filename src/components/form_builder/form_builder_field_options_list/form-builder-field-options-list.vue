<template>
  <div class="FormBuilderFieldOptionsList__wrapper">
      <form-builder-field-options-list-option
        v-for="(option, index) in field.data.options"
        :key="index"
        :fieldIndex="fieldIndex"
        :fieldOptionIndex="index"
        :field="field"
        :option="option" />
  </div>
</template>

<script>
import FormBuilderFieldOptionsListOption from '@/components/form_builder/form_builder_field_options_list_option/form-builder-field-options-list-option';

export default {
  name: 'FormBuilderFieldOptionsList',
  components: {
    FormBuilderFieldOptionsListOption
  },
  props: {
    fieldIndex: {
      required: true,
      type: Number
    },
    field: {
      required: true,
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-field-options-list.scss";
</style>
