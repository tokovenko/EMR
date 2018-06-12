<template>
  <router-link
    :to="{name: 'form', params: {id: form.id}}"
    tag="div"
    class="FormsListForm__wrapper">
    <div class="FormsListForm__name">
      {{ form.name }}
    </div>
    <div class="FormsListForm__description">
      {{ form.description }}
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'FormsListForm',
  props: {
    form: {
      required: true,
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
@import "forms-list-form.scss";
</style>
