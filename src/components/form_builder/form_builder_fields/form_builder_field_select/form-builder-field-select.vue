<template>
  <div class="FormBuilderFieldRadio__wrapper">
    <h2>Select</h2>
    <div>
      <label class="form-label">Label</label>
      <input type="text" placeholder="Field label" v-model="label">
    </div>
    <form-builder-field-options-list
      :field="field"
      :fieldIndex="fieldIndex" />
    <div>
      <input type="checkbox" v-model="multiple">
      <label>Multiple</label>
    </div>
    <div>
      <input type="checkbox" v-model="required">
      <label>Required</label>
    </div>
    <br>
    <button @click="addFieldOption(field.id)">Add Option</button>
  </div>
</template>

<script>
import { mapFields } from '@/utils/form-builder';
import { createNamespacedHelpers } from 'vuex';
import FormBuilderFieldOptionsList from '@/components/form_builder/form_builder_field_options_list/form-builder-field-options-list';

const { mapMutations } = createNamespacedHelpers('formBuilder');

export default {
  name: 'FormBuilderFieldSelect',
  computed: {
    ...mapFields(['label', 'required', 'multiple'])
  },
  components: {
    FormBuilderFieldOptionsList
  },
  props: {
    fieldIndex: {
      required: true,
      type: Number
    },
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
@import "form-builder-field-select.scss";
</style>
