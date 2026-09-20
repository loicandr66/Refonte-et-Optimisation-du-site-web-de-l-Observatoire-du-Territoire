<template>
  <div class="form-container">
    <h2>Ajouter un plan d'urbanisme</h2>
    <form @submit.prevent="submitForm">
      <label>Région :</label>
      <input v-model="region" required />

      <label>District :</label>
      <input v-model="district" required />

      <label>Commune :</label>
      <input v-model="commune" required />

      <label>PUDE :</label>
      <input v-model="pude" required />

      <label>Type :</label>
      <select v-model="type" required>
        <option disabled value="">-- Sélectionnez un type --</option>
        <option v-for="t in typesList" :key="t" :value="t">{{ t }}</option>
      </select>

      <label>Carte :</label>
      <input v-model="carte" required />

      <label>Rapport :</label>
      <input v-model="rapport" required />

      <button type="submit">Ajouter</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
    name:'test'
}
</script>

<style>

</style>