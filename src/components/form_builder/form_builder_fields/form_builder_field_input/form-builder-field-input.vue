<template>
  <div class="FormBuilderFieldInput__wrapper">
    {{field.id}} - {{field.id}} - text
  </div>
</template>

<script>
export default {
  name: 'FormBuilderFieldInput',
  props: {
    field: {
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-field-input.scss";
</style>
