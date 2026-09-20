<template>
  <div class="form-container">
    <h2>Ajouter une statistique</h2>
    <form @submit.prevent="submitForm">
      
      <label>Nom :</label>
      <input v-model="nom" required />
    
      <label>Type :</label>
      <input v-model="type" required />

      <label>Statut :</label>
        <select v-model="statut" required>
            <option disabled value="">-- Sélectionnez un statut --</option>
            <option v-for="t in statutsList" :key="t" :value="t">{{ t }}</option>
        </select>
      
      <label>Investisseur :</label>
      <input v-model="invest" />



      <button type="submit">Ajouter</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nom: '',
      type :'',
      statut :'',
      invest: '',
      message: '',
      statutsList: ['Réalisé', 'En Cours', 'En Projet'],
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:3000/api/statistiques/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nom_stats : this.nom,
            type_stats : this.type,
            statut_stats : this.statut,
            invest_stats : this.invest
            
          }),
        });

        const data = await response.json();
        if (response.ok) {
          this.message = 'Statistique ajouté avec succès !';
          this.type = this.nom = this.statut = this.invest = '';
        } else {
          this.message = `Erreur : ${data.error}`;
        }
      } catch (error) {
        this.message = `Erreur réseau : ${error.message}`;
      }
    },
  },
};
</script>

<style>
.form-container {
  max-width: 400px;
  margin: auto;
}
form {
  display: flex;
  flex-direction: column;
}
input, select, button {
  margin-bottom: 10px;
}
</style>
