<template>
  <div class="SignInView__wrapper">
    <div class="content">
      <div class="content-inner">
        <div class="form-title">
          Sign in
        </div>

        <div class="form-row">
          <label
            for="email"
            class="form-label">
            Email Address
          </label>
          <input
            id="email"
            v-focus
            :class="{'is-danger': errors.has('email')}"
            name="email"
            class="form-field"
            type="email"
            v-model="credentials.email"
            v-validate="'required|email'"
            data-vv-delay="500"
            data-vv-as="Email Address"
            ref="email"
            placeholder="Enter your email"
            @keyup.enter="$refs.password.focus()" />
          <span
            v-show="errors.has('email')"
            class="form-help is-danger">
            {{ errors.first('email') }}
          </span>
        </div>

        <div class="form-row">
          <label
            for="password"
            class="form-label">
            Password
          </label>
          <input
            id="password"
            :class="{'is-danger': errors.has('password')}"
            name="password"
            class="form-field"
            type="password"
            v-model="credentials.password"
            v-validate="'required'"
            data-vv-delay="500"
            data-vv-as="Password"
            ref="password"
            placeholder="Enter password"
            @keyup.enter="submit" />
          <span
            v-show="errors.has('password')"
            class="form-help is-danger">
            {{ errors.first('password') }}
          </span>
        </div>

        <div class="form-actions">
          <btn
            :btn-processing="processing"
            @onclick="submit"
            btn-class="submit"
            btn-label="Submit">
          </btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('oauth');

export default {
  name: 'SignInView',
  data() {
    return {
      credentials: {},
      processing: false,
      error: null
    };
  },
  methods: {
    ...mapActions(['authorize']),
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.error = null;
          this.processing = true;
          this.authorize(this.credentials).then(() => {
            this.$router.push({name: 'home'});
          });
        }
      });
    }
  }
};
</script>

<style lang="scss">
  .SignInView {
    &__wrapper {
      transition: transform .16s ease-out, opacity .2s ease;
    }
  }
</style>
