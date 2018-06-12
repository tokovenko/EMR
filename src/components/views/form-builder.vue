<template>
  <div class="FormBuilderView__wrapper">
    <div class="content">
      <div class="content-inner FormBuilderView__inner">
        <form-builder-blocks-list class="FormBuilderView__list">
        </form-builder-blocks-list>
        <form-builder-new-form class="FormBuilderView__form">
        </form-builder-new-form>
      </div>
    </div>
  </div>
</template>

<script>
import FormBuilderBlocksList from '@/components/form_builder/form_builder_blocks_list/form-builder-blocks-list';
import FormBuilderNewForm from '@/components/form_builder/form_builder_new_form/form-builder-new-form';

export default {
  name: 'FormBuilderView',
  components: {
    FormBuilderBlocksList,
    FormBuilderNewForm
  }
};
</script>

<style lang="scss">
  .FormBuilderView {
    &__wrapper {
      transition: transform .16s ease-out, opacity .2s ease;
    }
    &__inner {
      display: flex;
      flex-direction: row;
      align-items: start;
    }
    &__list {
      width: 200px;
    }
    &__form {
      width: 500px;
    }
  }
</style>
