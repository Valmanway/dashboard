<template>
  <!--
  <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"><font-awesome-icon icon="home" style="color: white;" /></a>
    <a class="navbar-brand" href="#"><font-awesome-icon icon="bars" style="color: white;" /></a>


      <form class="form-inline ">
        <input class="form-control mr-sm-6 " type="search" placeholder="Rechercher un abonné (nom, id, n° de dossier" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
         <dropdown drop="Créer"></dropdown>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> <font-awesome-icon icon="bell" style="color: white;" /></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#"><font-awesome-icon icon="comment" style="color: white;" /></a>
        </li>
        <li class="nav-item active">
          <dropdown drop="Profil"></dropdown>
        </li>
      </ul>

    </div>
  </nav>
  </div>
 -->


  <b-navbar toggleable="md" type="dark" variant="info" class="bg-dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#"><font-awesome-icon icon="home" style="color: white;" /></b-navbar-brand>
    <b-navbar-brand href="#"><font-awesome-icon icon="bars" style="color: white;" /></b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">

      <b-nav-form>
        <b-form-input  size="md" class="mr-sm-2" type="text" placeholder="Rechercher un abonné"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-nav>
          <b-nav-item href="#"><font-awesome-icon icon="comment" style="color: white;" /></b-nav-item>
          <b-nav-item href="#"><font-awesome-icon icon="bell" style="color: white;" /></b-nav-item>
        </b-navbar-nav>


        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <font-awesome-icon icon="user" style="color: white;" /> Profil
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

  <!-- navbar-1.vue -->

</template>

<script>
  import Dropdown from'./dropdown.vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  export default {
    components: {Dropdown,FontAwesomeIcon},
    name: "topbar"
  }
</script>

<style scoped>
nav{
  color: aliceblue;
}
</style>
