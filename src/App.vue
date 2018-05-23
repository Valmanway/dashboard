<template>
  <v-app>
  <div id="app">
    <topbar></topbar>

    <v-navigation-drawer
      stateless
      value="true"

    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>
        <v-list-group
          prepend-icon="account_circle"
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile>
          <v-list-group
            sub-group
            no-action
            value="true"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              v-for="(admin, i) in admins"
              :key="i"
              @click=""
            >
              <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="admin[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
          <v-list-group
            sub-group
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Actions</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              v-for="(crud, i) in cruds"
              :key="i"
              @click=""
            >
              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>


<dropdown drop="ououio"></dropdown>
    <div id="carte">
      <h1>{{title}}</h1>
    </div>
    <div id="carte1">
      <h1>{{title1}}</h1>
    </div>
  </div>
  </v-app>
</template>

<script>
  import Topbar from './topbar.vue';
  import Dropdown from'./dropdown.vue'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import Vuetify from 'vuetify'
  import 'vuetify/dist/vuetify.min.css'
  export default {
    components : {Topbar,Dropdown,FontAwesomeIcon},
  name: 'app',
  data () {
    return {
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ],
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
  margin-left: 20%;
}
#carte1{
  color: #d1d8de;
  padding: 20px;
  width: 200px;
  height: 200px;
  background-color: #ff675b;
  margin-left: 20%;
}
b-dropdown {
  background-color: #ff0940;
}

</style>
