<template>
  <div class="form-container">
    <h2>Ajouter une publication</h2>
    <form @submit.prevent="submitForm">
      <label>Titre :</label>
      <input v-model="titre" required />

      <label>Catégories (séparées par des virgules) :</label>
      <input
        v-model="categories"
        placeholder="ex : actualité, discussion, annonce"
        required
      />

      <label>Contenu :</label>
      <textarea v-model="contenu" rows="10" cols="20" required></textarea>

      <label>Date :</label>
      <input type="date" v-model="publication_date" required />

      <label>Image :</label>
      <input v-model="img" required />

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
      categories: '',
      contenu: '',
      publication_date: '',
      img:'',
      message: ''
    };
  },
  methods: {
    async submitForm() {
      // Transforme la chaîne en tableau : découpe aux virgules, enlève les espaces inutiles
      const categories = this.categories
        .split(',')
        .map(c => c.trim())
        .filter(c => c.length > 0);

      try {
        const res = await fetch('http://localhost:3000/api/publications/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            titre_pub: this.titre,
            contenu_pub: this.contenu,
            date_pub: this.publication_date,
            cat_pub: categories,
            img_pub: this.img
          })
        });
        const data = await res.json();
        if (res.ok) {
          this.message = 'Publication ajoutée avec succès !';
          this.titre = this.categories = this.contenu = this.publication_date = this.img = '';
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
