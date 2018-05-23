import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import fontawesome from '@fortawesome/fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import faComment from '@fortawesome/fontawesome-free-solid/faComment'
import faBell from '@fortawesome/fontawesome-free-solid/faBell'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'

fontawesome.library.add(faSpinner,faHome,faBars,faComment,faBell,faUser)
Vue.use(BootstrapVue);
Vue.use(Vuetify);


new Vue({
  el: '#app',
  render: h => h(App)
})
