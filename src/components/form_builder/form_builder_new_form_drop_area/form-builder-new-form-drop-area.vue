<template>
  <div
    class="FormBuilderNewFormDropArea__wrapper"
    :class="{
      'drag-over': dragOver,
      disabled: dragField && dragField.id
    }"
    @dragover.stop.prevent
    @dragenter="onDragenter"
    @dragleave="onDragleave"
    @drop.stop="onDrop">
      Drop fields here
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapMutations } = createNamespacedHelpers('formBuilder');

export default {
  name: 'FormBuilderNewFormDropArea',
  data() {
    return {
      dragOver: false
    };
  },
  computed: {
    ...mapGetters(['dragField'])
  },
  methods: {
    ...mapMutations(['addFieldToForm']),
    onDrop() {
      const field = Object.assign({}, this.dragField);
      field.id = Date.now();
      this.addFieldToForm(field);

      this.dragOver = false;
    },
    onDragenter() {
      this.dragOver = true;
    },
    onDragleave() {
      this.dragOver = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-new-form-drop-area.scss";
</style>
