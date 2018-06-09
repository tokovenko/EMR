<template>
  <div :class="['btn-'+btnClass, 'ripple', btnProcessing ? 'processing' : '']"
    @click="$emit('onclick')">
    <transition name="scale-in" mode="out-in">
      <spinner class="Btn__inner" v-if="btnProcessing" key="true" />
      <span class="Btn__inner" v-else key="false">
        <slot name="icon-before"></slot>
        {{ btnLabel }}
        <slot name="icon-after"></slot>
      </span>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    btnClass: {
      type: String,
      default: 'white'
    },
    btnLabel: {
      type: String,
      default: 'Submit'
    },
    btnProcessing: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
  .Btn__inner {
    display: flex;
    align-items: center;
    transition: transform .2s ease, opacity .22s ease;
  }
</style>
