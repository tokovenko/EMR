export default [
  {
    id: 0,
    name: 'form 1',
    description: 'Form that will be used to test form viewer functionality',
    created_at: new Date().getTime(),
    fields: [
      {
        id: 0,
        type: 'checkbox',
        data: {
          name: 'unique_checkbox_name',
          description: 'checkbox description',
          value: null,
          options: [],
          remoteOptions: {},
          required: false,
          multiple: false,
          label: 'Checkbox label',
          validation: {
            type: null,
            value: null
          }
        }
      },
      {
        id: 1,
        type: 'input',
        data: {
          name: 'unique_input_name',
          description: 'input description',
          value: '',
          required: false,
          placeholder: 'placeholder',
          label: 'Input label',
          mask: null,
          validation: {
            type: 'predefined',
            value: ['numeric', 'max:5']
          }
        }
      },
      {
        id: 2,
        type: 'radio',
        data: {
          name: 'unique_radio_name',
          description: 'radio description',
          value: null,
          options: [{id: 0, title: 'otion one'}, {id: 1, title: 'option two'}],
          remoteOptions: {},
          required: false,
          multiple: false,
          label: 'radio label',
          validation: {
            type: null,
            value: null
          }
        }
      },
      {
        id: 3,
        type: 'select',
        data: {
          name: 'unique_select_name',
          description: 'select description',
          value: null,
          options: [],
          remoteOptions: {},
          required: false,
          multiple: false,
          label: 'select label',
          validation: {
            type: null,
            value: null
          }
        }
      },
      {
        id: 4,
        type: 'textarea',
        data: {
          name: 'unique_textarea_name',
          description: 'textarea description',
          value: '',
          required: false,
          placeholder: 'placeholder',
          label: 'textarea label',
          mask: null,
          validation: {
            type: null,
            value: null
          }
        }
      }
    ]
  },
  {
    id: 1,
    name: 'form 2',
    description: 'Form that will be used to test form viewer functionality',
    created_at: new Date().getTime(),
    fields: []
  }
];
