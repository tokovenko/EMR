<template>
  <div class="FormFieldsListField__wrapper form-row">
    <component
      :is="componentName"
      :field="field" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import FormFields from '@/components/forms/form_fields';

const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers('form');
export default {
  name: 'FormFieldsList',
  components: {
    ...FormFields
  },
  inject: ['$validator'],
  props: {
    field: {
      required: true,
      type: Object
    }
  },
  computed: {
    ...mapGetters(['form']),
    componentName() {
      return `form-field-${this.field.type}`;
    }
  }
};
</script>

<style scoped lang="scss">
@import "form-fields-list-field.scss";
</style>
