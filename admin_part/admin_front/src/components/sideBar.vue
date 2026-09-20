<template>
  <div class="sidebar" :class="{active: isActive}">
    <div class="toggle_menu" @click="hide_show">
        <h3>MENU</h3>
    </div>
    <nav v-if="isActive">
    
      <ul class="menu">
        <li><router-link to="/admin/tladd">Administrateurs</router-link></li>
        <li><router-link to="/admin/plan">Plan Urbanisme</router-link></li>
        <li><router-link to="/admin/procedures">Procédures</router-link></li>
        <li><router-link to="/admin/pub">Publications</router-link></li>
        <li><router-link to="/admin/schema">Schémas Aménagement</router-link></li>
        <li><router-link to="/admin/stats">Statistiques</router-link></li>
        <li><router-link to="/admin/tladd">Textes de Lois</router-link></li>
        <li><router-link to="/admin/tmadd">Thèses et Mémoires</router-link></li>
      </ul>
      <div class="logout">
        <button class="logout-btn" @click="logout()">Déconnexion</button>
      </div>
    
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  color: white;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  height: fit-content;
  width: 200px;
  background-color: #27333f;
  padding-top: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  overflow-y: auto;
  z-index: 1000;
}
.toggle_menu{
  width: 100%;
  padding-left: 70px;
  padding-bottom: 20px;
  cursor: pointer;
}
.active{
  height: 100%;
}
h3{
  font-size: 20px;
  font-weight: bolder;
}
.sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
}

.sidebar a {
  color: #ecf0f1;
  text-decoration: none;
  display: block;
  padding: 10px 16px;
}

.sidebar a.router-link-active {
  background-color: #34495e;
}
.logout{ 
  margin-top: auto;
} 
.logout-btn {
  margin: 0 16px;
  
  padding: 10px;
  background-color: #27333f00;
  color: #fff;
  border: 1px solid red;
  cursor: pointer;
  align-self: stretch;
}

.logout-btn:hover {
  background: #e74c3c;
}
</style>
<script>
  export default {
    name: 'sideBar',
    data(){
      return{
        isActive: false,
      }
    },
    methods:{
      logout(){
        localStorage.removeItem("token");
        this.$router.push("/");
        console.log("Utilisateur déconnecté");
      },
      hide_show(){
        this.isActive = !this.isActive
      }
    }
  }
</script>