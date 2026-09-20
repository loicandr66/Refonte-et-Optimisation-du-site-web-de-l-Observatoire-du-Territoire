<template>
  <div class="form-container">
    <h2>Ajouter une statistique</h2>
    <form @submit.prevent="submitForm">
      
      <label>Nom :</label>
      <input v-model="nom" required />
    
      <label>Type :</label>
      <select v-model="type" required>
        <option disabled value="">-- Sélectionnez un type --</option>
        <option v-for="t in typeList" :key="t" :value="t">{{ t }}</option>
      </select>

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
import {apiFetch} from '../../utils/api'
export default {
  name:'statAddForm',
  data() {
    return {
      nom: '',
      type :'',
      statut :'',
      invest: '',
      message: '',
      statutsList: ['Réalisé', 'En Cours', 'En Projet'],
      typeList: ['SRAT', 'ATLAS', 'PSU', 'PUDé', 'SAIC', 'SAC', 'PLOF', 'SNAT'],
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await apiFetch('/statistiques/add', {
          method: 'POST',
          
          body: {
            nom_stats : this.nom,
            type_stats : this.type,
            statut_stats : this.statut,
            invest_stats : this.invest
            
          },
        });

        
        
          this.message = 'Statistique ajouté avec succès !';
          this.type = this.nom = this.statut = this.invest = '';
        
        
        
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
  box-shadow: 7px 7px rgba(255, 255, 255, 0.233);
}

form {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}

form, label{
  font-weight: bold;
}

input, select, button {
  margin-bottom: 10px;
}
button{
  margin-top: 20px;
}
input{
  border-radius: 50px;
  padding: 10px;
}
</style>
