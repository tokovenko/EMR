<template>
  <div class="FormBuilderView__wrapper">
    <div class="content">
      <div class="content-inner">
        <form-builder-blocks-list>
        </form-builder-blocks-list>
      </div>
    </div>
  </div>
</template>

<script>
import FormBuilderBlocksList from '@/components/forms/form_builder_blocks_list/form-builder-blocks-list';

export default {
  name: 'FormBuilderView',
  components: {
    FormBuilderBlocksList
  }
};
</script>

<style lang="scss">
  .FormBuilderView {
    &__wrapper {
      transition: transform .16s ease-out, opacity .2s ease;
    }
  }
</style>
