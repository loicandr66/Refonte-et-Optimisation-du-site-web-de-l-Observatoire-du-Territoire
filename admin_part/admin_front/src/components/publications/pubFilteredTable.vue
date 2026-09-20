<template>
  <div class="container">
    <h1>Données dans la table publications</h1>

    <div class="filters">
      <div class="search">
        <label class="search_elm">Champ à filtrer : </label>
        <select v-model="selectedField" class="search_elm">
          <option v-for="key in tableHeaders" :key="key" :value="key">{{ key }}</option>
        </select>

        <input
          class="search_elm"
          type="text"
          v-model="searchQuery"
          placeholder="Rechercher une valeur..."
        />
      </div>
      <div class="add">
        <router-link to="/admin/pub/add"><img src="../icons/ajout_icon.png" alt="Ajouter" width="30" height="30"></router-link>
      </div>
    </div>

    <table v-if="filteredItems.length > 0" border="1">
      <thead>
        <tr>
          <th v-for="header in tableHeaders" :key="header">{{ header }}</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in filteredItems" :key="i">
          <td v-for="header in tableHeaders" :key="header">{{ item[header] }}</td>
          <td>
            <button class="modify" @click="editRow(item.id_pub)">Modifier</button>
            <button class="delete" @click="deleteRow(item.id_pub)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-else>Aucune donnée trouvée.</p>
  </div>
</template>

<script>
export default {
  name: "pubDataTable",
  data() {
    return {
      items: [],
      searchQuery: "",
      selectedField: "",
    };
  },
  computed: {
    filteredItems() {
      if (!this.selectedField || !this.searchQuery) return this.items;
      return this.items.filter(item =>
        String(item[this.selectedField])
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())
      );
    },
    tableHeaders() {
      return this.items.length > 0 ? Object.keys(this.items[0]) : [];
    },
  },
  methods: {
    async fetchData() {
      try {
        const res = await fetch("http://localhost:3000/api/publications");
        const data = await res.json();
        this.items = data;
      } catch (err) {
        console.error("Erreur de chargement :", err);
      }
    },
    async editRow(id_pub){
      console.log("ID reçu: ", id_pub);
      this.$router.push({name:'pubEditForm', params:{id_pub}})
    },
    async deleteRow(id_pub) {
      if (!confirm("Voulez-vous vraiment supprimer cette ligne ?")) return;
      try {
        const res = await apiFetch(`/publications/delete/${id_pub}`, {
          method: "DELETE",
        });
        
        this.items = this.items.filter((item) => item.id_pub !== id_pub);
      } catch (err) {
        console.error("Erreur lors de la suppression :", err);
      }
    },

  },
  async mounted() {
    this.fetchData();
  },
};
</script>

<style>
.container {
  padding: 20px;
  width: 75%;
  display: block;
  color: white;
  
}

.filters {
  margin-top: 50px;
  margin-bottom: 15px;
  display: flex;
  gap: 30px;
  flex-direction: row;
  justify-content: space-between;

}
input,
select {
  padding: 5px;
  font-size: 1em;
}
.search_elm{
  margin: 5px 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 17px;
}
.add, img{
  border-radius: 10px;
}
th,
td {
  padding: 8px;
  border: 1px solid #ccc;
}
.delete {
  padding: 5px 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  cursor: pointer;
}
.delete:hover {
  background-color: #c0392b;
}

.modify {
  padding: 5px 10px;
  background-color: #5590ff;
  color: white;
  border: none;
  cursor: pointer;
}
.modify:hover {
  background-color: #1b0f83;
}
</style>
