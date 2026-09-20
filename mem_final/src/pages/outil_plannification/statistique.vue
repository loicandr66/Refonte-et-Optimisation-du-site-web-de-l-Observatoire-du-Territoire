<template>
  <div class="stat">
    <div class="banniere">
        <div class="ban">
          <h5>statistiques </h5>
        </div>
    </div>
    <div class="intro">
      <p>Consulter la listes des outils de plannifications élaborer à Madagascar </p>
    </div>
    <Accordion
      v-for="(acc, type_stats) in dataStat"
      :key="type_stats"
      :title="type_stats"
      :items="acc"
    />
  </div>
</template>

<script>
import Accordion from "../../components/outil de plannification/statistique/tableau.vue";
import { accordionsData } from "../../components/outil de plannification/data";
import { ref, onMounted } from "vue";

const dataStat = ref([]);



export default {
  name:'stat',
  components: { Accordion },
  setup(){
    
    async function loadingData () {
        try {
          const res = await fetch("http://localhost:3000/api/statistiques");
          const data = await res.json();
          const groupedData = data.reduce((acc, item) => {
            if(!acc[item.type_stats]){
              acc[item.type_stats] = [];
            }
            acc[item.type_stats].push(item)
            return acc
          }, {});
          dataStat.value = groupedData; 
        
          console.log("Données affichées: ", groupedData);
          console.log("Data données", dataStat.value);
          
        } catch (err) {
          console.error("Erreur de chargement :", err);
        }
      };
    onMounted( async () =>{
      
      

      loadingData();
      
    })
    return { dataStat }
  },
  data() {
    return {
      accordions: accordionsData,
      items: [],
    };
  },
  methods: {
    async fetchData(){
      try {
        const res = await fetch("http://localhost:3000/api/statistiques");
        const data = await res.json();
        const groupedData = data.reduce((acc, item) => {
          if(!acc[item.type_stats]){
            acc[item.type_stats] = [];
          }
          acc[item.type_stats].push(item)
          return acc
        }, {});
        this.items = groupedData; 
        console.log("Données affichées: ", groupedData);
      } catch (err) {
        console.error("Erreur de chargement :", err);
      } 
    }
  },
  
};
</script>

<style lang="scss" scoped>
.stat {
  .banniere{
        width: 100%;
        height: fit-content;

        .ban{
            width: 100%;
            height: 250px;
            background-color:#444444;
            color: white;
            padding: 50px 70px;
            text-align: center;
            margin-bottom: 70px;

            h5{
                font-size: 24px;
                width: fit-content;
                margin: auto;
                
            }
        }
      }
  .intro{
    font-size: large;
    width: 50%;
    margin:auto;
  }

}
@media(max-width:768px){
 .intro{
  display:inline-block;
  width:100%;
  padding: 10px;
  p{
    width:450px ;
    text-align: center; 
    font-size:larger;
  }
  
 }
}
</style>
