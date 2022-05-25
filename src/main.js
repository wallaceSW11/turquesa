import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import VueTheMask from 'vue-the-mask';

import 'sweetalert2/dist/sweetalert2.min.css';

Vue
  .use(VueSweetalert2)
  .use(VueTheMask);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
