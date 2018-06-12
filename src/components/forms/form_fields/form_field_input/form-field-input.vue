<template>
  <div class="FormFieldInput__wrapper">
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
    <input
      class="form-field"
      :class="{'is-danger': errors.has(field.data.name)}"
      :id="field.data.name"
      :name="field.data.name"
      type="text"
      v-model="field.data.value"
      :placeholder="field.data.placeholder"
      v-validate="validationRules"
      data-vv-delay="500"
      :data-vv-as="field.data.label"
      :ref="field.data.name"/>
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
  name: 'FormFieldInput',
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
@import "form-field-input.scss";
</style>
