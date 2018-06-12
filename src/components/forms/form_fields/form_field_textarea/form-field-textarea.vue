<template>
  <div class="FormFieldTextarea__wrapper">
    <label
      class="form-label"
      :for="field.data.name">
      {{ field.data.label }}
    </label>
    <div
      v-if="field.data.description"
      class="form-description">
      {{ field.data.description }}
    </div>
    <textarea
      class="form-textarea"
      :class="{'is-danger': errors.has(field.data.name)}"
      :id="field.data.name"
      :name="field.data.name"
      v-model="field.data.value"
      :placeholder="field.data.placeholder"
      v-validate="validationRules"
      data-vv-delay="500"
      :data-vv-as="field.data.label"
      :ref="field.data.name">
    </textarea>
    <span
      v-show="errors.has(field.data.name)"
      class="form-help is-danger">
      {{ errors.first(field.data.name) }}
    </span>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { setValidationRules } from '@/utils/validation';

const { mapMutations } = createNamespacedHelpers('form');

export default {
  name: 'FormFieldTextarea',
  props: {
    field: {
      type: Object
    }
  },
  inject: ['$validator'],
  computed: {
    validationRules() {
      return setValidationRules(this.field);
    }
  }
};
</script>

<style scoped lang="scss">
@import "form-field-textarea.scss";
</style>
