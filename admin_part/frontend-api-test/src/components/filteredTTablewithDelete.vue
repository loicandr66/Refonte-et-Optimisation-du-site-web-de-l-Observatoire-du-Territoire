<template>
  <div class="container">
    <h2>Données dans la table plan_urbanisme</h2>

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
        <router-link to="/admin/add"><img src="../assets/icons/ajout_icon.png" alt="Ajouter" width="30" height="30"></router-link>
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
            <button class="modify" @clicl = "editRow(item.id_plan)">Modifier</button>
            <button class="delete" @click="deleteRow(item.id_plan)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-else>Aucune donnée trouvée.</p>
  </div>
</template>

<script>
export default {
  name: "FilteredTable",
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
        const res = await fetch("/api/plans");
        const data = await res.json();
        this.items = data;
      } catch (err) {
        console.error("Erreur de chargement :", err);
      }
    },
    async editRow(id_plan){
      this.$router.push({name: "modifTable", params:{id_plan : id_plan}})
    },
    async deleteRow(id_plan) {
      if (!confirm("Voulez-vous vraiment supprimer cette ligne ?")) return;
      try {
        const res = await fetch(`/api/plans/delete/${id_plan}`, {
          method: "DELETE",
        });
        if (!res.ok) throw new Error("Échec de la suppression.");
        this.items = this.items.filter((item) => item.id_plan !== id_plan);
      } catch (err) {
        console.error("Erreur lors de la suppression :", err);
      }
    },

  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  width: 75%;
  display: block;
}
.filters {
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
.add{
  width: 30px;
  height: 30px;
  align-content: center;
  border-radius: 5px;
  background-color: white;
  
}
table {
  width: 100%;
  border-collapse: collapse;
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
