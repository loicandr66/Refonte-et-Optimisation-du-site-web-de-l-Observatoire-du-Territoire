<template>
  <div class="form-container">
    <h2>Ajouter un plan d'urbanisme</h2>
    <form @submit.prevent="submitForm">
      <label>Région :</label>
      <input v-model="region" required />

      <label>District :</label>
      <input v-model="district" required />

      <label>Commune :</label>
      <input v-model="commune" required />

      <label>PUDE :</label>
      <input v-model="pude" required />

      <label>Type :</label>
      <select v-model="type" required>
        <option disabled value="">-- Sélectionnez un type --</option>
        <option v-for="t in typesList" :key="t" :value="t">{{ t }}</option>
      </select>

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
      region: '',
      district: '',
      commune: '',
      pude: '',
      carte: '',
      rapport: '',
      type: '',
      message: '',
      typesList: ['PUDé', 'PUDI'],
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:3000/api/plans/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan_region: this.region,
            plan_district: this.district,
            plan_commune: this.commune,
            plan_pude: this.pude,
            plan_carte: this.carte,
            plan_rapport: this.rapport,
            plan_type: this.type,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          this.message = 'Plan urbanisme ajouté avec succès !';
          this.region = this.district = this.commune = this.pude = this.type = this.carte = this.rapport = '';
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
