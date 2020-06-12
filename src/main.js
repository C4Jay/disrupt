import Vue from 'vue'
import App from './App.vue'
import VideoBg from 'vue-videobg'
import vuetify from './plugins/vuetify';

Vue.component('video-bg', VideoBg)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
