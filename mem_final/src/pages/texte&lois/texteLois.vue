<template>
  <main class="layout">
    <SidebarCategories />
    <liste />
  </main>
</template>

<script setup>
import SidebarCategories from "../../components/textes et lois/sideBareCategorie.vue";
import liste from "../../components/textes et lois/liste.vue";
</script>

<style scoped lang="scss">
.layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  padding: 2rem;
  background: #f8fafc;
  min-height: 100vh;
}
</style>
