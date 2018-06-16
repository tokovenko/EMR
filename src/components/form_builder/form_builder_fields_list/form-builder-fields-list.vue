<template>
  <div
    class="FormBuilderFieldsList__wrapper"
    :class="{'dragging': dragField}">
    <form-builder-fields-list-field
      class="FormBuilderFieldsList__item"
      v-for="(field, index) in formFields"
      :key="index"
      :fieldIndex="index"
      :field="field" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import FormBuilderFieldsListField from '@/components/form_builder/form_builder_fields_list_field/form-builder-fields-list-field';
import { mapMultiRowFields } from 'vuex-map-fields';

const { mapGetters } = createNamespacedHelpers('formBuilder');

export default {
  name: 'FormBuilderFieldsList',
  components: {
    FormBuilderFieldsListField
  },
  computed: {
    ...mapMultiRowFields(['formFields']),
    ...mapGetters([
      'dragField',
      'formFields'
    ])
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-fields-list.scss";
</style>
