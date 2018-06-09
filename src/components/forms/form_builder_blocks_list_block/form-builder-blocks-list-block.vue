<template>
  <div class="FormBuilderBlocksListBlock__wrapper">
    <component
      :is="componentName">
    </component>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import FormBlockCheckbox from '@/components/forms/form_blocks/form_block_checkbox/form-block-checkbox';
import FormBlockInput from '@/components/forms/form_blocks/form_block_input/form-block-input';

const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers('forms');

export default {
  name: 'FormBuilderBlocksListBlock',
  components: {
    FormBlockCheckbox,
    FormBlockInput
  },
  props: {
    block: {
      required: true,
      type: Object
    }
  },
  computed: {
    componentName() {
      return `form-block-${this.block.type}`;
    }
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-blocks-list-block.scss";
</style>
