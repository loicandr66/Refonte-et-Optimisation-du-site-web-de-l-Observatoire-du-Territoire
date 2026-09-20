<template>
  <div>
    <h2>Données de la table</h2>
    <table v-if="items.length > 0" border="1">
      <thead>
        <tr>
          <th>Identification</th>
          <th>Redion</th>
          <th>DIstrict</th>
          <th>Commune</th>
          <th>PUDE</th>
          <th>Carte</th>
          <th>Rapport</th>
          <th>Type de Plan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td v-for="(value, key) in item" :key="key">{{ value }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>Aucune donnée trouvée.</p>
  </div>
</template>

<script>
export default {
  name: 'TableView',
  data() {
    return {
      items: []
    };
  },
  mounted() {
    // appel à l'API pour récupérer les données
    fetch('/api/plans/') // modifie selon ta route exacte
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        return response.json();
      })
      .then(data => {
        this.items = data;
      })
      .catch(error => {
        console.error('Erreur de chargement :', error);
      });
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
th, td {
  padding: 8px;
  text-align: left;
}
</style>
