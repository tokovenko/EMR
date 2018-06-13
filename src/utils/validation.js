export function setValidationRules(field) {
  let rules = [];
  if (field.data.required) rules.push('required');
  if (field.data.validation.type === 'regex') {
    rules.push(`regex:${field.data.validation.value}`);
  } else if (field.data.validation.value) {
    rules = rules.concat(field.data.validation.value);
  }
  return rules.join('|');
}
