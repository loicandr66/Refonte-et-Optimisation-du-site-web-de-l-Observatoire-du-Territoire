<template>
    <div class="domaine">
        <banniere/>
        
        <div class="detail">
            
            <div class="part" :class="{'deroule':deroule}" @click="deroule=!deroule" id="nav">
                <div class="titre">
                    <h5>Catégories</h5>
                </div>
                <hr>
                <div class="liens">
                    <ul>
                        <li><RouterLink to="/Procédures/Aménagement">Aménagemetn du Territoire</RouterLink></li>
                        <li class="active"><a href="#">Domaine</a></li>
                        <li><RouterLink to="/Procédures/Topo">Topo</RouterLink></li>
                    </ul>
                </div>
            </div>
            
            <div class="part" id="contenu">
                <div class="intro">
                    <h4>Domaine</h4>
                    <p>Standard des services fournis au sein de la Direction des Domaines et de la Propriété Foncière ainsi que ses démembrements</p>
                </div>
                <div class="liste">
                    <liste
                    v-for="item in dataProc"
                    :key="item.id_procedure"
                    :item="item"
                    />
                </div>
            </div>
            
            
        </div>
    </div>
</template>

<script>
import banniere from '../../components/procedure/banniere.vue'
import liste from '../../components/procedure/liste.vue'
import { ref, onMounted } from "vue";
const dataProc = ref([])
export default {
    name: 'Domaine',
    components: {
        banniere,
        liste
    },
    data(){
        return{
            deroule:false,
        }
    },
    setup(){
    
    async function loadingData () {
        try {
          const res = await fetch("http://localhost:3000/api/procedures/filter/type_procedure/Domaine");
          const data = await res.json();
          dataProc.value = data; 
        
          console.log("Données affichées: ", data);
          console.log("Data données", dataProc.value);
          
        } catch (err) {
          console.error("Erreur de chargement :", err);
        }
      };
    onMounted( async () =>{
      
      

      loadingData();
      
    })
    return { dataProc }
  },
}
</script>

<style lang="scss">
    .domaine{
        width: 100%;
        height: fit-content;

        .detail{
            width: 100%;
            padding: 30px;
            height: fit-content;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 50px;

            .part{
                margin: 20px;
                padding: 20px;
                text-align: center;
            }
            
            #nav{
                 padding: 20px; 
                background: white; 
                border-radius: 8px; 
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                height:max-content;
                .titre{
                    color: var(--vt-c-scarlet);

                    h5{
                        font-size: 25px;
                    }
                }

                hr{
                    width: 45%;
                    margin: 30px auto;
                }
                .liens{
                    width: 100%;
                    ul{
                        list-style: none;
                        
                        li{
                            width: 100%;
                            margin: 20px 0px;
                            padding: 15px;

                            a{
                                text-decoration: none;
                                color: black;
                                font-weight: 400;
                            }
                        }
                        
                        li:hover, .active{
                            border-radius: 5px;
                
                            background-color: var(--clr-rouge);
                            a{
                                color: white;
                            }
                        }
                    }
                }
            }

            #contenu{
                width: 73%;
                .intro{
                    width:100%;
                    padding: 20px;

                    h4{
                        margin-bottom: 30px;
                        color: #7AA95C;
                    }

                    p{
                        font-size: 14px;
                    }
                }
            }
        }
    }

    @media screen and (max-width:1000px) {
        .domaine{
            .detail{
                display: block;
                justify-content: center;

                #nav{
                    width: 90%;
                    margin: auto;
                    height: 80px;
                    overflow: hidden;
                    transition: all .3s linear;

                    h5{
                        cursor: pointer;
                    }                    
                }

                #nav.deroule{
                    height: 350px;
                }

                #contenu{
                    width: 80%;
                    margin: 50px auto;
                }
            }
        }
    }
</style>