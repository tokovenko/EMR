<template>
  <div class="FormBuilderFieldTextarea__wrapper">
    <h2>Textarea</h2>
    <div>
      <label class="form-label">Label</label>
      <input type="text" placeholder="Field label" v-model="label">
    </div>
    <div>
      <label class="form-label">Placeholder</label>
      <input type="text" placeholder="Field placeholder" v-model="placeholder">
    </div>
    <div>
      <input type="checkbox" v-model="required">
      <label>Required</label>
    </div>
  </div>
</template>

<script>
import { mapFields } from '@/utils/form-builder';

export default {
  name: 'FormBuilderFieldTextarea',
  computed: {
    ...mapFields(['label', 'required', 'placeholder'])
  },
  props: {
    fieldIndex: {
      required: true,
      type: Number
    },
    field: {
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-field-textarea.scss";
</style>
