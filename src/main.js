import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import fontawesome from '@fortawesome/fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import faComment from '@fortawesome/fontawesome-free-solid/faComment'
import faBell from '@fortawesome/fontawesome-free-solid/faBell'

fontawesome.library.add(faSpinner,faHome,faBars,faComment,faBell)
Vue.use(BootstrapVue);


new Vue({
  el: '#app',
  render: h => h(App)
})
