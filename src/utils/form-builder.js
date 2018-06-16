export function mapField(property) {
  return {
    get() {
      return this.$store.getters['formBuilder/formFields'][this.fieldIndex].data[property];
    },
    set(value) {
      this.$store.commit('formBuilder/setFieldProperty', {
        fieldIndex: this.fieldIndex,
        property,
        value
      });
    }
  };
}

export function mapFields(fields = []) {
  const items = fields.reduce((map, field) => {
    map[field] = mapField(field);
    return map;
  }, {});
  return items;
}
