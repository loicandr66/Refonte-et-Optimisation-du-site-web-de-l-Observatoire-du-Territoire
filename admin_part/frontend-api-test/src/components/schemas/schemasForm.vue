<template>
  <div class="form-container">
    <h2>Ajouter un schéma d'aménagement</h2>
    <form @submit.prevent="submitForm">
      <label>Type :</label>
      <select v-model="type" required>
        <option disabled value="">-- Sélectionnez un type --</option>
        <option v-for="t in typesList" :key="t" :value="t">{{ t }}</option>
      </select>
      
      <label>Région :</label>
      <input v-model="region" required />

      <label>District :</label>
      <input v-model="district" required />

      <label>Commune :</label>
      <input v-model="commune" required />

      <label>Carte :</label>
      <input v-model="carte" required />

      <label>Rapport :</label>
      <input v-model="rapport" required />

      <button type="submit">Ajouter</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: '',
      region: '',
      district: '',
      commune: '',
      carte: '',
      rapport: '',
      message: '',
      typesList: ['SAC', 'SAIC', 'SRAT', 'SNAT'],
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:3000/api/schemas/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type_schema: this.type,
            schema_region: this.region,
            schema_district: this.district,
            schema_commune: this.commune,
            schema_carte: this.carte,
            schema_rapport: this.rapport,
            
          }),
        });

        const data = await response.json();
        if (response.ok) {
          this.message = 'Schéma ajouté avec succès !';
          this.type = this.region = this.district = this.commune = this.carte = this.rapport = '';
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
