<template>
  <p>rien du tout</p>
</template>

<script>

export default {
  name: 'Main',
  components: {
    
  }
}
</script>
<style>
  p{
    font-size: larger;
  }
  .app-container {
    display: flex;
    flex-direction: row;
    justify-content: center;

  }

  .sidebar {
    width: 200px;           
    position: sticky;       
    top: 0;
    height: 100vh;
  }

  .main-content {  
    flex: 1;
    padding: 20px;
    display: block;
  }

</style>