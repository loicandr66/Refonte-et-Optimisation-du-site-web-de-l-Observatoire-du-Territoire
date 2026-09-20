<template>
  <div class="banniere">
    <div class="ban">
        <h5>Thèses et Mémoires</h5>
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

<style lang="scss">
    .banniere{
        width: 100%;
        height: fit-content;

        .ban{
            width: 100%;
            height: 150px;
            background-color: var(--b-c-gray);
            color: white;
            padding: 50px 70px;
            text-align: center;
            margin-bottom: 70px;

            h5{
                font-size: 24px;
                
            }
        }

        
    }
</style>