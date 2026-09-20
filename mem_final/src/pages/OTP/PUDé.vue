<template>
  <div class="pude">
    <div class="ban">
        <h5>PUDé (Plan d’Urbanisme Détails)</h5>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
            <ResponsiveNav v-model="selected" :categories="menuData" />
        </div>
        <div class="col-md-9">
         <TableView
              title="Liste des PUDé"
              :data="tableItems"
              :headers="['Région', 'District', 'Commune', 'PUDé', 'Cartographie Thématique & Rapport']"
              :keys="['plan_region', 'plan_district', 'plan_commune', 'plan_pude', 'plan_carte']"
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
        { region: "Analamanga", district: "Antananarivo-Atsimondrano", commune: "Ampitatafika", pude: "PUDé 1", type: "pude", link: "#"},
        { region: "Vakinankaratra", district: "Antsirabe II", commune: "Manandona", pude: "PUDi 2", type: "pudi", link: "#"},
        { region: "Alaotra-Mangoro", district: "Ambatondrazaka", commune: "Ambatondrazaka", pude: "SNAT 3", type: "snat", link: "#"},
        { region: "Boeny", district: "Mahajanga II", commune: "Belobaka", pude: "SRAT 4", type: "srat", link: "#"},

       
      ],
      tableItems: [],
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
  },
  methods: {
    async fetchData(){
      try{
        const res = await fetch("http://localhost:3000/api/plans/filter/plan_type/PUDé");
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
  .pude{
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
    .col-md-9{
       .search{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 29px;

        h5{
          color: #DB2F2F;
          font-size: 20px;
        }
        
        input{
          width: 65%;
          border-radius: 500px;
          border: 1px solid #B5B5B5;
          font-size: 14px;
          padding: 5px 20px;
        }

        .bouton{
          background-color: #7AA95C;
          color: white;
          border: none;
          border-radius: 100px;
          padding: 5px;
          font-size: 14px;
          width: 10%;
        }
        
      }
    }
}

</style>
