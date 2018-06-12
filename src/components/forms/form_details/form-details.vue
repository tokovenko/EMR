<template>
  <div class="FormDetails__wrapper">
    <div class="FormDetails__name">
      {{ form.name}}
    </div>
    <div class="FormDetails__description">
      {{ form.description}}
    </div>

    <div class="FormDetails__content">
      <form-fields-list></form-fields-list>
    </div>

    <div class="form-actions pull-right">
      <btn
        btn-class="submit"
        btn-label="submit"
        @onclick="submit">
      </btn>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import FormFieldsList from '@/components/forms/form_fields_list/form-fields-list';

const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers('form');

export default {
  name: 'FormDetails',
  components: {
    FormFieldsList
  },
  computed: {
    ...mapGetters(['form'])
  },
  beforeMount() {
    this.fetchForm();
  },
  beforeDestroy() {
    this.resetForm();
  },
  methods: {
    ...mapActions(['fetchForm']),
    ...mapMutations(['resetForm']),
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          console.warn('submit', this.form);
        } else {
          console.warn('error', this.errors);
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "form-details.scss";
</style>
