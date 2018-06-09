<template>
  <div class="Radio__wrapper">
    <input class="Radio__input"
      type="radio"
      :value="label"
      :name="name"
      v-model="model"
      :id="id"/>
    <label class="Radio__label" :for="id">
      <i class="icon-check Radio__icon"></i>
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    value: {},
    label: {required: true},
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    id() {
      return `${this.name}_${this.label.toString().replace(/ /g, '-')}`;
    },
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .Radio {
    &__wrapper {
      position: relative;
      padding: 0 24px 0 32px;
      cursor: pointer;
      line-height: 22px;
      display: inline-block;
      margin: 10px 0;
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
        border: 1px solid #C7C7CD;
        border-radius: 100%;
      }
      &:after {
        content: '';
        background: #50E3C2;
        position: absolute;
        left: 0;
        top: 0;
        width: 22px;
        height: 22px;
        border-radius: 100%;
        transform: scale(0);
        transition: transform .2s ease;
      }
    }

    &__input:checked + &__label:after {
      transform: scale(1);
    }

    &__label &__icon {
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
