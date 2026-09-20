<template>
  <section id="procedures" class="procedures-section">
    <div class="container">
      <div class="section-header">
        <h2>Procédures</h2>
        <p>Consultez les procédures et les documents nécessaires pour vos démarches</p>
      </div>

      <div class="procedures-grid">
        <div
          v-for="(procedure, index) in procedures"
          :key="index"
          class="procedure-card"
        >
          <img :src="procedure.image" :alt="procedure.title" class="procedure-image" />
          <div class="overlay"></div>
          <div class="card-content">
            <h3>{{ procedure.title }}</h3>
            <p>{{ procedure.description }}</p>
            <button class="details-btn">
              <span>Voir détails</span>
              <ArrowRight class="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from "lucide-vue-next";
import image1 from'../../images/body/amenagement.png';
import image2 from'../../images/body/domaine.png';
import image3 from'../../images/body/topo.png';
const procedures = [
  {
    title: "Aménagement Du Territoire",
    description:
      "Standard de services fournis au sein de la Direction Générale de l'Aménagement du Territoire et ses démembrements",
    image:image1,
  },
  {
    title: "Domaine",
    description:
      "Standards fournis au sein du Direction des Domaines et de la Propriété Foncière ainsi que ses démembrements",
    image:image2,
  },
  {
    title: "Topo",
    description:
      "Standards fournis au sein du Direction des Etudes et des Travaux Topographiques ainsi que ses démembrements",
    image:image3 ,
  },
];
</script>

<style lang="scss" scoped>
.procedures-section {
  background-color: #f9fafb;
  padding: 4rem 1rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;

    h2 {
      font-size: 2rem;
      color: #111827;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    p {
      color: #4b5563;
      font-size: 1rem;
    }
  }

  .procedures-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .procedure-card {
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
      height: 24rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: box-shadow 0.3s ease;

      &:hover {
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }

      .procedure-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), transparent);
      }

      .card-content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1.5rem;
        color: #ffffff;

        h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 0.875rem;
          color: #d1d5db;
          margin-bottom: 1rem;
        }

        .details-btn {
          display: flex;
          align-items: center;
          background: none;
          border: none;
          color: #ffffff;
          font-size: 0.875rem;
          cursor: pointer;
          transition: color 0.3s ease;

          &:hover {
            color: #60a5fa; 
          }

          .arrow-icon {
            width: 1rem;
            height: 1rem;
            margin-left: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
