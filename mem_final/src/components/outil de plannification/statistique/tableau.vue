<template>
  <div class="accordion">
    <button class="accordion-header" @click="toggleAccordion">
      {{ title }} ({{ filteredData.length }})
      <span class="accordion-icon">{{ isOpen ? '−' : '+' }}</span>
    </button>

    <transition name="accordion-transition">
      <div class="accordion-content" v-show="isOpen">
        <div class="filters">
          <button
            v-for="status in statuses"
            :key="status"
            :class="{ active: selectedStatus === status }"
            @click="selectedStatus = status"
          >
            {{ status }}
          </button>
        </div>

        <div class="card-view" v-if="isMobile">
          <div v-for="(item, i) in paginatedData" :key="i" class="card-item">
            <div class="card-row">
              <span class="card-label">Localité:</span>
              <span class="card-value">{{ item.nom_stats }}</span>
            </div>
            <div class="card-row">
              <span class="card-label">Financé par:</span>
              <span class="card-value">{{ item.invest_stats }}</span>
            </div>
          </div>
        </div>

        <div class="table-container" v-else>
          <table class="table-view">
            <thead>
              <tr>
                <th>Localité</th>
                <th>Financé par</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in paginatedData" :key="i">
                <td data-label="Localité">{{ item.nom_stats }}</td>
                <td data-label="Financé par">{{ item.invest_stats }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="pagination" v-if="pageCount > 1">
          <button 
            @click="prevPage" 
            :disabled="currentPage === 1"
            aria-label="Page précédente"
          >
            &lt;
          </button>
          <button
            v-for="page in displayedPages"
            :key="page"
            :class="{ active: currentPage === page }"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
          <button 
            @click="nextPage" 
            :disabled="currentPage === pageCount"
            aria-label="Page suivante"
          >
            &gt;
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ResponsiveAccordion",
  props: {
    title: String,
    items: Array,
  },
  data() {
    return {
      isOpen: false,
      selectedStatus: "Tous",
      currentPage: 1,
      itemsPerPage: 5,
      isMobile: false,
      statuses: ["Tous", "Réalisé", "En Cours", "En Projet"],
      maxVisiblePages: 5,
    };
  },
  computed: {
    filteredData() {
      if (this.selectedStatus === "Tous") return this.items;
      return this.items.filter((item) => item.statut_stats === this.selectedStatus);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredData.slice(start, start + this.itemsPerPage);
    },
    pageCount() {
      return Math.ceil(this.filteredData.length / this.itemsPerPage);
    },
    displayedPages() {
      const range = [];
      const half = Math.floor(this.maxVisiblePages / 2);
      let start = Math.max(this.currentPage - half, 1);
      let end = Math.min(start + this.maxVisiblePages - 1, this.pageCount);
      
      if (end - start + 1 < this.maxVisiblePages) {
        start = Math.max(end - this.maxVisiblePages + 1, 1);
      }
      
      for (let i = start; i <= end; i++) {
        range.push(i);
      }
      
      return range;
    }
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
    updateScreenSize() {
      this.isMobile = window.innerWidth < 768;
      // Ajuster le nombre d'éléments par page en fonction de la taille de l'écran
      if (window.innerWidth < 480) {
        this.itemsPerPage = 3;
      } else if (window.innerWidth < 768) {
        this.itemsPerPage = 4;
      } else {
        this.itemsPerPage = 5;
      }
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.pageCount) this.currentPage++;
    },
  },
  mounted() {
    this.updateScreenSize();
    window.addEventListener("resize", this.updateScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateScreenSize);
  },
  watch: {
    selectedStatus() {
      this.currentPage = 1;
    },
    filteredData() {
      if (this.currentPage > this.pageCount && this.pageCount > 0) {
        this.currentPage = this.pageCount;
      }
    }
  }
};
</script>

<style scoped>
/* Styles de base */
.accordion {
  width: 100%;
  max-width: 900px;
  margin: 20px auto;
}

.accordion-header {
  width: 100%;
  border-radius: 25px;
  padding: 12px 20px;
  font-size: clamp(1rem, 2vw, 1.2rem);
  background-color: #eee;
  border: none;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-icon {
  font-size: 1.4em;
  color: #333;
}

.accordion-content {
  border: 1px solid #ccc;
  padding: 15px;
  background: #fafafa;
  margin-top: 10px;
  border-radius: 8px;
}

.accordion-transition-enter-active,
.accordion-transition-leave-active {
  transition: all 0.3s ease;
}

.accordion-transition-enter-from,
.accordion-transition-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Filtres */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.filters button {
  flex: 1 1 auto;
  min-width: 80px;
  padding: 8px 12px;
  background: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  text-align: center;
  transition: all 0.2s;
}

.filters button.active {
  background: #007bff;
  color: white;
}

/* Vue mobile (cartes) */
.card-view {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-item {
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.card-row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 6px;
}

.card-row:last-child {
  margin-bottom: 0;
}

.card-label {
  font-weight: bold;
  color: #444;
  margin-right: 8px;
  flex: 0 0 100px;
}

.card-value {
  flex: 1;
}

/* Vue desktop (tableau) */
.table-container {
  overflow-x: auto;
  margin-bottom: 15px;
}

.table-view {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.table-view th,
.table-view td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.table-view th {
  background-color: #f0f0f0;
  font-weight: bold;
}

/* Pagination */
/* Pagination moderne */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.pagination button {
  min-width: 38px;
  height: 38px;
  border: none;
  background-color: #f8f9fa;
  color: #333;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: all 0.25s ease;
}

.pagination button:hover:not(:disabled) {
  background-color: #007bff;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,123,255,0.3);
}

.pagination button.active {
  background-color: #007bff;
  color: white;
  font-weight: 600;
  box-shadow: 0 3px 6px rgba(0,123,255,0.4);
}

.pagination button:disabled {
  background-color: #e9ecef;
  color: #aaa;
  cursor: not-allowed;
  box-shadow: none;
}

/* Chevron style (< et >) */
.pagination button:first-child,
.pagination button:last-child {
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #ffffff;
  border: 1px solid #ddd;
  color: #007bff;
}

.pagination button:first-child:hover,
.pagination button:last-child:hover {
  background-color: #007bff;
  color: #fff;
}

/* Effet responsive */
@media (max-width: 480px) {
  .pagination button {
    min-width: 32px;
    height: 32px;
    font-size: 0.85rem;
  }
}



/* Responsive adaptations */
@media (max-width: 768px) {
  .accordion-header {
    padding: 10px 15px;
  }
  
  .accordion-content {
    padding: 10px;
  }
  
  .table-view th,
  .table-view td {
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .accordion-header {
    border-radius: 20px;
    padding: 8px 12px;
  }
  
  .filters button {
    min-width: 60px;
    padding: 6px 8px;
    font-size: 0.8rem;
  }
  
  .card-item {
    padding: 10px;
  }
  
  .card-label {
    flex: 0 0 80px;
    font-size: 0.9rem;
  margin-right: 6px;
  margin-bottom: 4px;
  }
  
  .card-value {
    font-size: 0.9rem;
  }
  
  .pagination button {
    min-width: 30px;
    padding: 6px 8px;
    font-size: 0.9rem;
  }
}

/* Pour les très petits écrans */
@media (max-width: 360px) {
  .card-label {
    flex: 0 0 100%;
    margin-bottom: 2px;
  }
  
  .card-value {
    flex: 0 0 100%;
  }
  
  .filters {
    gap: 4px;
  }
  
  .filters button {
    min-width: 50px;
    padding: 4px 6px;
    font-size: 0.75rem;
  }
}

/* Amélioration de l'accessibilité */
button:focus-visible {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* Pour les tableaux en mode mobile */
@media (max-width: 600px) {
  .table-view {
    display: block;
  }
  
  .table-view thead {
    display: none;
  }
  
  .table-view tbody {
    display: block;
  }
  
  .table-view tr {
    display: block;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .table-view td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: right;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #eee;
  }
  
  .table-view td:last-child {
    border-bottom: none;
  }
  
  .table-view td::before {
    content: attr(data-label);
    font-weight: bold;
    margin-right: 10px;
    color: #444;
  }
}
</style>