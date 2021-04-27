import Vue from 'vue';
import App from './App.vue';
import router from './router';
// TODO:
// import store from './store';
// import './registerServiceWorker';
import 'normalize.css';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import './styles/main.scss';

Vue.config.productionTip = false;

export const store = new Vue({
  data: {
    correctWords: <string[]>[],
    answer: <string | null>null,
  },
});

export const eventBus = new Vue();

new Vue({
  router,
  // TODO:
  // store,
  render: h => h(App),
}).$mount('#app');
