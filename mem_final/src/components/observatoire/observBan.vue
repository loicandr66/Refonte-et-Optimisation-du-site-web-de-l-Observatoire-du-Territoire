<template>
  <section class="hero-section">
    <div class="bg-pattern"></div>

    <div class="container">
      <div class="hero-grid">
       
        <div class="hero-image-container">
          <div class="image-wrapper">
            <div class="image-overlay"></div>
            <img
              src="../../images/body/banniere.png"
              alt="Building"
              class="hero-image"
              style="
              width: 90%;
              height:350px;"
            />
    
            <div class="map-badge">
              <MapPin class="map-icon" />
              <div class="map-text">
                <div class="map-title">Siège social</div>
                <div class="map-location">Antananarivo, Madagascar</div>
              </div>
            </div>
          </div>
        </div>


        <div class="hero-content">
          <div class="badge">
            <span>Gouvernance et Transparence</span>
          </div>

          <h1 class="hero-title">L’Observatoire du territoire</h1>

          <p class="hero-text">
            Issu de la fusion de l’Observatoire du Foncier (créé en 2007) et de
            l’Observatoire de l’Aménagement du Territoire (créé en 2012) ; l’OT
            est chargé de produire et de capitaliser les informations, les
            connaissances et les réflexions sur l’Aménagement du territoire,
            l’urbanisme et le Foncier.
          </p>

          <p class="hero-text">
            Ainsi l’OT se doit de mettre à la disposition des décideurs et des
            acteurs des informations territoriales crédibles (collecte,
            capitalisation, traitement, partage et diffusion) sur les dynamiques
            foncières, l’occupation du sol et la lecture du territoire, et se
            doit également d’alimenter la réflexion et le débat sur les grands
            enjeux des politiques nationales.
          </p>

   
          <div class="stats-grid">
            <div class="stat-card">
              <Building2 class="stat-icon" />
              <div class="stat-value">2007</div>
              <div class="stat-label">Création</div>
            </div>
            <div class="stat-card">
              <Users class="stat-icon" />
              <div class="stat-value">50+</div>
              <div class="stat-label">Experts</div>
            </div>
            <div class="stat-card">
              <FolderKanban class="stat-icon" />
              <div class="stat-value">100+</div>
              <div class="stat-label">Études</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Building2, Users, FolderKanban, MapPin } from "lucide-vue-next";
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  background: linear-gradient(135deg, #047857, #059669, #047857);
  color: #fff;
  overflow: hidden;
  padding: 5rem 1rem;

  .bg-pattern {
    position: absolute;
    inset: 0;
    opacity: 0.1;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .hero-grid {
    display: grid;
    gap: 3rem;
    align-items: center;

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      .hero-content {
        order: 1;
        text-align: left;
      }
      .hero-image-container {
        order: 2;
      }
    }

    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
      .hero-image-container {
        order: -1;
      }
      .hero-content {
        order: 0;
        text-align: center;
      }
    }

    .hero-image-container {
      width: 100%;
      display: flex;
      justify-content: center;

      .image-wrapper {
        position: relative;
        width: 100%;
        max-width: 600px;
        .hero-image {
          width: 100%;
          height: auto;
          border-radius: 1rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          object-fit: cover;
        }

    
        .map-badge {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          width: max-content;
          height: fit-content;
          background: #f2f2f2;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

          .map-icon {
            width: 2rem;
            height: 2rem;
            color: #059669; 
            margin-right: 0.5rem;
          }

          .map-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            line-height: 1.2;

            .map-title {
              font-weight: 700;
              color: #111;
              font-size: 0.85rem;
            }

            .map-location {
              font-weight: 400;
              color: #555; 
              font-size: 0.75rem;
            }
          }
        }
      }
    }

    .hero-content {
      .badge {
        display: inline-block;
        padding: 0.5rem 1rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(4px);
        border-radius: 9999px;
        margin-bottom: 1.5rem;

        span {
          font-size: clamp(0.75rem, 2vw, 0.9rem);
        }
      }

      .hero-title {
        font-size: clamp(1.5rem, 4vw, 3rem);
        font-weight: 700;
        margin-bottom: 1.5rem;
      }

      .hero-text {
        font-size: clamp(0.9rem, 2vw, 1.1rem);
        color: #d1fae5;
        line-height: 1.7;
        margin-bottom: 1.5rem;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-top: 2rem;

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.3s ease;

          &:hover {
            transform: translateY(-5px);
          }

          .stat-icon {
            width: 2rem;
            height: 2rem;
            margin: 0 auto 0.5rem auto;
          }

          .stat-value {
            font-size: clamp(1.25rem, 2vw, 1.875rem);
            font-weight: 700;
            margin-bottom: 0.25rem;
          }

          .stat-label {
            font-size: clamp(0.75rem, 1.5vw, 0.9rem);
            color: #d1fae5;
          }
        }
      }
    }
  }
}
</style>
