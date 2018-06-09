<template>
  <div class="FormBuilderBlocksList__wrapper">
    <form-builder-blocks-list-block
      v-for="(block, index) in blocks"
      :key="index"
      :block="block">
    </form-builder-blocks-list-block>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import FormBuilderBlocksListBlock from '@/components/forms/form_builder_blocks_list_block/form-builder-blocks-list-block';

const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers('forms');

export default {
  name: 'FormBuilderBlocksList',
  components: {
    FormBuilderBlocksListBlock
  },
  computed: {
    ...mapGetters(['blocks'])
  },
  methods: {
    ...mapActions(['saveForm']),
    ...mapMutations(['addBlock', 'removeBlock'])
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-blocks-list.scss";
</style>
