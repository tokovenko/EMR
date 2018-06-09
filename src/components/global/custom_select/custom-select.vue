<template>
  <div class="CustomSelect__wrapper"
    :class="{'is-danger': errors.has('term_id'), 'invalidate': disabled}">
    <i class="icon-right-open CustomSelect__presentation"
      :class="{'open': isOpen}"
      @click="open"></i>
    <div class="CustomSelect__backdrop"
      @click="close"
      v-if="isOpen"></div>

    <div class="CustomSelect__inner">
      <div class="CustomSelect__open"
        v-if="isOpen && searchEnabled">
        <input class="CustomSelect__input"
          type="text"
          v-model="query"
          :placeholder="placeholder"/>
      </div>
      <div class="CustomSelect__close"
        v-else
        @click="open">
        <span class="CustomSelect__selected"
          v-if="selected">
          <slot name="selected"
            :selected="selected">
            {{ selectedLabel }}
          </slot>
        </span>
        <div class="CustomSelect__placeholder"
          v-else>
          {{ placeholder }}
        </div>
      </div>
      <div class="CustomSelect__dropdown custom-scrollbar-container"
        v-if="isOpen">
        <div class="CustomSelect__options">
          <div class="CustomSelect__option"
            v-for="(option, index) in filteredOptions"
            :key="index"
            :class="{'selected':(value?option[value]:option)===selectedValue}"
            @click="select(option)">
            <slot name="option"
              :option="option">
              {{ label ? option[label] : option }}
            </slot>
          </div>
          <div class="CustomSelect__no-results"
            v-if="!filteredOptions.length">
            No matching options.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    model: {required: true},
    placeholder: {
      type: String,
      default: 'Select Option'
    },
    options: {
      type: Array,
      default: () => []
    },
    label: {type: String},
    value: {type: String},
    searchEnabled: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    selectedValue() {
      return (this.value && this.selected) ? this.selected[this.value] : this.selected;
    },
    selectedLabel() {
      return (this.label && this.selected) ? this.selected[this.label] : this.selected;
    },
    filteredOptions() {
      let options = this.options;
      if (this.query) {
        options = this.options.filter(option => {
          const label = this.label ? option[this.label] : option;
          return label.includes(this.query);
        });
      }
      return options;
    }
  },
  data() {
    return {
      selected: null,
      isOpen: false,
      query: null
    };
  },
  watch: {
    model(v) {
      this.preselect();
    },
    options(v) {
      this.preselect();
    }
  },
  methods: {
    open() { this.isOpen = true; },
    close() {
      this.isOpen = false;
      this.query = null;
    },
    select(option) {
      this.selected = option;
      this.close();
      this.$emit('onselect', this.selected);
    },
    preselect() {
      if (this.model && this.options.length) {
        this.selected = this.options.find(o => {
          const option = this.value ? o[this.value] : o;
          return option === this.model;
        }) || null;
        if (this.selected) this.$emit('onselect', this.selected);
      }
    }
  },
  mounted() {
    this.preselect();
  }
};
</script>
<style scoped lang="scss">
@import "custom-select.scss";
</style>
