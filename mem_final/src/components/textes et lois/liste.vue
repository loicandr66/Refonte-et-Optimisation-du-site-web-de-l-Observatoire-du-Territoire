<template>
  <div class="document-list">
    <Card
      v-for="doc in documents"
      :key="doc.id"
      :document="doc"
    />
  </div>
</template>

<script>
import { documents } from "./data/document.js";
import Card from "./Card.vue"; 

export default {
  name: "DocumentList",
  components: {
    Card
  },
  data() {
    return {
      documents
    };
  }
};
</script>

<style scoped>
.document-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
