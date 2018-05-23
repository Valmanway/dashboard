<template>
  <div id="app">
    <topbar></topbar>
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div id="carte">
      <h1>{{title}}</h1>
    </div>
    <div id="carte1">
      <h1>{{title1}}</h1>
    </div>

<dropdown drop="ououio"></dropdown>



  </div>

</template>

<script>
  import Topbar from './topbar.vue';
  import Dropdown from'./dropdown.vue'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
    components : {Topbar,Dropdown,FontAwesomeIcon},
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'OUI',
      title1:'NON'

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
#carte{
  color: #d1d8de;
  padding: 20px;
  width: 200px;
  height: 200px;
  background-color: #3977ff;
}
#carte1{
  color: #d1d8de;
  padding: 20px;
  width: 200px;
  height: 200px;
  background-color: #ff675b;
}
b-dropdown {
  background-color: #ff0940;
}
</style>
