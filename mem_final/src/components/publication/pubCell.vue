<template>
  <div class="pubcell">
    <div class="titre">
        <div class="image">
            <img src="../icons/Mission icon1.jpg" alt="" class="img_couverture">
        </div>
        <div class="information">
            <h4 class="nom">{{ item.titre_pub}}</h4>
            <p class="date">Publié le: {{ item.date_pub }}</p>
            <p class="categorie">Catégorie: {{ item.cat_pub }}</p>
        </div>
    </div>
    <div class="apperçu">
        <p>{{item.contenu_pub}}</p>
        <button><a href="#">Lire la Suite</a></button>
    </div>
  </div>
</template>

<script lang="ts">


export default {
    name: 'pubCell',
    props:{
        key: String,
        item: Array,
    }

}
</script>

<style lang="scss">    
    .pubcell{
        height: fit-content;
        border: 1px solid rgb(226, 226, 226);
        padding: 30px;
        margin: 20px;
        width:100%;

        .titre{
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            .image{
                width: 33%;
                height: auto;

                .img_couverture{
                    width: 100%;
                    height: auto;
                }
            }

            .information{
                width: 60%;

                .nom{
                    width: 100%;
                    word-wrap: break-word;
                    word-break: keep-all;
                }
            }
        }

        .apperçu{
            margin-top: 20px;
            p{
                text-align: justify;
            }

            button{
                padding: 10px;
                border: none;
                background-color: #7AA95C;
                box-shadow: #cfcfcf 2px 2px;

                a{
                    text-decoration: none;
                    color: white;
                    font-size: 14px;
                }
            }
        }
    }
</style>