<template>
   <div class="acceuil">
     
  <Carousel/>
<section class="services">
   
  <services/>
</section>

<section class="procedures">
  <procedures/>
 
</section>
<section class="partenaires">
  <partenaires  />
</section>
</div>
</template>

<script>
import Carousel from '../components/acceuil/caroussel.vue';
import services from '../components/acceuil/services.vue';
import procedures from '../components/acceuil/procedures.vue';
import partenaires from '../components/acceuil/carousselPartenaires.vue'
export default {
  components: { Carousel,services,procedures,partenaires },
  
}
</script>

<style lang="scss" scoped>
.acceuil{
  .services{
    margin-top: 100px;
  }
  .procedures{
    margin-top: 100px;
  }
  .partenaires{
    margin-top: 100px;
 
  }
}
  

</style>
