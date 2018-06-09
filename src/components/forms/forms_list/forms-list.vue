<template>
  <div class="FormsList__wrapper">
    <forms-list-form
      v-for="(form, index) in forms"
      :key="index"
      :form="form">
    </forms-list-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import FormsListForm from '@/components/forms/forms_list_form/forms-list-form';

const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers('forms');

export default {
  name: 'FormsList',
  components: {
    FormsListForm
  },
  computed: {
    ...mapGetters(['forms'])
  },
  methods: {
    ...mapActions(['fetchForms'])
  }
};
</script>

<style scoped lang="scss">
@import "forms-list.scss";
</style>
