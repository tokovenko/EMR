<template>
  <div class="FormsList__wrapper">
    <div class="FormsList__toolbar">
      <div class="FormsList__search">
        <input
          id="form-search"
          v-focus
          v-model="query"
          @keyup="debounceSearchRequest($event)"
          class="form-field"
          type="text"
          placeholder="Search form" />
      </div>
    </div>
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
  data() {
    return {
      query: null
    };
  },
  computed: {
    ...mapGetters(['forms'])
  },
  beforeMount() {
    this.fetchForms();
  },
  beforeDestroy() {
    this.resetForms();
  },
  methods: {
    ...mapActions(['fetchForms']),
    ...mapMutations(['resetForms']),
    debounceSearchRequest(e) {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        this.fetchForms();
      }, 350);
    }
  }
};
</script>

<style scoped lang="scss">
@import "forms-list.scss";
</style>
