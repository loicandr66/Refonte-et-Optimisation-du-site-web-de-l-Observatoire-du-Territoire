<template>
  <div class="table-container">
    <h3>{{ title }}</h3>
    <div class="search">
        <h5>Recherche</h5>
        <input type="text" placeholder="Commune/Région/District">
        <button class="bouton">Search</button>
      </div>
    <table v-if="pagedData.length > 0">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in pagedData" :key="index">
          <td v-for="(key, i) in keys" :key="i" :data-label="headers[i]">
            <template v-if="key === linkKey">
              <a :href="row[key]" target="_blank">Consulter</a>
            </template>
            <template v-else>
              {{ row[key] }}
            </template>
            
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination" v-if="totalPages > 1">
      <button @click="prevPage" :disabled="currentPage === 1">←</button>
      <span>Page {{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">→</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  title: { type: String, default: 'Table View' },
  data: { type: Array, required: true },
  headers: { type: Array, required: true }, // ['Région', 'District', ...]
  keys: { type: Array, required: true },    //  ['region', 'district', ...]
  linkKey: { type: String, default: '' },   // clé pour le lien, ex: 'link'
  rowsPerPage: { type: Number, default: 5 },
});

const currentPage = ref(1);

const totalPages = computed(() => {
  return Math.ceil(props.data.length / props.rowsPerPage);
});

const pagedData = computed(() => {
  const start = (currentPage.value - 1) * props.rowsPerPage;
  return props.data.slice(start, start + props.rowsPerPage);
});

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}

watch(() => props.data, () => {
  currentPage.value = 1;
});
</script>

<style lang="scss">
.table-container {
  font-family: 'Segoe UI', sans-serif;
  padding: 20px;
  background: white;
}
.search {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 29px;

  h5 {
    color: #DB2F2F;
    font-size: 20px;
  }

  input {
    width: 65%;
    border-radius: 500px;
    border: 1px solid #B5B5B5;
    font-size: 14px;
    padding: 5px 20px;
  }

  .bouton {
    background-color: #7AA95C;
    color: white;
    border: none;
    border-radius: 100px;
    padding: 5px;
    font-size: 14px;
    width: 10%;
  }

  
  @media (max-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    h5 {
      font-size: 18px;
    }

    input {
      width: 60%;
      font-size: 13px;
      padding: 5px 15px;
    }

    .bouton {
      width: 15%;
      font-size: 13px;
      padding: 5px 8px;
    }
  }


  @media (max-width: 576px) {
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 15px;

    h5 {
      font-size: 16px;
      margin-bottom: 8px;
      text-align: center;
    }

    input {
      width: 100%;
      margin-bottom: 10px;
      font-size: 14px;
      padding: 8px 15px;
    }

    .bouton {
      width: 100%;
      font-size: 14px;
      padding: 8px;
    }
  }
}

h3 {
  text-align: center;
  color: #7AA95C;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
th{
   font-weight:bold;
   color:#007bff;
}
th, td {
  padding: 20px;
  border-bottom: 2px solid #ddd;
  text-align: left;
  font-size: 14px;
  word-break: break-word;
  
}

a[target="_blank"]{
  color:#7AA95C;
  text-decoration: none;
  border-radius:100px;
  border:1px solid #7AA95C;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.pagination button {
  background-color: #7AA95C;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Responsive */
a[target="_blank"] {
  display: inline-block;
  color: #7AA95C;
  text-decoration: none;
  border-radius: 100px;
  border: 1px solid #7AA95C;
  padding: 6px 12px; /* padding cohérent */
  text-align: center;
  min-width: 80px; /* largeur minimale pour éviter que le bouton rapetisse trop */
  
}

@media (max-width: 768px) {
  a[target="_blank"] {
    width: 100%;         /* prend toute la largeur du container */
    max-width: 150px;    /* limite la largeur pour garder un aspect bouton */
    margin: 0 auto;      /* centre horizontalement */
    padding: 8px 0;      /* padding vertical pour l’aspect bouton */
    font-size: 14px;
   
  }
}

@media (max-width: 768px) {
  table, thead, tbody, tr, td {
    display: block;
    width: 100%;
  }

  thead {
    display: none;
  }

  tr {
    margin-bottom: 15px;
    border: 1px solid #ddd;
    padding: 10px;
    background: #fff;
    border-radius: 6px;
  }

  td {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 8px 10px;
    gap: 8px;
    border: none;
    border-bottom: 1px solid #eee;
  }

  td:last-child {
    border-bottom: none;
  }

  td::before {
    content: attr(data-label);
    font-weight: bold;
    color: #007bff;
    min-width: 40%;
    display: inline-block;
  }
}
</style>
