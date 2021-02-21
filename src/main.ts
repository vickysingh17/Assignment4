import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { productData, cardNetworkLogos } from './constants/constants'

Vue.config.productionTip = false;

if(!localStorage.getItem('dataId')) {
  localStorage.setItem('dataId', JSON.stringify(productData));
}
if(!localStorage.getItem('cardNetwork')) {
  localStorage.setItem('cardNetwork', JSON.stringify(cardNetworkLogos));
}
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
