import Vue from 'vue'
import App from './App.vue'
import VueTyperPlugin  from 'vue-typer'
import Normalize from "normalize.css"

Vue.config.productionTip = false
Vue.use(VueTyperPlugin)
Vue.use(Normalize)

new Vue({
  render: h => h(App),
}).$mount('#app')