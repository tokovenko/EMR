import Vue from 'vue';
import {removeFromArray, insertInArray, getIndexByParam} from '@/utils/array';
import blocks from './blocks';

const state = {
  blocks,
  drag: {
    isDragging: false,
    field: null,
    fieldOption: null,
    overField: null,
    overFieldOption: null
  },
  form: null
};

const getters = {
  blocks: state => state.blocks,
  drag: state => state.drag.isDragging,
  dragField: state => state.drag.field,
  dragOverField: state => state.drag.overField,
  dragFieldOption: state => state.drag.fieldOption,
  dragOverFieldOption: state => state.drag.overFieldOption,
  form: state => state.form,
  formFields: state => state.form && state.form.fields
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
  startDragFieldOption(state, fieldOption) {
    Vue.set(state.drag, 'fieldOption', fieldOption);
    Vue.set(state.drag, 'isDragging', true);
  },
  endDragFieldOption(state) {
    Vue.set(state.drag, 'fieldOption', null);
    Vue.set(state.drag, 'overFieldOption', null);
    Vue.set(state.drag, 'isDragging', false);
  },
  setDragOverFieldOption(state, fieldOption) {
    Vue.set(state.drag, 'overFieldOption', fieldOption);
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
  addFieldOptionAfterOption(state, {field, fieldOption, insertAfterOption}) {
    const index = getIndexByParam(state.form.fields, field.id);
    if (index > -1) {
      const {options = []} = state.form.fields[index].data;
      removeFromArray(options, fieldOption.id);
      insertInArray(options, fieldOption, insertAfterOption.id);
      Vue.set(state.form.fields[index].data, 'options', [...options]);
    }
  },
  removeFieldFromForm(state, fieldId) {
    removeFromArray(state.form.fields, fieldId);
    Vue.set(state.form, 'fields', [...state.form.fields]);
  },
  removeFieldOptionFromField(state, {field, fieldOption}) {
    const index = getIndexByParam(state.form.fields, field.id);
    if (index > -1) {
      const {options = []} = state.form.fields[index].data;
      removeFromArray(options, fieldOption.id);
      Vue.set(state.form.fields[index].data, 'options', [...options]);
    }
  },
  addFieldOption(state, fieldId) {
    const index = getIndexByParam(state.form.fields, fieldId);
    if (index > -1) {
      const field = state.form.fields[index];
      const option = {
        id: Date.now(),
        title: ''
      };
      field.data.options.push(option);
      Vue.set(state.form.fields[index].data, 'options', [...field.data.options]);
    }
  },
  setFieldOptionTitle(state, {fieldIndex, fieldOptionIndex, value}) {
    Vue.set(state.form.fields[fieldIndex].data.options[fieldOptionIndex], 'title', value);
  },
  setFieldProperty(state, {fieldIndex, value, property}) {
    Vue.set(state.form.fields[fieldIndex].data, property, value);
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
