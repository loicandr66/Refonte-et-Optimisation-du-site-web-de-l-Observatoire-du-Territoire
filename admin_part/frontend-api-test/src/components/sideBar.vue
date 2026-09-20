<template>
  <nav class="sidebar">
    <ul class="menu">
      <li><router-link to="/admin/tladd">Administrateurs</router-link></li>
      <li><router-link to="/admin/table">Plan Urbanisme</router-link></li>
      <li><router-link to="/admin/procadd">Procédures</router-link></li>
      <li><router-link to="/admin/pubadd">Publications</router-link></li>
      <li><router-link to="/admin/schemadd">Schémas Aménagement</router-link></li>
      <li><router-link to="/admin/statadd">Statistiques</router-link></li>
      <li><router-link to="/admin/tladd">Textes de Lois</router-link></li>
      <li><router-link to="/admin/tmadd">Thèses et Mémoires</router-link></li>
    </ul>
    <div class="logout">
      <button class="logout-btn" @click="logout">Déconnexion</button>
    </div>
    
  </nav>
</template>

<style scoped>
.sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  right: 0;
  height: 100%;
  width: 200px;
  background-color: #27333f;
  padding-top: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  overflow-y: auto;
  z-index: 1000;
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
/* .logout{
  margin-top: auto;
} */
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

</script>