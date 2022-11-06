import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import VueCompositionAPI from '@vue/composition-api';
import vuetify from '@/plugins/vuetify';
import * as Sentry from '@sentry/vue';
import { BrowserTracing } from '@sentry/tracing';
import { createPinia, PiniaVuePlugin } from 'pinia';

import '@/assets/global.css';

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

Vue.use(VueCompositionAPI);
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
  vuetify,
  pinia,
  render: (h) => h(App),
}).$mount('#app');
