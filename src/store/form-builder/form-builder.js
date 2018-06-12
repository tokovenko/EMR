import Vue from 'vue';
import {removeFromArray, insertInArray, getIndexByParam} from '@/utils/array';
import blocks from './blocks';

const state = {
  blocks,
  drag: {
    isDragging: false,
    field: null,
    overField: null
  },
  form: null
};

const getters = {
  blocks: state => state.blocks,
  drag: state => state.drag.isDragging,
  dragField: state => state.drag.field,
  dragOverField: state => state.drag.overField,
  form: state => state.form,
  formFields: state => state.form.fields
};

const actions = {
};

const mutations = {
  startDragField(state, field) {
    Vue.set(state.drag, 'field', field);
    Vue.set(state.drag, 'isDragging', true);
  },
  endDragField(state) {
    Vue.set(state.drag, 'field', null);
    Vue.set(state.drag, 'overField', null);
    Vue.set(state.drag, 'isDragging', false);
  },
  setDragOverField(state, field) {
    Vue.set(state.drag, 'overField', field);
  },
  setForm(state, form) {
    Vue.set(state, 'form', form);
  },
  addFieldToForm(state, field) {
    Vue.set(state.form, 'fields', [...state.form.fields, field]);
  },
  addFieldToFormAfterField(state, {field, insertAfterField}) {
    removeFromArray(state.form.fields, field.id);
    insertInArray(state.form.fields, field, insertAfterField.id);
    Vue.set(state.form, 'fields', [...state.form.fields]);
  },
  removeFieldFromForm(state, fieldId) {
    removeFromArray(state.form.fields, fieldId);
    Vue.set(state.form, 'fields', [...state.form.fields]);
  },
  addFieldOption(state, fieldId) {
    const index = getIndexByParam(state.form.fields, fieldId);
    if (index > -1) {
      const field = state.form.fields[index];
      const option = {
        value: '',
        title: ''
      };
      field.data.options.push(option);
      Vue.set(state.form.fields[index].data, 'options', [...field.data.options]);
    }
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
