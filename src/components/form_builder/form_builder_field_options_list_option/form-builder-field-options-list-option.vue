<template>
  <div
    class="FormBuilderFieldOptionsListOption__wrapper"
    :class="{'drag-over': dragOverFieldOption === option}"
    draggable="true"
    @dragstart="startDragFieldOption(option)"
    @dragend="startDragFieldOption(null)"
    @dragenter="setDragOverFieldOption(option)"
    @dragleave="setDragOverFieldOption(null)"
    @dragover.stop.prevent
    @drop.stop="onDrop()">
    <div>
      <label class="form-label">Option Label</label>
      <input type="text" v-model="optionTitle" placeholder="Option field label">
    </div>
    <button @click="removeFieldOptionFromField({fieldOption: option, field})">X</button>
  </div>
</template>

<script>
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapMutations } = createNamespacedHelpers('formBuilder');

export default {
  name: 'FormBuilderFieldOptionsListOption',
  props: {
    fieldOptionIndex: {
      required: true,
      type: Number
    },
    fieldIndex: {
      required: true,
      type: Number
    },
    field: {
      required: true,
      type: Object
    },
    option: {
      required: true,
      type: Object
    }
  },
  computed: {
    optionTitle : {
      get() {
        return this.optionField.title;
      },
      set(value) {
        this.setFieldOptionTitle({
          fieldIndex: this.fieldIndex, 
          fieldOptionIndex: this.fieldOptionIndex, 
          value
        });
      }
    },
    optionField: {
      get() {
        return this.$store.state.formBuilder.form.fields[this.fieldIndex].data.options[this.fieldOptionIndex];
      }
    },
    ...mapGetters([
      'dragFieldOption',
      'dragOverFieldOption'
    ])
  },
  methods: {
    ...mapMutations([
      'removeFieldOptionFromField',
      'addFieldOptionAfterOption',
      'startDragFieldOption',
      'setDragOverFieldOption',
      'setFieldOptionTitle'
    ]),
    onDrop() {
      const fieldOption = Object.assign({}, this.dragFieldOption);
      this.addFieldOptionAfterOption({field: this.field, fieldOption, insertAfterOption: this.option});

      this.setDragOverFieldOption(null);
    }
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-field-options-list-option.scss";
</style>
