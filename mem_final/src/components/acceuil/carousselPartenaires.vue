<template>
  <section class="partners-section">
    <div class="container">
      <div class="section-header">
        <h2>Partenaires</h2>
      </div>

      <div class="partners-slider">
        <div class="partners-track">
          
          <div
            v-for="(partner, index) in [...partners, ...partners]"
            :key="index"
            class="partner-card"
          >
            <img :src="partner.img" alt="Partenaire" />
          </div>
        </div>
      </div>

      <div class="text-center">
        <button class="partners-button">
          Voir Tous les Partenaires
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import img1 from'../../images/body/logo1.png';
import img2 from'../../images/body/logo2.png';
import img3 from'../../images/body/logo3.png';
import img4 from'../../images/body/logo4.png';
import img5 from'../../images/body/logo5.png';
import img6 from'../../images/body/logo6.png';
export default {

  name: "PartnersSection",
  data() {
    return {
      partners: [
        { img:img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
       
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.partners-section {
  padding: 4rem 0;
  background: linear-gradient(to bottom, #f0fdf4, #dcfce7);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      color: #111827;
      margin: 0;
    }
  }

 
  .partners-slider {
    width: 100%;
    overflow: hidden;
    position: relative;
    margin-bottom: 2rem;
  }

 
  .partners-track {
    display: flex;
    width: calc(200%); 
    animation: scroll-left 20s linear infinite;
  }

  .partner-card {
    flex: 0 0 auto;
    width: 200px; 
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    box-sizing: border-box;
  }

  .partner-card img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: grayscale(0.2);
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
      transform: scale(1.1);
      filter: grayscale(0);
    }
  }

  
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .text-center {
    text-align: center;
  }

  .partners-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #111827;
    color: #111827;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #111827;
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    .partner-card {
      width: 140px;
      height: 80px;
    }
  }
}
</style>
