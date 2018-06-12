<template>
  <div
    class="FormBuilderFieldsList__wrapper"
    :class="{'dragging': dragField}">
    <div
      v-for="(field, index) in formFields"
      :key="index"
      draggable="true"
      @dragstart="startDragField(field)"
      @dragend="startDragField(null)"
      :class="{'drag-over': dragOverField === field}"
      @dragover.stop.prevent
      @dragenter="setDragOverField(field)"
      @dragleave="setDragOverField(null)"
      @drop.stop="onDrop(field)"
      class="FormBuilderFieldsList__item">
      <btn
        @onclick="removeFieldFromForm(field.id)"
        btn-class="submit close"
        btn-label="x" />
      <component
        :is="componentName(field)"
        :field="field" />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import FormFieldsComponents from '@/components/form_builder/form_builder_fields';

const { mapGetters, mapMutations } = createNamespacedHelpers('formBuilder');

export default {
  name: 'FormBuilderFieldsList',
  components: {
    ...FormFieldsComponents
  },
  props: {
    list: {
      type: Array
    }
  },
  computed: {
    ...mapGetters([
      'dragField',
      'dragOverField',
      'formFields'
    ])
  },
  methods: {
    ...mapMutations([
      'removeFieldFromForm',
      'addFieldToFormAfterField',
      'startDragField',
      'setDragOverField'
    ]),
    componentName(field) {
      return `form-builder-field-${field.type}`;
    },
    onDrop(insertAfterField) {
      const field = Object.assign({}, this.dragField);
      field.id = field.id || Date.now();
      this.addFieldToFormAfterField({field, insertAfterField});

      this.setDragOverField(null);
    }
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-fields-list.scss";
</style>
