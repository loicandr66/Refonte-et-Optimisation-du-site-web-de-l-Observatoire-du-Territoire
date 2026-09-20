<template>
  <div class="form-container">
    <h2>Ajouter un Texte de loi</h2>
    <form @submit.prevent="submitForm">
      <label>Titre :</label>
      <input v-model="titre" required />

      <label>Types (séparées par des virgules) :</label>
      <input
        v-model="types"
        placeholder="ex : actualité, discussion, annonce"
        required
      />
     

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
  name: "AddPublication",
  data() {
    return {
      titre: '',
      types: '',
      extrait: '',
      down: '',
      message: ''
    };
  },
  methods: {
    async submitForm() {
      // Transforme la chaîne en tableau : découpe aux virgules, enlève les espaces inutiles
      const categories = this.types
        .split(',')
        .map(c => c.trim())
        .filter(c => c.length > 0);

      try {
        const res = await fetch('http://localhost:3000/api/texte_lois/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            titre_tl : this.titre,
            type_tl : categories,
            extrait_tl : this.extrait,
            down_tl : this.down
          })
        });
        const data = await res.json();
        if (res.ok) {
          this.message = 'Publication ajoutée avec succès !';
          this.titre = this.types = this.extrait = this.down = '';
        } else {
          this.message = `Erreur : ${data.error}`;
        }
      } catch (err) {
        this.message = `Erreur réseau : ${err.message}`;
      }
    }
  }
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: auto;
}
form {
  display: flex;
  flex-direction: column;
}
input, textarea, button {
  margin-bottom: 10px;
  padding: 8px;
  font-size: 1em;
}
</style>
