<template>
  <div class="form-container">
    <h2>Ajouter une Thèse / un Mémoire</h2>
    <form @submit.prevent="submitForm">
      <label>Type :</label>
      <select v-model="type" required>
        <option disabled value="">-- Sélectionnez un type --</option>
        <option v-for="t in typesList" :key="t" :value="t">{{ t }}</option>
      </select>
      
        <label>Titre :</label>
      <input v-model="titre" required />

      <label>But :</label>
      <input v-model="but"/>

      <label>Section :</label>
      <input v-model="section"/>

      <label>Auteur :</label>
      <input v-model="auteur" />

      <label>Promotion :</label>
      <input v-model="promotion" />
      

      <label>Lien d'extrait :</label>
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
  data() {
    return {
      type: '',
      titre: '',
      but: '',
      section: '',
      auteur: '',
      promotion: '',
      extrait: '',
      down: '',
      message: '',
      typesList: ['Thèse', 'Mémoire'],
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:3000/api/these_memoire/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type_tm: this.type,
            nom_tm: this.titre,
            but_tm: this.but,
            section_tm: this.section,
            auteur_tm: this.auteur,
            promotion: this.promotion,
            extrait_tm: this.extrait,
            down_tm: this.down,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          this.message = 'Thèse/Mémoire ajouté avec succès !';
          this.type = this.titre = this.but = this.section = this.auteur = this.promotion = this.extrait = this.down = '';
    
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
