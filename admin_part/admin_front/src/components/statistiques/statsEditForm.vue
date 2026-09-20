<template>
  <div class="form-container">
    <h2>Modifier une publication</h2>
    <form @submit.prevent="modifPub(modifData.id_stats)">
      <label>Nom :</label>
      <input v-model="modifData.nom_stats" required />

      <label>Type :</label>
      <select v-model="modifData.type_stats" required>
        <option disabled value="">-- Sélectionnez un type --</option>
        <option v-for="t in typeList" :key="t" :value="t">{{ t }}</option>
      </select>

      <label>Statut :</label>
      <select v-model="modifData.statut_stats" required>
        <option disabled value="">-- Sélectionnez un statut --</option>
        <option v-for="s in statutsList" :key="s" :value="s">{{ s }}</option>
      </select>

      <label>Investisseur :</label>
      <input v-model="modifData.invest_stats" />


      <button type="submit">Enregistrer</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import {apiFetch} from '../../utils/api'
export default {
  name:'statEditForm',
  data() {
    return {
      modifData : {
        nom_stats: '',
        type_stats :'',
        statut_stats :'',
        invest_stats: '',
        message: '',
      },
      message : '',
      statutsList: ['Réalisé', 'En Cours', 'En Projet'],
      typeList: ['SRAT', 'ATLAS', 'PSU', 'PUDé', 'SAIC', 'SAC', 'PLOF', 'SNAT'],
      
    };
  },
  props: ["id_stats"],
  watch: {
    id_stats: {
      immediate: true,
      handler(newId) {
        if (newId) this.fetchData(newId);
      }
    }
  },
  
  methods: {
    async fetchData(id) {
      try{
        console.log("ID reçu: ",id);
        const res  = await fetch(`http://localhost:3000/api/statistiques/filter/id_stats/${id}`);
        if (!res.ok) throw new Error("Erreur de chargement");
        const result = await res.json();
        this.modifData = result[0];
        
        console.log("Données reçues: ", result);
        console.log("Type de data: ", typeof result);
      } catch (err) {
        console.error("Erreur lors du chargement des données: ", err);
      }
  } ,
    async modifPub(id) {
      try {
        console.log("ID envoyé: ", id);
        const response = await apiFetch(`/statistiques/${id}`, {
          method: 'PUT',
          
          body: {
            id_stats: id,
            nom_stats: this.modifData.nom_stats,
            type_stats: this.modifData.type_stats,
            statut_stats: this.modifData.statut_stats,
            invest_stats: this.modifData.invest_stats,
            
          },
        });

        
        
          this.message = 'Statistiques mis à jour avec succès !';
          this.modifData.nom_stats = this.modifData.type_stats = this.modifData.statut_stats = this.modifData.invest_stats =  '';
        
        
        
      } catch (err) {
        console.error("Erreur réseau : ", err);
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
form {
  display: flex;
  flex-direction: column;
}
input, select, button {
  margin-bottom: 20px;
}
button{
  margin-top: 20px;
}
input{
  border-radius: 50px;
}
</style>
