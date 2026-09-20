<template>
  <div class="form-container">
    <h2>Modifier une publication</h2>
    <form @submit.prevent="modifPub(modifData.id_pub)">
      <label>Titre :</label>
      <input v-model="modifData.titre_pub" required />

      <label>Contenu :</label>
      <textarea v-model="modifData.contenu_pub " rows="10" cols="20" required ></textarea>

      <label>Date :</label>
      <input v-model="modifData.date_pub" type="date" required />

      <label>Categorie :</label>
      <input v-model="modifData.cat_pub" placeholder="ex : actualité, discussion, annonce" />

      <label>Image :</label>
      <input v-model="modifData.img_pub" required />


      <button type="submit">Enregistrer</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import {apiFetch} from '../../utils/api'
export default {
  name:'pubEditForm',
  data() {
    return {
      modifData : {
        titre_pub:"",
        contenu_pub:"",
        date_pub:"",
        cat_pub:"",
        img_pub:""
      },
      message : '',      
      
    };
  },
  props: ["id_pub"],
  watch: {
    id_pub: {
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
        const res  = await fetch(`http://localhost:3000/api/publications/filter/id_pub/${id}`);
        if (!res.ok) throw new Error("Erreur de chargement");
        const result = await res.json();
        this.modifData = result[0];
        
        console.log("Données reçues: ", result);
        console.log("Type de data: ", typeof result);
      } catch (err) {
        console.error("Erreur lors du chargement des données: ", err);
      }
  } ,
    async modifPub(id) {
      try {
        console.log("ID envoyé: ", id);
        const response = await apiFetch(`/publications/${id}`, {
          method: 'PUT',
          
          body: {
            id_pub: id,
            titre_pub: this.modifData.titre_pub,
            contenu_pub: this.modifData.contenu_pub,
            date_pub: this.modifData.date_pub,
            cat_pub: this.modifData.cat_pub,
            img_pub: this.modifData.img_pub,
            
          },
        });

        
        
        this.message = 'Publications mis à jour avec succès !';
        this.modifData.titre_pub = this.modifData.contenu_pub = this.modifData.date_pub = this.modifData.cat_pub = this.modifData.img_pub =  '';
        
        
        
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
