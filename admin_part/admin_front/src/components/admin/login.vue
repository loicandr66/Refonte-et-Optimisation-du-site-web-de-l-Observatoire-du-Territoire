<template>
  <div class="form-container">
    <img src="../icons/OT.png" width="120" height="120" alt="OT">
    <h2>Log In</h2>
    <form @submit.prevent="login">
      <label>Username :</label>
      <input v-model="username" required />

      <label>Password :</label>
      <input v-model="password" type="password" required />

      <button type="submit">LogIn</button>
    </form>

    <p v-if="message" :class="{error: isError}">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name:'login',
  data() {
    return {
      username: "",
      password: "",
      message: ""
    };
  },
  methods: {
    async login() {
      this.message = "";
      try {
        const response = await fetch('http://localhost:3000/api/administrateurs/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          }),
        });

        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("token", data.token);
          const redirect = this.$route.query.redirect || "/admin/plan";
          this.$router.push(redirect);
          console.log("Connexion réussie et jeton obtenu");
        } else {
          this.message = data.error || `Identifications Incorrects`;
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
  width: 300px;
  margin: auto;
  border: 1px solid white;
  padding: 40px;
  border-radius: 40px;
  background-color: white;
  color: black;
  box-shadow: 7px 7px rgba(255, 255, 255, 0.39);
  display: flex;
  flex-direction: column;
  align-items: center;

}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input, select, button {
  margin-bottom: 20px;
}
button{
  margin-top: 20px;
}
input{
  border-radius: 50px;
  height: 30px;
  padding: 10px 15px;
}
</style>
