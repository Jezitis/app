import Vue from 'vue';
import App from './App.vue';

import alertFunc from './assets/js/func';
import { message1, message2 } from './assets/js/variables';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alertFunc(message1);
alertFunc(message2);
