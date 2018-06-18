<template>
  <div
    class="FormBuilderFieldsListField__wrapper"
    :class="{'drag-over': dragOverField === field}"
    draggable="true"
    @dragstart="startDragField(field)"
    @dragend="startDragField(null)"
    @dragenter="setDragOverField(field)"
    @dragleave="setDragOverField(null)"
    @dragover.stop.prevent
    @drop.stop="onDrop(field)">
    <div class="buttons-group">
      <button
        :disabled="isEditMode"
        @click="toggleEditMode">Edit</button>
      <button
        :disabled="!isEditMode"
        @click="toggleEditMode">Preview</button>
    </div>
    <btn
      @onclick="removeFieldFromForm(field.id)"
      btn-class="submit close"
      btn-label="x" />
    <component
      :is="componentName()"
      :field="field"
      :fieldIndex="fieldIndex" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import FormBuilderFieldsComponents from '@/components/form_builder/form_builder_fields';
import FormFieldsComponents from '@/components/forms/form_fields';

const { mapGetters, mapMutations } = createNamespacedHelpers('formBuilder');

export default {
  name: 'FormBuilderFieldsListField',
  data() {
    return {
      isEditMode: true
    };
  },
  components: {
    ...FormBuilderFieldsComponents,
    ...FormFieldsComponents
  },
  props: {
    field: {
      required: true,
      type: Object
    },
    fieldIndex: {
      required: true,
      type: Number
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
    componentName() {
      return this.isEditMode ? `form-builder-field-${this.field.type}` : `form-field-${this.field.type}`;
    },
    onDrop(insertAfterField) {
      const field = Object.assign({}, this.dragField);
      field.id = field.id || Date.now();
      this.addFieldToFormAfterField({field, insertAfterField});

      this.setDragOverField(null);
    },
    toggleEditMode() {
      this.isEditMode = !this.isEditMode;
    }
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-fields-list-field.scss";
</style>
