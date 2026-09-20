<template>
  <entete/>
    <router-view>
    
    </router-view> 
  <foot/>
</template>

<script>
import entete from './components/header.vue'
import foot  from './components/Footer.vue'

  export default {
    name: 'Main',
    components:{
     entete,
     foot
    }
 }
   
</script>

<style lang="scss">
  
</style>

  