<template>
  <div class="FormBuilderFieldTextarea__wrapper">
    {{field.id}} - textarea
  </div>
</template>

<script>
export default {
  name: 'FormFieldTextarea',
  props: {
    field: {
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
@import "form-builder-field-textarea.scss";
</style>
