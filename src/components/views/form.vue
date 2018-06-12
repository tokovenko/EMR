<template>
  <div class="FormView__wrapper">
    <div class="content">
      <div class="content-inner">
        <router-link
          class="FormView__go-back"
          :to="{name: 'forms'}">
          &laquo; Back to Forms
        </router-link>
        <form-details></form-details>
      </div>
    </div>
  </div>
</template>

<script>
import FormDetails from '@/components/forms/form_details/form-details';

export default {
  name: 'FormView',
  components: {
    FormDetails
  }
};
</script>

<style lang="scss">
  .FormView {
    &__wrapper {
      transition: transform .16s ease-out, opacity .2s ease;
    }

    &__go-back {
      text-decoration: none;
      cursor: pointer;
      padding-bottom: 12px;
      display: inline-block;
      color: #4A4A4A;
    }
  }
</style>
