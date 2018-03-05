import Vue from 'vue';
import App from './App.vue';
import MachinesList from './MachinesList.vue';
import MachinesMap from './MachinesMap.vue';

Vue.component('machineslist', MachinesList);
Vue.component('mapmachine', MachinesMap);
new Vue({
  el: '#app',
  render: h => h(App)
})
