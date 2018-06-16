<template>
  <div class="FormBuilderFieldCheckbox__wrapper">
    <h2>Checkbox</h2>
    <div>
      <label class="form-label">Label</label>
      <input type="text" v-model="label" placeholder="Field label">
    </div>
    <form-builder-field-options-list
      :field="field"
      :fieldIndex="fieldIndex" />
    <div>
      <input type="checkbox" v-model="required">
      <label>Required</label>
    </div>
    <br>
    <button @click="addFieldOption(field.id)">Add Option</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { mapFields } from '@/utils/form-builder';
import FormBuilderFieldOptionsList from '@/components/form_builder/form_builder_field_options_list/form-builder-field-options-list';

const { mapMutations } = createNamespacedHelpers('formBuilder');

export default {
  name: 'FormBuilderFieldCheckbox',
  computed: {
    ...mapFields(['label', 'required'])
  },
  components: {
    FormBuilderFieldOptionsList
  },
  props: {
    field: {
      required: true,
      type: Object
    },
    fieldIndex: {
      required: true,
      type: Number
    }
  },
  methods: {
    ...mapMutations([
      'addFieldOption'
    ])
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-field-checkbox.scss";
</style>
