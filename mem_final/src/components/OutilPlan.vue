<template>
    <div class="Outils">
        <div class="banniere">
            <p class="titre   text-center text-uppercase">outils de planification territorial </p>
            <p class="desc">Les outils de planification territoriale à Madagascar sont définis par 
                l’article 32 de la Loi 2015-051 du 03 Février 2016 portant Orientation de l’Aménagement du Territoire. Ces outils ont force obligatoire et servent de cadre de référence aux politiques, programmes et projets des ministères et des collectivités territoriales décentralisées.</p>
        </div>
        <div class=" row mainPage ">
            <div class="container-left col-md-7">
              <div class="card" :class="{'open':isOpen}" @click="isOpen=!isOpen" >
                <div class="head" >
                    <p>Politique Nationale de l’Aménagement du Territoire ou PNAT</p>
                </div>
                <div class="body">
                    <p class="desc">
                        La politique nationale d’aménagement du territoire fixe le cadrage général de l’aménagement du territoire national en vue d’optimiser son utilisation et sa mise en valeur pour améliorer les conditions de vie de la population et atteindre le développement à travers des outils et des actions d’aménagement.

                 <br><br>    La politique nationale de l’aménagement du territoire fixe les orientations stratégiques du développement à travers les actions d’aménagement du territoire, ainsi que les axes d’intervention et les programmes s’y rapportant.

                 <br><br>  La politique nationale d’aménagement du territoire favorise la spécialisation et la compétitivité des territoires et veille à leur complémentarité entre eux et entre les zones d’influence aux fins d’harmoniser le développement du territoire national.
                    </p>
                </div>
              </div>
              <div class="card" :class="{'open':isOpen}" @click="isOpen=!isOpen">
                <div class="head">
                    <p>La politique nationale foncière ou LPF</p>
                </div>
                <div class="body">
                    <p class="desc">
                        La politique nationale d’aménagement du territoire fixe le cadrage général de l’aménagement du territoire national en vue d’optimiser son utilisation et sa mise en valeur pour améliorer les conditions de vie de la population et atteindre le développement à travers des outils et des actions d’aménagement.

                    La politique nationale de l’aménagement du territoire fixe les orientations stratégiques du développement à travers les actions d’aménagement du territoire, ainsi que les axes d’intervention et les programmes s’y rapportant.

                    La politique nationale d’aménagement du territoire favorise la spécialisation et la compétitivité des territoires et veille à leur complémentarité entre eux et entre les zones d’influence aux fins d’harmoniser le développement du territoire national.
                    </p>
              </div>
              <div class="card" :class="{'open':isOpen}" @click="isOpen=!isOpen">
                <div class="head">
                    <p>Le schéma provincial d’aménagement du territoire ou SPAT</p>
                </div>
                <div class="body">
                    <p class="desc">
                        La politique nationale d’aménagement du territoire fixe le cadrage général de l’aménagement du territoire national en vue d’optimiser son utilisation et sa mise en valeur pour améliorer les conditions de vie de la population et atteindre le développement à travers des outils et des actions d’aménagement.

                    La politique nationale de l’aménagement du territoire fixe les orientations stratégiques du développement à travers les actions d’aménagement du territoire, ainsi que les axes d’intervention et les programmes s’y rapportant.

                    La politique nationale d’aménagement du territoire favorise la spécialisation et la compétitivité des territoires et veille à leur complémentarité entre eux et entre les zones d’influence aux fins d’harmoniser le développement du territoire national.
                    </p>
              </div>
              </div>
              <div class="card" :class="{'open':isOpen}" @click="isOpen=!isOpen">
                <div class="head">
                    <p>Schéma Régional d’Aménagement du Territoire ou SRAT</p>
                </div>
                <div class="body">
                    <p class="desc">
                        La politique nationale d’aménagement du territoire fixe le cadrage général de l’aménagement du territoire national en vue d’optimiser son utilisation et sa mise en valeur pour améliorer les conditions de vie de la population et atteindre le développement à travers des outils et des actions d’aménagement.

                    La politique nationale de l’aménagement du territoire fixe les orientations stratégiques du développement à travers les actions d’aménagement du territoire, ainsi que les axes d’intervention et les programmes s’y rapportant.

                    La politique nationale d’aménagement du territoire favorise la spécialisation et la compétitivité des territoires et veille à leur complémentarité entre eux et entre les zones d’influence aux fins d’harmoniser le développement du territoire national.
                    </p>
              </div>
              </div>
              <div class="card" :class="{'open':isOpen}" @click="isOpen=!isOpen">
                <div class="head">
                    <p>La politique nationale foncière ou LPF</p>
                </div>
                <div class="body">
                    <p class="desc">
                        La politique nationale d’aménagement du territoire fixe le cadrage général de l’aménagement du territoire national en vue d’optimiser son utilisation et sa mise en valeur pour améliorer les conditions de vie de la population et atteindre le développement à travers des outils et des actions d’aménagement.

                    La politique nationale de l’aménagement du territoire fixe les orientations stratégiques du développement à travers les actions d’aménagement du territoire, ainsi que les axes d’intervention et les programmes s’y rapportant.

                    La politique nationale d’aménagement du territoire favorise la spécialisation et la compétitivité des territoires et veille à leur complémentarité entre eux et entre les zones d’influence aux fins d’harmoniser le développement du territoire national.
                    </p>
              </div>
              </div>
           
              <div class="card" :class="{'open':isOpen}" @click="isOpen=!isOpen">
                <div class="head">
                    <p class="text-center">La politique nationale foncière ou LPF</p>
                </div>
                <div class="body">
                    <p class="desc">
                        La politique nationale d’aménagement du territoire fixe le cadrage général de l’aménagement du territoire national en vue d’optimiser son utilisation et sa mise en valeur pour améliorer les conditions de vie de la population et atteindre le développement à travers des outils et des actions d’aménagement.

                    La politique nationale de l’aménagement du territoire fixe les orientations stratégiques du développement à travers les actions d’aménagement du territoire, ainsi que les axes d’intervention et les programmes s’y rapportant.

                    La politique nationale d’aménagement du territoire favorise la spécialisation et la compétitivité des territoires et veille à leur complémentarité entre eux et entre les zones d’influence aux fins d’harmoniser le développement du territoire national.
                    </p>
                    </div>
                    </div>
                </div>
         </div>
        <div class="container-right col-md-5">
            <nav class="urbanisme">
                <h5 class="text-center">LES PLANS D'URBANISMES</h5>
                <hr>
                <ul>
                    <li><a href="#">PUDi (Plan d’Urbanisme Directeur)</a></li>
                    <li><a href="#">PUDé (Plan d’Urbanisme de Détails)</a></li>
                    <li><a href="#">SSU (Schéma Simplifié d’Urbanisme)</a></li>
                    <li><a href="#">PSU (Plan Simplifié d’Urbanisme)</a></li>
                </ul>
            </nav>
            <br><br><br><br>
            <nav class="amenagement">
                <h5 class="text-center">SCHEMAS D'AMENAGEMENT</h5>
                <hr>
                <ul>
                    <li><a href="#">SNAT (Schémas Nationaux)</a></li>
                    <li><a href="#">SRAT (Schéma Régionaux)</a></li>
                    <li><a href="#">SAIC(Schéma d'Aménagement Inter-Communaux)</a></li>
                    <li><a href="#">SAC (Schémas d’Aménagement Communaux)</a></li>
                </ul>

            </nav>
        </div>
    </div>


   <Footer/>
    </div>
</template>

<script>

  import Footer from './Footer.vue'
    export default {
        name:'Outils',
        components:{
            Footer
        },
      data(){
          return{
              isOpen:false,
          }
      }
  
    }
</script>

<style lang="scss">
   .Outils{

    .banniere{
              width: 100%;
              height: 250px;
              background-color: #1c1a1a;
              margin-top:-16px ;
             
                .titre{
                  color:#FFFFFF;
                  padding-top: 9vh;
                  font-size:x-large; 
              }
              .desc{
                color:#FFFFFF;
                font-size: small;
                text-align:center;
                width:60%;
                margin: auto;
              }
    }
    .mainPage{
        margin-top: 50px;
        padding: 20px 15px;
        .container-left{
           padding-left:5%;
            .card{
               border:none;
                }
                .head{
                    border-radius: 25px;
                    border: 2px solid #00D61D;
                    width:90% ;
                    box-sizing: border-box;
                    }
                    p{
                        text-align: center;
                        margin-top: 5px;
                        box-sizing: border-box;
                        width: fit-content;
                        margin-left:8%;     
                    }
                    :before{
                        content:"+";
                        display:block;
                        position:absolute;
                        left:3%;
                        top:0.5%;
                        font-size: 25px;
                    }
                    
                }
                .body{
                    margin-top: -10px;
                    margin-bottom: 40px;
                    height: 0;
                    overflow-y: hidden;
                    transition: all .4s ease-in-out ;
                    .desc{
                        text-align: justify;
                        width: 90%;
                    }
                }
                 .card.open{
                   
                  .head{
                      margin-bottom: 30px;
                      transition: all .4s linear;
                  }
                  .body{
                      height: max-content;
                      opacity: 1;
                      overflow-y:visible;
                      transition: all .4s linear;
                       .desc{
                        width:78%;
                        padding: 15px;
                        border-radius: 25px;
                        background-color: rgb(212, 212, 34,0.2);
                        color:black;
                       }
                       

                  }
                 
              }
            
            }


        }
        .container-right{
           
            h5{
                color:#A7001E;
            }
            hr{
                width: 50%;
                margin: auto;

            }
            ul{
                text-align: center;
                li{
                list-style-type: none;
                color:black;
                margin-bottom: 5px;
                margin-top: 5px;
                :hover{
                       color:#00D61D;
                       font-size:large;
                }

                a{
                    color:black ;
                    text-decoration: none;

                }
            }
            }
        }









 
//      /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {}

// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {}

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {}

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {}

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {} 
   
</style>
