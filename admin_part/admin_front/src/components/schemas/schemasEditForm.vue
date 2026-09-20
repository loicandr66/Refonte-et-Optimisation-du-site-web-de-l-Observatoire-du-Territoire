<template>
  <div class="form-container">
    <h2>Modifier un schéma régional</h2>
    <form @submit.prevent="modifSchemas(modifData.id_schema)">
      <label>Type :</label>
      <select v-model="modifData.type_schema" required>
        <option disabled value="">-- Sélectionnez un type --</option>
        <option v-for="t in typesList" :key="t" :value="t">{{ t }}</option>
      </select>
      
      <label>Région :</label>
      <input v-model="modifData.schema_region" required />

      <label>District :</label>
      <input v-model="modifData.schema_district" required />

      <label>Commune :</label>
      <input v-model="modifData.schema_commune" required />

      <label>Carte :</label>
      <input v-model="modifData.schema_carte" required />

      <label>Rapport :</label>
      <input v-model="modifData.schema_rapport" required />

      <button type="submit">Enregistrer</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import {apiFetch} from '../../utils/api'
export default {
  name:'schemasEditForm',
  data() {
    return {
      modifData : {
        type_schema: '',
        schema_region: '',
        schema_district: '',
        schema_commune: '',
        schema_carte: '',
        schema_rapport: '',
        schema_message: '',
      
      },
      typesList: ['SAC', 'SAIC', 'SRAT', 'SNAT'],
      message : '',      
      
    };
  },
  props: ["id_schema"],
  watch: {
    id_schema: {
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
        const res  = await fetch(`http://localhost:3000/api/schemas/filter/id_schema/${id}`);
        if (!res.ok) throw new Error("Erreur de chargement");
        const result = await res.json();
        this.modifData = result[0];
        
        console.log("Données reçues: ", result);
        console.log("Type de data: ", typeof result);
      } catch (err) {
        console.error("Erreur lors du chargement des données: ", err);
      }
  } ,
    async modifSchemas(id) {
      try {
        console.log("ID envoyé: ", id);
        const response = await apiFetch(`/schemas/${id}`, {
          method: 'PUT',
          
          body: {
            id_schema: id,
            type_schema: this.modifData.type_schema,
            schema_region: this.modifData.schema_region,
            schema_district: this.modifData.schema_district,
            schema_commune: this.modifData.schema_commune,
            schema_carte: this.modifData.schema_carte,
            schema_rapport: this.modifData.schema_rapport,
          },
        });

        
        
        this.message = 'Schéma régional mis à jour avec succès !';
        this.modifData.schema_region = this.modifData.schema_district = this.modifData.schema_commune = this.modifData.type_schema = this.modifData.schema_carte = this.modifData.schema_rapport = '';
        
        
        
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
