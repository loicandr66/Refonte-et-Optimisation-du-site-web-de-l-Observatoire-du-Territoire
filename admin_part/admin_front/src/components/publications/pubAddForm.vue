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
import {apiFetch} from '../../utils/api'
export default {
  name: "pubAddForm",
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
        const res = await apiFetch('/publications/add', {
          method: 'POST',
          
          body: {
            titre_pub: this.titre,
            contenu_pub: this.contenu,
            date_pub: this.publication_date,
            cat_pub: categories,
            img_pub: this.img
          }
        });
        
        
        this.message = 'Publication ajoutée avec succès !';
        this.titre = this.categories = this.contenu = this.publication_date = this.img = '';
        
        
        
      } catch (err) {
        this.message = `Erreur réseau : ${err.message}`;
      }
    }
  }
};
</script>

<style scoped>
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
input, textarea, button {
  margin-bottom: 10px;
  padding: 8px;
  font-size: 1em;
}
button{
  margin-top: 20px;
}
input{
  border-radius: 50px;
  padding: 10px;
}
</style>
