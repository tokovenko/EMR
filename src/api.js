import axios from 'axios';

const buildPath = path => `domain/${path}`;

const prepareHeaders = () => {
  const header = localStorage.getItem('accessToken');
  return header ? {Authorization: `Bearer ${header}`} : {};
};

const api = {
  authorize(params) {
    return new Promise(resolve => setTimeout(() => resolve({
      access_token: 'test_access_token',
      refresh_token: 'test_refresh_token',
      expires_at: new Date().getTime()
    }), 1000));
  },

  fetchCurrentUser() {
    return new Promise(resolve => setTimeout(() => resolve({
      name: 'Jane Doe',
      id: '123',
      profile_url: 'jane_doe',
      image_url: 'https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png'
    }), 1000));
  },

  fetchForms() {
    return new Promise(resolve => setTimeout(() => resolve([
      {
        id: 0,
        name: 'form 1',
        description: 'Form that will be used to test form viewer functionality',
        created_at: new Date().getTime(),
        fields: []
      },
      {
        id: 1,
        name: 'form 2',
        description: 'Form that will be used to test form viewer functionality',
        created_at: new Date().getTime(),
        fields: []
      }
    ]), 500));
  },

  fetchForm() {
    return new Promise(resolve => setTimeout(() => resolve({
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
            options: ['otion one', 'option two'],
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
    }), 500));
  }
};

export default api;
