<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"><font-awesome-icon icon="home" style="color: white;" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#"><font-awesome-icon icon="bars" style="color: white;" /></a>

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
      <form class="form-inline ">
        <input class="form-control mr-sm-2 " type="search" placeholder="Rechercher un abonné (nom, id, n° de dossier" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  </div>
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
