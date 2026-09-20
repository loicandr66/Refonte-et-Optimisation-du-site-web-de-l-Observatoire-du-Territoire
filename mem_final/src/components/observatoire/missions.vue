<template>
  <section class="missions-section">
    <div class="container">

      <div class="title-section">
        <h2>Nos Missions</h2>
        <div class="title-underline"></div>
      </div>

      <div class="description">
        <p>
          Le rôle de l'OT consiste à conduire et organiser les informations, les connaissances et les réflexions afin de fournir des outils d'analyse et de décision pour aiguiser la formulation et l'application des politiques et stratégies de développement territorial. En somme, l'analyse de l'OT devrait permettre à la collectivité de suivre et d'évaluer les projets de l'OT de faciliter ses politiques.
        </p>
      </div>

     
      <div class="missions-list">
        <div
          v-for="(mission, index) in missions"
          :key="index"
          class="card mission-card"
        >
          <div class="mission-content">
           
            <div class="mission-number">
              <span>{{ mission.number }}</span>
            </div>

           
            <div class="mission-details">
              <div class="mission-title">
                <div class="mission-icon">
                  <component :is="mission.icon" />
                </div>
                <h3>{{ mission.title }}</h3>
              </div>
              <p class="mission-description">{{ mission.description }}</p>
            </div>

           
            <div class="mission-arrow">
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Database, FileBarChart, FolderKanban, Calculator, Target, ChevronRight } from "lucide-vue-next";

export default {
  name: "MissionsSection",
  components: {
    Database,
    FileBarChart,
    FolderKanban,
    Calculator,
    Target,
    ChevronRight,
  },
  data() {
    return {
      missions: [
        {
          number: "01",
          icon: Database,
          title: "Collecte et Traitement des Données",
          description:
            "La collecte, saisi et traitement  des informations foncières et en matières d’urbanisme aussi bien qualitative que quantitative pour ensuite les analyser et cela d’une manière permanente ou tout au moins régulière dans le temps",
        },
        {
          number: "02",
          icon: FileBarChart,
          title: "Production et Valorisation",
          description:
            "La traduction et valorisation de ces informations afin de les mettre à disposition selon certaines formes de rendu qui soient compréhensibles à chacun, et accessibles à travers un Géoportail",
        },
        {
          number: "03",
          icon: FolderKanban,
          title: "Évaluation des Projets",
          description:
            "L’évaluation des projets en cours, la capitalisation et diffusion des bonnes pratiques afin d’améliorer la méthodologie d’exécution des projets",
        },
        {
          number: "04",
          icon: Calculator,
          title: "Réalisation d'Études Thématiques",
          description:
            "La réalisation des études sur des thématiques bien précises afin d’alimenter une réflexion pour de futures       interventions au sein du Ministère"
        },
        {
          number: "05",
          icon: Target,
          title: "Évaluation d'Impact",
          description:
            "L’évaluation des impacts de la réforme foncière au niveau des différents secteurs ayant un rapport avec le foncier ",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

$emerald: #10b981;
$emerald-dark: #047857;
$red: #ef4444;
$gray-dark: #111827;
$gray-light: #6b7280;
$card-bg: #fff;
$card-border: #e5e7eb;


.missions-section {
  padding: 5rem 0;
  background-color: #fff;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .title-section {
    text-align: center;
    margin-bottom: 4rem;

    h2 {
      font-size: 2.5rem;
      color: $gray-dark;
      margin-bottom: 1rem;
    }

    .title-underline {
      width: 6rem;
      height: 0.25rem;
      background: linear-gradient(to right, $emerald, $red);
      margin: 1.5rem auto 0;
      border-radius: 4px;
    }
  }

 
  .description {
    max-width: 768px;
    margin: 0 auto 4rem;
    text-align: center;

    p {
      color: $gray-light;
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  }


  .missions-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .card {
      background-color: $card-bg;
      border-radius: 1rem;
      border: 1px solid $card-border;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      transition: all 0.3s ease;
      border-left: 0.25rem solid $red;

      &:hover {
        border-left-color: $emerald;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

        .mission-number {
          transform: scale(1.1);
        }

        .mission-arrow {
          opacity: 1;
        }
      }
    }

    .mission-content {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;

      .mission-number {
        flex-shrink: 0;
        width: 4rem;
        height: 4rem;
        background: linear-gradient(to bottom right, $emerald, $emerald-dark);
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 1.25rem;
        font-weight: bold;
        transition: transform 0.3s ease;
      }

      .mission-details {
        flex: 1;

        .mission-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;

          .mission-icon {
            width: 2.5rem;
            height: 2.5rem;
            background-color: lighten($emerald, 45%);
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
              width: 1.25rem;
              height: 1.25rem;
              color: $emerald;
            }
          }

          h3 {
            color: $gray-dark;
            font-size: 1.125rem;
            margin: 0;
          }
        }

        .mission-description {
          color: $gray-light;
          line-height: 1.75rem;
        }
      }

      .mission-arrow {
        flex-shrink: 0;
        opacity: 0;
        transition: opacity 0.3s ease;

        svg {
          width: 1.5rem;
          height: 1.5rem;
          color: $emerald;
        }
      }
    }
  }

 
  @media (max-width: 768px) {
    .mission-content {
      flex-direction: column;
      align-items: center;
      text-align: center;

      .mission-title {
        justify-content: center;
      }

      .mission-arrow {
        display: none;
      }
    }
  }
}
</style>
