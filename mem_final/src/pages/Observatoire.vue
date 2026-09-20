<template>
  <div class="observatoire">
    <section class="banniere">
       <observBan/>
      </section>

      <section class="body">
      <observOutil/>
      </section>

      <section class="missions">
        <missions/>
      </section>
  </div>
</template>

<script>
import observBan from '../components/observatoire/observBan.vue';
import observOutil from '../components/observatoire/observOutil.vue'
import missions from '../components/observatoire/missions.vue';
export default {
  name: 'Observatoire',
components: 
{observBan,observOutil,missions}
}
</script>

<style lang="scss">
.observatoire{
    .banniere{
        margin-bottom: 50px;
    }
    .body{
        margin-bottom: 50px;
    }
    .missions{
        margin-bottom: 50px;
    }
  }
  
</style>
