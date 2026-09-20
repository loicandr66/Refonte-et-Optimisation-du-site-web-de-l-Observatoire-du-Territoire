<template>
  <div class="form-container">
    <h2>Modifier un plan d'urbanisme</h2>
    <form @submit.prevent="modifPlan(modifData.id_plan)">
      <label>Région :</label>
      <input v-model="modifData.plan_region" required />

      <label>District :</label>
      <input v-model="modifData.plan_district" required />

      <label>Commune :</label>
      <input v-model="modifData.plan_commune" required />

      <label>PUDE :</label>
      <input v-model="modifData.plan_pude" />

      <label>Type :</label>
      <select v-model="modifData.plan_type" required>
        <option disabled value="">-- Sélectionnez un type --</option>
        <option v-for="t in typesList" :key="t" :value="t">{{ t }}</option>
      </select>

      <label>Carte :</label>
      <input v-model="modifData.plan_carte" required />

      <label>Rapport :</label>
      <input v-model="modifData.plan_rapport" required />

      <button type="submit">Enregistrer</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name:'planEditForm',
  data() {
    return {
      modifData : {
        id_plan: "",
        plan_region: "",
        plan_district: "",
        plan_commune: "",
        plan_pude: "",
        plan_carte: "",
        plan_rapport: "",
        plan_type: ""
      },
      typesList: ['PUDé', 'PUDI'],
      message : '',      
      
    };
  },
  props: ["id_plan"],
  watch: {
    id_plan: {
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
        const res  = await fetch(`http://localhost:3000/api/plans/filter/id_plan/${id}`);
        if (!res.ok) throw new Error("Erreur de chargement");
        const result = await res.json();
        this.modifData = result[0];
        
        console.log("Données reçues: ", result);
        console.log("Type de data: ", typeof result);
      } catch (err) {
        console.error("Erreur lors du chargement des données: ", err);
      }
  } ,
    async modifPlan(id) {
      try {
        console.log("ID envoyé: ", id);
        const response = await fetch(`http://localhost:3000/api/plans/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_plan: id,
            plan_region: this.modifData.plan_region,
            plan_district: this.modifData.plan_district,
            plan_commune: this.modifData.plan_commune,
            plan_pude: this.modifData.plan_pude,
            plan_carte: this.modifData.plan_carte,
            plan_rapport: this.modifData.plan_rapport,
            plan_type: this.modifData.plan_type,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          this.message = 'Plan urbanisme mis à jour avec succès !';
          this.modifData.plan_region = this.modifData.plan_district = this.modifData.plan_commune = this.modifData.plan_pude = this.modifData.plan_type = this.modifData.plan_carte = this.modifData.plan_rapport = '';
        } else {
          this.message = "Erreur dans la mise à ours des nouvelles données: ", data.error;
        }
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
