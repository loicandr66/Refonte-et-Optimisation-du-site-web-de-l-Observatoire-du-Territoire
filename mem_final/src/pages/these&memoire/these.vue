<template>
    <div class="these">
        <banniere/>
        
        <div class="detail">
            
            <div class="part" id="nav">
                <div class="titre">
                    <h5>Catégories</h5>
                </div>
                <hr>
                <div class="liens">
                    <ul>
                        <li class="active"><a href="#">Thèses</a></li>
                        <li><a href="#">Mémoires</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="part" id="contenu">
                <div class="liste">
                    <div class="simple">
                        <listeThese/>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    </div>
</template>

<script>
import banniere from '../../components/these&memoire/banniere.vue'
import listeThese from '../../components/these&memoire/listeThese.vue'

export default {
    name: 'Thèse',
    components: {
        banniere,
        listeThese
    },
    data() {
        return{
            
        }
    },
}
</script>

<style lang="scss">
    .these{
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
                width: 25%;
                border-radius: 20px;
                box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
                height: fit-content;
                padding: 10px 0px;
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
                                font-size: 20px;
                            }
                        }
                        
                        li:hover, .active{
                            border-top-left-radius: 500px;
                            border-bottom-left-radius: 500px;
                            background-color: var(--vt-c-scarlet);
                            
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

                        span{
                            color: #7AA95C;
                        }
                    }
                }
            }
        }
    }
</style>