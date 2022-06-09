import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';
import * as Sentry from '@sentry/vue';
import { BrowserTracing } from '@sentry/tracing';
import '@/assets/global.css';

Vue.config.productionTip = false;

Sentry.init({
  Vue,
  dsn: process.env.VUE_APP_SENTRY_DNS,
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: [process.env.VUE_APP_SENTRY_TRACING_ORIGINS, /^\//],
    }),
  ],
  tracesSampleRate: 1.0,
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
