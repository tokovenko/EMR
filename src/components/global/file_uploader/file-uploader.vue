<template>
  <div class="FileUploader__wrapper"
    @dragenter="dragging=true"
    @dragend="dragging=false"
    @dragleave="dragging=false"
    @drop="dragging=false"
    :class="[error ? 'error' : '', dragging ? 'active' : '']">
    <div class="FileUploader__dropzone">
      <slot name="toggle"></slot>

      <input class="FileUploader__input"
        type="file"
        accept="image/*"
        @change="fileChange"
        :required="required"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileUploader',
  props: {
    required: {type: Boolean}
  },
  data() {
    return {
      file: null,
      dragging: false,
      rendered: null,
      error: null
    };
  },
  methods: {
    fileChange(ev) {
      this.file = ev.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.rendered = e.target.result;
        this.$emit('onrendered', this.rendered);
      };
      reader.readAsDataURL(this.file);
      this.upload();
    },
    upload() {
      this.$emit('onupload', this.file);
    }
  }
};
</script>
<style scoped lang="scss">
@import "file-uploader.scss";
</style>
