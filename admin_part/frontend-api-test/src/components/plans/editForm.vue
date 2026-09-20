<template>
  <div class="form-container">
  <form @submit.prevent="submit">
    <label>Titre :</label>
    <input v-model="form.titre_pub" required />

    <label>Catégories (virgule) :</label>
    <input v-model="categoriesInput" placeholder="a, b, c" />

    <label>Contenu :</label>
    <textarea v-model="form.contenu_pub" rows="10" required></textarea>

    <label>Date :</label>
    <input type="date" v-model="form.date_pub" required />

    <label>Image :</label>
    <input v-model="form.img_pub" required />

    <button type="submit">Enregistrer</button>
    <button @click="$emit('cancel')" type="button">Annuler</button>
  </form>
  </div>
</template>

<script>
export default {
  name: 'PublicationForm',
  props: {
    publication: { type: Object, required: true }
  },
  data() {
    return {
      form: { ...this.publication },
      categoriesInput: this.publication.cat_pub.join(', ')
    };
  },
  methods: {
    async submit() {
      const categories = this.categoriesInput
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);

      const res = await fetch(
        `http://localhost:3000/api/publications/${this.form.id_pub}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            titre_pub: this.form.titre_pub,
            contenu_pub: this.form.contenu_pub,
            date_pub: this.form.date_pub,
            cat_pub : categories,
            img_pub : this.form.img_pub
            
          })
        }
      );
      const updated = await res.json();
      if (res.ok) {
        this.$emit('saved', updated);
      } else {
        console.error('Erreur update:', updated.error);
      }
    }
  }
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
