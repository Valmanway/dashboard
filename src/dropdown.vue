<template>
  <div class="dropdown">
    <b-dropdown  :text="nom">
        <b-dropdown-item>First</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Something else here...</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
    </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
      data: function () {
        return {
          nom: "Créer"
        }
      },
      props:{
        drop: {type: String, default: "def" }
      },
      mounted:function(){
        this.nom=this.drop,
        console.log(this.nom)
      }
    }
</script>

<style scoped>


</style>
