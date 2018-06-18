import axios from 'axios';
import forms from './mocks/forms';

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
    return new Promise(resolve => setTimeout(() => resolve(forms), 500));
  },

  saveForm(form) {
    return new Promise(resolve => setTimeout(() => {
      forms.unshift(form);
      resolve(form);
    }, 500));
  },

  fetchForm(id) {
    return new Promise(resolve => setTimeout(() => {
      const form = forms.find(form => form.id === id);
      resolve(form);
    }, 500));
  }
};

export default api;
