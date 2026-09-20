<template>
  <div class="pudi">
     <div class="ban">
        <h5>PUDi(Plan d’Urbanisme Directeur)</h5>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
            <ResponsiveNav v-model="selected" :categories="menuData" />
        </div>
        <div class="col-md-9">
         <TableView
              title="Liste des PUDi"
              :data="tableItems"
              :headers="['Région', 'District', 'Commune', 'Cartographie Thématique & Rapport']"
              :keys="['plan_region', 'plan_district', 'plan_commune', 'plan_carte']"
              linkKey="plan_carte"
           />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveNav from '../../components/outil de plannification/plan urbanisme/ResponsiveNav.vue'
import TableView from '../../components/outil de plannification/plan urbanisme/tableau.vue';
export default {
  name:'pude',
  components :{
    ResponsiveNav,
    TableView
  },
  data() {
    return {
      selected: '',
      tableData: [
        { region: "Analamanga", district: "Antananarivo-Atsimondrano", commune: "Ampitatafika", type: "pude", link: "#" },
        { region: "Vakinankaratra", district: "Antsirabe II", commune: "Manandona", type: "pudi", link: "#" },
        { region: "Alaotra-Mangoro", district: "Ambatondrazaka", commune: "Ambatondrazaka",  type: "snat", link: "#" },
        { region: "Boeny", district: "Mahajanga II", commune: "Belobaka",  type: "srat", link: "#" },

       
      ],
      menuData: [
        {
          label: 'Plan d’Urbanisme',
          items: [
            { label: 'PUDi(Plan d’Urbanisme Directeur)', value: 'pudi', to: '#' },
            { label: 'PUDé(Plan d’Urbanisme de Détails)', value: 'pude', to: '/Plan-Urbanisme/PUDé' }
          ]
        },
        {
          label: 'Schémas d’Aménagement',
          items: [
           { label: 'SNAT(Schémas Nationaux)', value: 'snat', to: '/Schemas-Amenagement/SNAT' },
            { label: 'SRAT (Schéma Régional Aménagement du Territoire)', value: 'srat', to: '/Schemas-Amenagement/SRAT' },
            { label: 'SAC (Schéma Aménagement Communaux))', value: 'sac', to: '/Schemas-Amenagement/SAC' },
            { label: 'SAIC (Schéma Aménagement Inter-Communaux)', value: 'saic', to: '/Schemas-Amenagement/SAIC' },
          ]
        }
      ],
      tableItems:[]
    }
  },
  computed: {
    filteredTableData() {
      if (!this.selected) return this.tableData
      return this.tableData.filter(row => row.type === this.selected)
    }
  },

  methods: {
    async fetchData(){
      try{
        const res = await fetch("http://localhost:3000/api/plans/filter/plan_type/PUDI");
        const list = await res.json();
        this.tableItems = list;
      }
      catch (err) {
        console.error("Erreur de chargement: ", err)
      }
    }
  },
  mounted(){
    this.fetchData();
  }
}
</script>

<style lang="scss">
  .pude {
  margin-top: 4vh;

  .ban {
    display: flex;
    width: 100%;
    height: 250px;
    background-color: #333;
    color: white;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
    margin-bottom: 70px;

    h5 {
      font-size: 25px;
      font-weight: bold;
      display: inline-block;
    }
  }

  /*Ajout pour corriger l’affichage du menu sur mobile */
  .container-fluid {
    padding: 0 15px;

    .row {
      display: flex;
      flex-wrap: wrap;
    }

    .col-md-3 {
      /* Sur mobile : menu horizontal */
      @media (max-width: 768px) {
        width: 100%;
        order: 1;
        margin-bottom: 20px;

        .responsive-nav-container {
          overflow-x: auto;
          display: flex;
          padding: 10px 0;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .nav-content {
          display: flex !important;
          gap: 10px;
        }

        .nav-section {
          flex: 0 0 auto;
          min-width: 160px;
        }
      }
    }

    .col-md-9 {
      @media (max-width: 768px) {
        width: 100%;
        order: 2;
      }
    }
  }
}


</style>
