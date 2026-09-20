<template>
  <div class="saic">
     <div class="ban">
        <h5>SAIC (Schéma Aménagement Inter-Communaux)</h5>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
            <ResponsiveNav v-model="selected" :categories="menuData" />
        </div>
        <div class="col-md-9">
         <TableView
              title="Liste des SAIC"
              :data="tableItems"
              :headers="['Région', 'District', 'Commune', 'Cartographie Thématique & Rapport']"
              :keys="['schema_region', 'schema_district', 'schema_commune',  'schema_carte']"
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
            { label: 'SAC (Schéma Aménagement Communaux))', value: 'sac', to: '/Schemas-Amenagement/SAC' },
            { label: 'SAIC (Schéma Aménagement Inter-Communaux)', value: 'saic', to: '#' },
          ]
        }
      ],
      tableItems: []
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
        const res = await fetch("http://localhost:3000/api/schemas/filter/type_schema/SAIC");
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
  .saic{
    margin-top: 5vh;
    margin-bottom: 10vh;
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
}

</style>
