<template>
  <div class="FormFieldsList__wrapper">
    <form-fields-list-field
      v-for="(field, index) in form.fields"
      :key="index"
      :field="field">
    </form-fields-list-field>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import FormFieldsListField from '@/components/forms/form_fields_list_field/form-fields-list-field';

const { mapGetters } = createNamespacedHelpers('form');
export default {
  name: 'FormFieldsList',
  inject: ['$validator'],
  components: {
    FormFieldsListField
  },
  computed: {
    ...mapGetters(['form'])
  }
};
</script>

<style scoped lang="scss">
@import "form-fields-list.scss";
</style>
