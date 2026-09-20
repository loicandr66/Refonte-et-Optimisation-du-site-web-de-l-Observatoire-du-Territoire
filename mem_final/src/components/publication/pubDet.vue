<template>
  <div class="pubDet">
    
    <div class="titre">
      
      <div class="img">
        <img src="../icons/Mission icon1.jpg" alt="" class="img_couverture">
      </div>
      
      <div class="info">
        <h6 class="nom">bgkkhzbgkhiksinjdsvkbjklggiigsui bjksvdbkv sdvl vsjfd;c bs;dvjkcs</h6>
        <p class="date">Publié le: </p>
        <p class="categorie">Catégorie: </p>
      </div>

    </div>
    
    <div class="details">
      <p class="inforamtion">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iure nemo qui nesciunt quidem quaerat quibusdam ex eum. Quia amet ipsum deleniti et sed! Magni voluptatibus similique reprehenderit qui quia?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem iure maxime porro provident eaque facere recusandae vel voluptate, adipisci quia voluptatum eveniet asperiores accusamus veritatis optio fugiat commodi numquam.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eligendi vitae tenetur accusantium tempore? Omnis nulla veritatis pariatur inventore a rerum nostrum fugit ex? Error aliquid vel tempore officiis ipsa?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium velit harum maiores enim sunt fugit fuga incidunt alias eos tempore tenetur sit, quidem suscipit nulla natus maxime, iure, iusto pariatur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit adipisci magni fugiat ea dolorem deserunt at recusandae magnam aliquid reiciendis eius culpa, doloremque ut corporis, illo est doloribus cumque quidem.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore molestias soluta rem modi repellat, corrupti perferendis reiciendis quidem veniam laborum qui, dignissimos nisi minus expedita. Id doloremque incidunt quae libero.
      </p>
    </div>

  </div>
</template>

<script lang="ts">
export default {
    name: 'pubDet',
    components:{

    }

}
</script>

<style lang="scss">
  .pubDet{
    width: 100%;
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    word-wrap: break-word;
    word-break: keep-all;

    .titre{
      width: 35%;
      margin: 20px;

      .img{
        width: 100%;
        margin-bottom: 30px;
        img{
          width: 100%;
          height: auto;
        }
      }

      .info{

        
        h6{
          font-size: 30px;
          height: fit-content;
          margin-bottom: 30px;
        }

      }

    }

    .details{
      width: 50%;
      margin: 20px;
      
    }
  }
</style>