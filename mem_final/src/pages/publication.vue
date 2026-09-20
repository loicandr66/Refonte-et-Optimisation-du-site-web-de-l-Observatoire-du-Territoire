<template>
  <div class="publication">
    <div class="bannierre">
       <h4>PUBLICATIONS<br>Articles sur les Actualités</h4>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-3" id="left">
          <h4 class="ttle">Catégories</h4>
          <div class="divider"></div>
          <ul class="liste-liens">
            <li><a href="#">Appel d'offres</a></li>
            <li><a href="#">Economiques</a></li>
            <li><a href="#">Gestion foncière décentralisée</a></li>
            <li><a href="#">Gouvernance</a></li>
            <li><a href="#">Institutionnel</a></li>
            <li><a href="#">Juridique</a></li>
            <li><a href="#">Mise en débat</a></li>
            <li><a href="#">Services Fonciers</a></li>
            <li><a href="#">Social</a></li>
          </ul>
        </div>
        <div class="col-sm-9">
          <pubcell
          v-for="item in dataPub"
          :key="item.id_pub"
          :item="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pubcell from '../components/publication/pubCell.vue'
import { ref, onMounted } from "vue";
const dataPub = ref([]);
export default {
  name: 'publication',
  components: { pubcell },
  setup(){
    
    async function loadingData () {
        try {
          const res = await fetch("http://localhost:3000/api/publications");
          const data = await res.json();
          dataPub.value = data; 
        
          console.log("Données affichées: ", dataPub);
          console.log("Data données", dataPub.value);
          
        } catch (err) {
          console.error("Erreur de chargement :", err);
        }
      };
    onMounted( async () =>{
      
      

      loadingData();
      
    })
    return { dataPub }
  },
}
</script>

<style scoped>
  .bannierre{
    text-align: center;
    height: 250px;
    background-color: #333;
    color: white;
    padding: 80px 20px;
  
  }
 .container{
  margin-top: 50px;
  margin-bottom:50px;

 }
 #left{
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius:8px;
    background: white; 
  }
  .divider{
    width: 25%;
    border:1px solid black;
    margin: auto;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .ttle{
    text-align:center;
    margin-bottom: 10px; 
    color: #b22222;
     font-size: 1.2rem;
  } 
    
  
  ul{
    padding: 20px;
    width: 80%;
    margin: auto;
   
  }
  ul li{
    list-style:none;
    
    width: 100%;
    padding-left: 20px;
   
  }
  ul li a{
    display: block; 
    padding: 8px 15px;
    color: #333;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.2s;
    
  }
  a:active{
    background:#b22222;
  }
</style>