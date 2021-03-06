import Vue from 'vue';
import App from './App.vue';
import store from './store';

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
  render: h => h(App)
});
