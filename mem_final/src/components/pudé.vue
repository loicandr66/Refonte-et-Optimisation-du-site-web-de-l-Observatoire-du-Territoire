<template>
  div class="pude">
    <div class="ban">
        <h5>PUDé (Plan d’Urbanisme Détails)</h5>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
            <ResponsiveNav v-model="selected" :categories="menuData" />
        </div>
        <div class="col-md-9">
         <h3>Liste des PUDé</h3>
         <table class="tableau">
            <thead>
               <tr>
                <th>Région</th>
                <th>District</th>
                <th>Commune</th>
                <th>PUDé</th>
                <th><button href="">Cartographie Thématique & Rapport</button></th>
               </tr>
          </thead>
            <tbody>
                <tr v-for="(plans, i) in plan_urbanisme " :key="i">
                    <td>{{ plan_urbanisme.plan_region }}</td>
                    <td>{{ plan_urbanisme.plan_district }}</td>
                    <td>{{ plan_urbanisme.plan_commune }}</td>
                    <td>{{ plan_urbanisme.plan_pude }}</td>
                    <td>{{ plan_urbanisme.plan_raport}}</td>
                </tr>
            </tbody>
        </table>
        </div>
      </div>
    </div>
</template>

<script>
export default {
name:'pude',
data(){
    return{
        plans:[],
        selected :null,
        menuData:[]
        }
     },
methods:{
    async fecthData(){
        try{
            const response = await fetch("http://localhost:3000/api/plans/plan_type/pude");
            const data=await response.json();
            this.plans=data;
        } catch(error){
            console.error("Erreur de changement:",err);
        }
    },

},
Mounted(){
    this.fecthData();
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