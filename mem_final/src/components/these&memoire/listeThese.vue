<template>
  <div class="liste" :class="{'active': isActive}">
    <div class="liens" @click="isActive=!isActive">
        <h4 class="nom">jogmgsjdgvmiegvmz</h4>
        <p>Catégories: <a href="#" class="category"></a></p>
        <p class="but"></p>
        <p class="section">Section: </p>
        <p class="auteur">Présenté par </p>
        <p class="promotion">Promotion </p>
        <hr>
    </div>
    
    <div class="info">
        <p>Cliquez ici pour voir le contenu: <a href="#" class="contenu">Consulter le Document</a></p>
        <p>Pour obtenir la version PDF cliquez ici: <a href="#" class="pdf">Télécharger</a></p>
    </div>
  </div>
</template>

<script lang="ts">


export default {
    name: 'listeThese',
    data() {
        return{
            isActive:false,
        }
    },

}
</script>

<style lang="scss">
    .liste{
        width: 99%;
        height: fit-content;
        margin: 10px 10px;
        text-align: left;
        word-wrap: break-word;
        word-break: keep-all;
        margin-bottom: 30px;
        padding: 30px 30px 0px;
        overflow: hidden;
        border: 1px solid rgba(145, 145, 145, 0.349);
        box-shadow: 0 0 10px rgba(0, 0, 0, .2);
        transition: all 0.5s ease-in;

        .liens{       
            position: relative;
            color: #3c3c3c;
            font-size: 16px;
            transition: all .4s linear;
            
            h4{
                
                color: #707070;
                font-weight: bold;
                font-size: 20px;
                border: none;
                cursor: pointer;
            }

            p{
                margin-bottom: 5px;
                text-indent: 50px;
                a{
                    text-decoration: none;
                    color: #7AA95C;

                }
            }
            a{
                text-decoration: none;
                color: #707070;
                font-weight: bold;
                font-size: 20px;
            }
            
        }
        
        .info{
            z-index: 1;
            transform: translateY(-100%);
            height: 0px;
            transition: all .5s linear;
            
            p{
                text-indent: 30px;
                margin-bottom: 4px;

                a{
                    text-decoration: none;
                    color: #7AA95C;
                    font-weight: bold;
                }
            }
        }
    }

    .active{
        .info{
            transform: translateY(0);
            height: 60px;
            transition: all .4s linear;
        }
    }
</style>