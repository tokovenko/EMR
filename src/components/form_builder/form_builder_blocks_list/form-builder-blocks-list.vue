<template>
  <div class="FormBuilderBlocksList__wrapper">
    <form-builder-blocks-list-block
      v-for="(block, index) in blocks"
      :key="index"
      :block="block" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import FormBuilderBlocksListBlock from '@/components/form_builder/form_builder_blocks_list_block/form-builder-blocks-list-block';

const { mapGetters } = createNamespacedHelpers('formBuilder');

export default {
  name: 'FormBuilderBlocksList',
  components: {
    FormBuilderBlocksListBlock
  },
  computed: {
    ...mapGetters(['blocks'])
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-blocks-list.scss";
</style>
