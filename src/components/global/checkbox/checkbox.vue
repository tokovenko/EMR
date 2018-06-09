<template>
  <div
    class="Checkbox__wrapper"
    :class="{'checked': model}">
    <input class="Checkbox__input"
      type="checkbox"
      v-model="model"
      @change="$emit('change', model)"
      :id="id"/>
    <label class="Checkbox__label" :for="id">
      <i class="icon-check Checkbox__icon"></i>
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    value: {},
    checked: {type: Boolean}
  },
  data() {
    return {
      id: `checkbox-${(Math.random() * (new Date().getTime())).toFixed()}`
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
        this.$emit('onchange', val);
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .Checkbox {
    &__wrapper {
      position: relative;
      width: 22px;
      height: 22px;
      cursor: pointer;
      line-height: 22px;
      display: inline-block;

    }
    &__input {display: none;}
    &__label {
      cursor: pointer;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: -.31px;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 22px;
        height: 22px;
        border: 2px solid #FFF;
      }
      &:after {
        content: '';
        background: rgba(255, 255, 255, .7);
        position: absolute;
        left: 0;
        top: 0;
        width: 22px;
        height: 22px;
        transform: scale(0);
        transition: transform .2s ease;
      }
    }

    &__input:checked + &__label:after {
      transform: scale(1);
    }

    &__label &__icon {
      color: #707070;
      font-size: 8px;
      position: absolute;
      left: 4px;
      top: 0;
      z-index: 1;
      transform: scale(0);
      transition: transform .2s cubic-bezier(.87,-.41,.19,1.44) .16s;
    }

    &__input:checked + &__label &__icon {
      transform: scale(1);
    }
  }
</style>
