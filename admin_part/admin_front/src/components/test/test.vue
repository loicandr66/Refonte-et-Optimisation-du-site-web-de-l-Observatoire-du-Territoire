<template>
  <div class="form-container">
    <h2>LogIn</h2>
    <form @submit.prevent="submitForm">
      <label>Username :</label>
      <input v-model="username" type="text" required />

      <label>Password :</label>
      <input v-model="password" type="password" required />

      <label>Confirm Password :</label>
      <input v-model="confirm" type="password" required />

      <label>Email :</label>
      <input v-model="email" type="text" required />

      <button type="submit">Submit</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
    name: 'test',
    data(){
        return {
            username:"",
            password:"",
            confirm:"",
            email:"",
            message:"",
        }
    },
    methods:{
        async submitForm(){
            this.message = "";
            try{
                const req = await fetch('http://localhost:3000/api/administrateurs/add' ,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: this.username,
                        email: this.email,      
                        password: this.password,                  
                    }),

                });
                const res = await req.json();
                console.log(res);
                if (req.ok){
                    this.message = 'Compte Créé';
                    this.username = this.password = this.confirm = this.email = "";
                } else {
                    this.message = `Erreur : ${res.error}`;
                }
            } catch(err) {
                this.message = `Erreur détecté: ${err.message}`;
            }
        }
    }
}
</script>

<style>

</style>