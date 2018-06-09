<template>
  <div class="FormsView__wrapper">
    <div class="content">
      <div class="content-inner">
        <forms-list></forms-list>
      </div>
    </div>
  </div>
</template>

<script>
import FormsList from '@/components/forms/forms_list/forms-list';

export default {
  name: 'FormsView',
  components: {
    FormsList
  }
};
</script>

<style lang="scss">
  .FormsView {
    &__wrapper {
      transition: transform .16s ease-out, opacity .2s ease;
    }
  }
</style>
