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
import {apiFetch} from '../../utils/api'
export default {
  name:'addSchemaForm',
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
        const response = await apiFetch('/schemas/add', {
          method: 'POST',
          
          body: {
            type_schema: this.type,
            schema_region: this.region,
            schema_district: this.district,
            schema_commune: this.commune,
            schema_carte: this.carte,
            schema_rapport: this.rapport,
            
          },
        });

        
        
          this.message = 'Schéma ajouté avec succès !';
          this.type = this.region = this.district = this.commune = this.carte = this.rapport = '';
        
        
        
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
  border: 1px solid white;
  padding: 40px;
  border-radius: 40px;
  background-color: white;
  color: black;
  box-shadow: 7px 7px rgba(255, 255, 255, 0.39);
}
h2{
  font-weight: bolder;
  
}
form {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}
form, label{
  font-weight: bold;
}
button{
  margin-top: 20px;
}
input{
  border-radius: 50px;
  padding: 10px;
}
input, select, button {
  margin-bottom: 10px;
}
</style>
