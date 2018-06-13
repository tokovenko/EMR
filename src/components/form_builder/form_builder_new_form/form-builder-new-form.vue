<template>
  <div class="FormBuilderNewForm__wrapper">
    <div class="content-inner" v-if="form">
      <div class="form-row">
        <label
          for="title"
          class="form-label">
          Title
        </label>
        <input
          id="title"
          v-focus
          class="form-field"
          type="text"
          placeholder="Enter form name" />
      </div>
      <div class="form-row">
        <label
          for="description"
          class="form-label">
          Description
        </label>
        <textarea
          id="description"
          class="form-field"
          type="text"
          placeholder="Enter form description">
        </textarea>
      </div>
      <form-builder-fields-list />
      <form-builder-new-form-drop-area />
      <div class="form-actions">
        <btn
          btn-class="submit"
          btn-label="Submit" />
      </div>
    </div>
  </div>
</template>

<script>
import FormBuilderFieldsList from '@/components/form_builder/form_builder_fields_list/form-builder-fields-list';
import FormBuilderNewFormDropArea from '@/components/form_builder/form_builder_new_form_drop_area/form-builder-new-form-drop-area';
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapMutations } = createNamespacedHelpers('formBuilder');

const DRAG_OVER_CLASSNAME = 'drag-over';

export default {
  name: 'FormBuilderNewForm',
  data() {
    return {
      dragOver: false
    };
  },
  components: {
    FormBuilderFieldsList,
    FormBuilderNewFormDropArea
  },
  computed: {
    ...mapGetters([
      'dragField',
      'form'
    ])
  },
  methods: {
    ...mapMutations([
      'setForm',
      'addFieldToForm'
    ]),
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
  },
  beforeMount() {
    const form = {
      id: null,
      name: '',
      description: '',
      fields: []
    };
    this.setForm(form);
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-new-form.scss";
</style>
