<template>
  <div
    class="FormBuilderBlocksListBlock__wrapper"
    draggable="true"
    @dragstart="startDragField(block)"
    @dragend="startDragField(null)">
    {{ block.type }}
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapMutations } = createNamespacedHelpers('formBuilder');

export default {
  name: 'FormBuilderBlocksListBlock',
  props: {
    block: {
      required: true,
      type: Object
    }
  },
  methods: {
    ...mapMutations(['startDragField'])
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-blocks-list-block.scss";
</style>
