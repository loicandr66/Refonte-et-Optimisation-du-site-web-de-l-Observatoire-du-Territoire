<!-- <template>
  <div class="sac">
     <div class="ban">
        <h5>SAC (Schéma Aménagement Communaux)</h5>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
            <ResponsiveNav v-model="selected" :categories="menuData" />
        </div>
        <div class="col-md-9">
         <TableView
              title="Liste des SAC"
              :data="tableData"
              :headers="['Région', 'District', 'Commune', 'Cartographie Thématique & Rapport']"
              :keys="['region', 'district', 'commune',  'link']"
              linkKey="link"
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
            { label: 'PUDi(Plan d’Urbanisme Directeur)', value: 'pudi', to: '/Plan-Urbanisme/PUDi' },
            { label: 'PUDé(Plan d’Urbanisme de Détails)', value: 'pude', to: '/Plan-Urbanisme/PUDé' }
          ]
        },
        {
          label: 'Schémas d’Aménagement',
          items: [
            { label: 'SNAT(Schémas Nationaux)', value: 'snat', to: '/Schemas-Amenagement/SNAT' },
            { label: 'SRAT (Schéma Régional Aménagement du Territoire)', value: 'srat', to: '/Schemas-Amenagement/SRAT' },
            { label: 'SAC (Schéma Aménagement Communaux))', value: 'sac', to: '#' },
            { label: 'SAIC (Schéma Aménagement Inter-Communaux)', value: 'saic', to: '/Schemas-Amenagement/SAIC' },
          ]
        }
      ]
    }
  },
  computed: {
    filteredTableData() {
      if (!this.selected) return this.tableData
      return this.tableData.filter(row => row.type === this.selected)
    }
  }
}
</script>

<style lang="scss">
  .sac{
    margin-top: 5vh;
    margin-bottom: 10vh;
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

  // Tablettes (largeur ≤ 992px)
  @media (max-width: 992px) {
    height: 200px;
    margin-top: -30px;
    margin-bottom: 50px;

    h5 {
      font-size: 20px;
    }
  }

  // Mobiles (largeur ≤ 576px)
  @media (max-width: 576px) {
    height: 150px;
    margin-top: -20px;
    margin-bottom: 40px;

    h5 {
      font-size: 16px;
      padding: 0 10px; // ajout petit padding pour éviter que le texte touche les bords
      text-align: center; // centrer le texte si besoin
    }
  }
}

}

</style> -->

<template>
  <div class="sac">
    <div class="ban">
      <h5>SAC (Schéma Aménagement Communaux)</h5>
    </div>
    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar : visible uniquement desktop (≥768px) -->
        <div class="col-md-3 d-none d-md-block">
          <ResponsiveNav v-model="selected" :categories="menuData" />
        </div>

        <!-- Contenu principal : prend toute la largeur en mobile -->
        <div class="col-md-9 col-12">
          <TableView
            title="Liste des SAC"
            :data="tableItems"
            :headers="['Région', 'District', 'Commune', 'Cartographie Thématique & Rapport']"
            :keys="['schema_region', 'schema_district', 'schema_commune', 'schema_carte']"
            linkKey="schema_carte"
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
  name: 'pude',
  components: {
    ResponsiveNav,
    TableView
  },
  data() {
    return {
      selected: '',
      tableData: [
        { region: "Analamanga", district: "Antananarivo-Atsimondrano", commune: "Ampitatafika", type: "pude", link: "#" },
        { region: "Vakinankaratra", district: "Antsirabe II", commune: "Manandona", type: "pudi", link: "#" },
        { region: "Alaotra-Mangoro", district: "Ambatondrazaka", commune: "Ambatondrazaka", type: "snat", link: "#" },
        { region: "Boeny", district: "Mahajanga II", commune: "Belobaka", type: "srat", link: "#" },
      ],

      menuData: [
        {
          label: 'Plan d’Urbanisme',
          items: [
            { label: 'PUDi(Plan d’Urbanisme Directeur)', value: 'pudi', to: '/Plan-Urbanisme/PUDi' },
            { label: 'PUDé(Plan d’Urbanisme de Détails)', value: 'pude', to: '/Plan-Urbanisme/PUDé' }
          ]
        },
        {
          label: 'Schémas d’Aménagement',
          items: [
            { label: 'SNAT(Schémas Nationaux)', value: 'snat', to: '/Schemas-Amenagement/SNAT' },
            { label: 'SRAT (Schéma Régional Aménagement du Territoire)', value: 'srat', to: '/Schemas-Amenagement/SRAT' },
            { label: 'SAC (Schéma Aménagement Communaux))', value: 'sac', to: '#' },
            { label: 'SAIC (Schéma Aménagement Inter-Communaux)', value: 'saic', to: '/Schemas-Amenagement/SAIC' },
          ]
        }
      ],

      tableItems:[],
    }
  },
  computed: {
    filteredTableData() {
      if (!this.selected) return this.tableData
      return this.tableData.filter(row => row.type === this.selected)
    }
  },
  methods:{
    async fetchData(){
      try{
        const res = await fetch("http://localhost:3000/api/schemas/filter/type_schema/SAC");
        const list = await res.json();
        this.tableItems = list;
      } catch (err) {
        console.error("Erreur de chargement: ", err.message)
      }
    }
  },
  async mounted(){
    this.fetchData();
  }
}
</script>

<style lang="scss">
.sac {
  margin-top: 5vh;
  margin-bottom: 10vh;

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

    // Tablettes (largeur ≤ 992px)
    @media (max-width: 992px) {
      height: 200px;
      margin-top: -30px;
      margin-bottom: 50px;

      h5 {
        font-size: 20px;
      }
    }

    // Mobiles (largeur ≤ 576px)
    @media (max-width: 576px) {
      height: 150px;
      margin-top: -20px;
      margin-bottom: 40px;

      h5 {
        font-size: 16px;
        padding: 0 10px;
        text-align: center;
      }
    }
  }
}

/* Masquer la sidebar col-md-3 en mobile/tablette */
@media (max-width: 768px) {
  .col-md-3 {
    display: none !important;
  }
  .col-md-9 {
    width: 100% !important;
  }
}
</style>

