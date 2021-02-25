import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
Vue.prototype.axios= axios;

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


import { library } from '@fortawesome/fontawesome-svg-core';
import { faTachometerAlt, faList, faFlag, faPlay, faFileAlt, faSearch, faClipboardCheck, faDatabase, faCheckCircle, faQuestionCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTachometerAlt, faList, faFlag, faPlay, faFileAlt, faSearch, faClipboardCheck, faDatabase, faCheckCircle, faQuestionCircle, faTimesCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon)


import Chart from 'chart.js';
import ChartJSPluginDatalabels from 'chartjs-plugin-datalabels';

Chart.plugins.unregister(ChartJSPluginDatalabels);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  BootstrapVue,
  ChartJSPluginDatalabels,
  render: h => h(App)
}).$mount("#app");
