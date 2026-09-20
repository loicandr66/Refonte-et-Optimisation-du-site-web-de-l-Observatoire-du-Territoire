<template>
  <div class="form-container">
    <h2>Ajouter une procédure</h2>
    <form @submit.prevent="submitForm">
      
      <label>Nom :</label>
      <input v-model="nom" required />

      <label>Type :</label>
        <select v-model="type" required>
            <option disabled value="">-- Sélectionnez un type --</option>
            <option v-for="t in typesList" :key="t" :value="t">{{ t }}</option>
        </select>
      
      <label>Lien de l'extrait :</label>
      <input v-model="extrait" required />

      <label>Lien de téléchargement :</label>
      <input v-model="down" required />


      <button type="submit">Ajouter</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name:'addProcForm',
  data() {
    return {
      nom: '',
      type: '',
      extrait: '',
      down: '',
      message: '',
      typesList: ['Aménagement du Territoire', 'Domaine', 'Topo'],
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:3000/api/procedures/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nom_procedure : this.nom,
            type_procedure : this.type,
            consult_procedure : this.extrait,
            down_procedure : this.down
            
          }),
        });

        const data = await response.json();
        if (response.ok) {
          this.message = 'Procédure ajouté avec succès !';
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
  margin-top: 40px;
}
form, label{
  font-weight: bold;
}
input{
  border-radius: 50px;
  padding: 10px;
}
input, select, button {
  margin-bottom: 10px;
}
</style>
