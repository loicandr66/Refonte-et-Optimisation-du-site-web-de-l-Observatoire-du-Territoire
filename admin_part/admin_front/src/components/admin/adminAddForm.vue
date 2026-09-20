<template>
  <div class="form-container">
    <h2>Ajouter un administrateur</h2>
    <form @submit.prevent="submitForm">
      <label>Nom d'utilisateur :</label>
      <input v-model="username" required />

      <label>Email :</label>
      <input v-model="email" type="email" required />

      <label>Mot de passe :</label>
      <input v-model="password" type="password" required />

    
      <button type="submit">Créer</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "AddAdmin",
  data() {
    return {
      username: '',
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    async submitForm() {
      this.message = '';
      try {
        const res = await fetch('http://localhost:3000/api/administrateurs/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password,
            
          })
        });

        const data = await res.json();
        if (res.ok) {
          this.message = `Administrateur créé : ${data.username}`;
          this.username = this.email = this.password = '';
        } else {
          this.message = `Erreur : ${data.error || res.statusText}`;
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
  max-width: 400px;
  margin: auto;
}
form {
  display: flex;
  flex-direction: column;
}
input, button, label {
  margin-bottom: 10px;
}
button {
  padding: 8px;
  font-size: 1em;
}
</style>
