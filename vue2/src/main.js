import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false
import pksg from './packages/install'
Vue.use(pksg)

new Vue({
  render: h => h(App),
}).$mount('#app')
