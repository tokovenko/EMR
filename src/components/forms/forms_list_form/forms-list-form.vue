<template>
  <div class="FormsListForm__wrapper">
    {{ form.name }}
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers('forms');

export default {
  name: 'FormsListForm',
  props: {
    form: {
      required: true,
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
@import "forms-list-form.scss";
</style>
