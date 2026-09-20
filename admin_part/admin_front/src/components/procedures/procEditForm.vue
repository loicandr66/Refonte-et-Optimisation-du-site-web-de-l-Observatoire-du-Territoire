<template>
  <div class="form-container">
    <h2>Modifier une publication</h2>
    <form @submit.prevent="modifPub(modifData.id_stats)">
      <label>Nom :</label>
      <input v-model="modifData.nom_procedure" required />

      <label>Type :</label>
      <select v-model="modifData.type_procedure" required>
        <option disabled value="">-- Sélectionnez un type --</option>
        <option v-for="t in typeList" :key="t" :value="t">{{ t }}</option>
      </select>

      

      <label>Lien_Consultation :</label>
      <input v-model="modifData.consult_procedure" />

      <label>Lien_Téléchargement :</label>
      <input v-model="modifData.down_procedure" />


      <button type="submit">Enregistrer</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import {apiFetch} from '../../utils/api'
export default {
  name:'procEditForm',
  data() {
    return {
      modifData : {
        nom_procedure: '',
        type_rpocedure :'',
        consult_procedure :'',
        down_procedure: '',
        message: '',
      },
      message : '',
      typeList: ['Aménagement du Territoire', 'Domaine', 'Topo'],
      
    };
  },
  props: ["id_procedure"],
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
        const res  = await fetch(`http://localhost:3000/api/procedures/filter/id_stats/${id}`);
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
        const response = await apiFetch(`/procedures/${id}`, {
          method: 'PUT',
          
          body: {
            id_procedure: id,
            nom_procedure: this.modifData.nom_procedure,
            type_procedure: this.modifData.type_procedure,
            consult_procedure: this.modifData.consult_procedure,
            down_procedure: this.modifData.down_procedure,
            
          },
        });

        
        
          this.message = 'Procédure mise à jour avec succès !';
          this.modifData.nom_procedure = this.modifData.type_procedure = this.modifData.consult_procedure = this.modifData.down_procedure =  '';
        
        
        
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
