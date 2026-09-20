<template>
  <div class="snat">
    <div class="ban">
        <h5>SNAT(Schémas Nationaux)</h5>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
        <ResponsiveNav v-model="selected" :categories="menuData" />
      </div>
      <div class="col-md-9">
        <div class="table-container">
          <h3>Liste des documents SNAT</h3>
          <div class="search">
            <h5>Recherche</h5>
            <input type="text" placeholder="Nom Document">
            <button class="bouton">Search</button>
          </div>
          <table v-if="pagedData.length > 0">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Afficher contenu</th>
                <th>Télécharger PDF</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in pagedData" :key="index">
                <td data-label="Nom">{{ row.nom }}</td>
                <td data-label="Afficher contenu" v-if="row.afficherContenu">
                  <a
                    :href="row.afficherContenu"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Consulter</a
                  >
                </td>
                <td data-label="Afficher contenu" v-else>—</td>
                <td data-label="Télécharger PDF" v-if="row.telechargerPDF">
                  <a
                    :href="row.telechargerPDF"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    >Télécharger</a
                  >
                </td>
                <td data-label="Télécharger PDF" v-else>—</td>
              </tr>
            </tbody>
          </table>

          <div class="pagination" v-if="totalPages > 1">
            <button @click="prevPage" :disabled="currentPage === 1">←</button>
            <span>Page {{ currentPage }} / {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">
              →
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveNav from '../../components/outil de plannification/plan urbanisme/ResponsiveNav.vue';

export default {
  name: 'snat',
  components: {
    ResponsiveNav,
  },
  data() {
    return {
      selected: null,
      searchTerm: '',
      currentPage: 1,
      rowsPerPage: 5,
      menuData: [
        {
          label: 'Plan d’Urbanisme',
          items: [
            {
              label: 'PUDi(Plan d’Urbanisme Directeur)',
              value: 'pudi',
              to: '/Plan-Urbanisme/PUDi',
            },
            {
              label: 'PUDé(Plan d’Urbanisme de Détails)',
              value: 'pude',
              to: '/Plan-Urbanisme/PUDé',
            },
          ],
        },
        {
          label: 'Schémas d’Aménagement',
          items: [
            {
              label: 'SNAT(Schémas Nationaux)',
              value: 'snat',
              to: '/Schemas-Amenagement/SNAT',
            },
            {
              label: 'SRAT (Schéma Régional Aménagement du Territoire)',
              value: 'srat',
              to: '/Schemas-Amenagement/SRAT',
            },
            {
              label: 'SAC (Schéma Aménagement Communaux))',
              value: 'sac',
              to: '/Schemas-Amenagement/SAC',
            },
            {
              label: 'SAIC (Schéma Aménagement Inter-Communaux)',
              value: 'saic',
              to: '/Schemas-Amenagement/SAIC',
            },
          ],
        },
      ],
      tableData: [
        {
          nom: 'Document SNAT 1',
          afficherContenu: 'https://example.com/snats/doc1',
          telechargerPDF: 'https://example.com/snats/doc1.pdf',
        },
        {
          nom: 'Document SNAT 2',
          afficherContenu: 'https://example.com/snats/doc2',
          telechargerPDF: 'https://example.com/snats/doc2.pdf',
        },
        {
          nom: 'Document SNAT 3',
          afficherContenu: 'https://example.com/snats/doc3',
          telechargerPDF: 'https://example.com/snats/doc3.pdf',
        },
         {
          nom: 'Document SNAT 1',
          afficherContenu: 'https://example.com/snats/doc1',
          telechargerPDF: 'https://example.com/snats/doc1.pdf',
        },
        {
          nom: 'Document SNAT 2',
          afficherContenu: 'https://example.com/snats/doc2',
          telechargerPDF: 'https://example.com/snats/doc2.pdf',
        },
        {
          nom: 'Document SNAT 3',
          afficherContenu: 'https://example.com/snats/doc3',
          telechargerPDF: 'https://example.com/snats/doc3.pdf',
        },
         {
          nom: 'Document SNAT 1',
          afficherContenu: 'https://example.com/snats/doc1',
          telechargerPDF: 'https://example.com/snats/doc1.pdf',
        },
        {
          nom: 'Document SNAT 2',
          afficherContenu: 'https://example.com/snats/doc2',
          telechargerPDF: 'https://example.com/snats/doc2.pdf',
        },
        {
          nom: 'Document SNAT 3',
          afficherContenu: 'https://example.com/snats/doc3',
          telechargerPDF: 'https://example.com/snats/doc3.pdf',
        },

      ],
    };
  },
  computed: {
    filteredData() {
      if (!this.searchTerm.trim()) return this.tableData;
      const term = this.searchTerm.toLowerCase();
      return this.tableData.filter((row) => {
        return (
          row.nom.toLowerCase().includes(term) ||
          (row.afficherContenu &&
            row.afficherContenu.toLowerCase().includes(term)) ||
          (row.telechargerPDF && row.telechargerPDF.toLowerCase().includes(term))
        );
      });
    },
    totalPages() {
      return Math.ceil(this.filteredData.length / this.rowsPerPage);
    },
    pagedData() {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      return this.filteredData.slice(start, start + this.rowsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    goToFirstPage() {
      this.currentPage = 1;
    },
  },
  watch: {
    searchTerm() {
      this.currentPage = 1;
    },
  },
};
</script>

<style lang="scss">
.snat{
  margin-bottom: 10vh;
}
 .ban{
            display: flex;
            width: 100%;
            height: 250px;
            background-color:#333;
            color: white;
            align-items: center;
            justify-content: center;
            margin-top: -50px;
            margin-bottom: 70px;


            h5{
                font-size: 25px;
                font-weight:bold;
                display: inline-block;
                
            }
        }
.table-container {
  font-family: 'Segoe UI', sans-serif;
  padding: 20px;
  background: white;
}
.searchBar {
  .search {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
}
.search h5 {
  color: #db2f2f;
  font-size: 16px;
  margin-bottom: 10px;
}
.search input {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 500px;
  border: 1px solid #b5b5b5;
  font-size: 14px;
  padding: 5px 20px;
}
.search button.bouton {
  background-color: #7aa95c;
  color: white;
  border: none;
  border-radius: 100px;
  padding: 8px 15px;
  font-size: 14px;
  width: auto;
}
@media (min-width: 768px) {
  .search {
    flex-direction: row;
    justify-content: space-around;
  }
  .search h5 {
    font-size: 20px;
    margin-bottom: 0;
  }
  .search input {
    width: 65%;
    margin-bottom: 0;
  }
  .search button.bouton {
    width: 10%;
    padding: 5px;
  }
}
h3 {
  text-align: center;
  color: #7aa95c;
  margin-bottom: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
th {
  font-weight: bold;
  color: #007bff;
}
th,
td {
  padding: 20px;
  border-bottom: 2px solid #ddd;
  text-align: left;
  font-size: 14px;
  word-break: break-word;
}
a[target='_blank'] {
  color: #7aa95c;
  text-decoration: none;
  border-radius: 100px;
  border: 1px solid #7aa95c;
  padding: 6px 12px;
  text-align: center;
  min-width: 80px;
}
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.pagination button {
  background-color: #7aa95c;
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
@media (max-width: 768px) {
  a[target='_blank'] {
    width: 100%;
    max-width: 150px;
    margin: 0 auto;
    padding: 8px 0;
    font-size: 14px;
  }
  table,
  thead,
  tbody,
  tr,
  td {
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

