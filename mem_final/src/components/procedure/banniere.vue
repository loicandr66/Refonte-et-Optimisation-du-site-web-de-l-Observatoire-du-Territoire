<template>
  <div class="banniere">
    <div class="ban">
        <h5>Les Procédures </h5>
    </div>
    <div class="intro">
        <h5>INTRODUCTION</h5>
        <p>Cette rubrique nous renseigne sur les standards des services relatifs aux activités quotidiennes du Ministère en charge de l’Aménagement du Territoire et du Foncier   à Madagascar</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
        name:'banniere',
        components:{

        }

}
</script>

<style lang="scss" >
    .banniere{
        width: 100%;
        height: fit-content;

        .ban{
            width: 100%;
            height: 250px;
            background-color: var(--clr-gris);
            color: white;
            padding: 50px 70px;
            text-align: center;
            margin-bottom: 70px;

            h5{
                font-size: 24px;
                
            }
        }

        .intro{
            margin: 10px 150px;
            text-align: center;
            h5{
                text-align: center;
                font-size: 24px;
                color: var(--vt-c-scarlet);
                margin-bottom: 40px;
            }

        }
    }
</style>