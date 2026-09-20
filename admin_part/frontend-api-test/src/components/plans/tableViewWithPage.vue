<template>
  <div>
    <h2>Publications</h2>

    <div v-if="editingPublication">
      <h3>Modifier la publication ID {{ editingPublication.id_pub }}</h3>
      <PublicationForm
        :publication="editingPublication"
        @saved="onSaved"
        @cancel="cancelEdit"
      />
    </div>

    <div v-else>
      
      <table border="1" v-if="publications.length">
        <thead>
          <tr>
            <th>ID</th><th>Titre</th><th>Contenu</th><th>Catégories</th><th>Date</th><th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pub in publications" :key="pub.id_pub">
            <td>{{ pub.id_pub }}</td>
            <td>{{ pub.titre_pub }}</td>
            <td>{{ pub.contenu_pub }}</td>
            <td>{{ pub.cat_pub.join(', ') }}</td>
            <td>{{ pub.date_pub }}</td>
            <td>{{ pub.img_pub }}</td>
            <td>
              <button @click="edit(pub)">Modifier</button>
              <button @click="remove(pub.id_pub)">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else>Pas de publications.</p>
    </div>
  </div>
</template>

<script>
import PublicationForm from './editForm.vue';

export default {
  components: { PublicationForm },
  data() {
    return {
      publications: [],
      editingPublication: null
    };
  },
  methods: {
    async load() {
      const res = await fetch('http://localhost:3000/api/publications');
      this.publications = await res.json();
    },
    edit(pub) {
      this.editingPublication = { ...pub };
    },
    cancelEdit() {
      this.editingPublication = null;
    },
    onSaved(updated) {
      this.editingPublication = null;
      const idx = this.publications.findIndex(p => p.id_pub === updated._pub);
      if (idx !== -1) {
        this.publications.splice(idx, 1, updated);
      }
    },
    async remove(id) {
      if (!confirm('Supprimer ?')) return;
      await fetch(`http://localhost:3000/api/publications/delete/${id}`, { method: 'DELETE' });
      this.load();
    }
  },
  mounted() {
    this.load();
  }
};
</script>
