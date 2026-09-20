<script>
import sideBar from './components/sideBar.vue'
export default {
  name: 'Main',
  components: {
    sideBar
  },
  computed:{
    isAuthenticated(){
      return !!localStorage.getItem("token");
    }
  },
  watch:{
    $route(){
      this.$forceUpdate();
    }
  }
}
</script>

<template>
  <sideBar v-if="isAuthenticated"/>
  <RouterView/>  
   
</template>

<style scoped>

</style>
