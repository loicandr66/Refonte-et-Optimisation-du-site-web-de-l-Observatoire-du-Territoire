<template>
  <section class="hero-section">
    <div class="container">
      <!-- Header Section -->
      <div class="header">
        <div class="badge">Gouvernance Territoriale</div>
        <h1>L'Observatoire du Territoire :</h1>
        <p>Outil de promotion de la bonne gouvernance</p>
        <div class="underline"></div>
      </div>

      <!-- Cards Grid -->
      <div class="cards-grid">
        <div v-for="(feature, index) in features" :key="index" class="card">
          <div class="card-header">
            <div class="number">{{ feature.number }}</div>
            <div class="icon">
              <component :is="feature.icon" :size="24" />
            </div>
          </div>
          <h3 class="card-title">{{ feature.title }}</h3>
          <p class="card-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Globe, Users, TrendingUp, BookOpen } from 'lucide-vue-next'

export default {
  name: 'HeroFeatures',
  components: { Globe, Users, TrendingUp, BookOpen },
  data() {
    return {
      features: [
        {
          number: "01",
          icon: Globe,
          title: "Un portail de l'information territorialisée",
          description: "Afin d'assurer la disponibilité en ligne des données et informations au sein de l'OT. un SSe: portail a été développé afin de centraliser et diffuser la base de données nationales du secteur des planifications territoriales. Il assemble données et informations autour de questionnements, ou de thèmes caractéristiques des enjeux de la gouvernance foncière, des politiques publiques d'aménagement et de développement des territoires."
        },
        {
          number: "02",
          icon: Users,
          title: "Consultation et participation",
          description: "L'OT inclut dans sa démarche d'intervention l'articulation systématique et la mise en débat interne de toutes ses observations. L'OT invite dans ses débats les décideurs, l'administration étatique centrale et déconcentrée, les bailleurs de fonds, les organismes de la société civile, les collectivités, les chercheurs, les responsables des institutions académiques et les journalistes."
        },
        {
          number: "03",
          icon: TrendingUp,
          title: "Amélioration continue",
          description: "La raison d'être de l'OT est liée à l'objectif d'amélioration continue de la gestion de la fiscalité foncière et de l'efficacité et à l'efficience d'arbitrer des processus civiques de conception, de mise en œuvre, d'observation périodique et d'évaluation aboutissant à une phase de réajustement."
        },
        {
          number: "04",
          icon: BookOpen,
          title: "Approche holistique",
          description: "L'Aménagement du Territoire et le Foncier sont des thématiques transversales qui intéragissent étroitement avec d'autres secteurs – des (agriculture, mines, forêts, décentralisation, l'outisme, etc.). L'OT est appelé à collaborer avec les institutions en charge de ces secteurs et élargit ses champs d'observation au niveau des articulations avec ces thématiques."
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-section {
  min-height: 100vh;
  background-color: #f9fafb;
  padding: 4rem 1rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;

    .badge {
      display: inline-block;
      background-color: #d1fae5;
      color: #065f46;
      padding: 0.25rem 1rem;
      border-radius: 9999px;
      margin-bottom: 1.5rem;
    }

    h1 {
      color: #111827;
      margin-bottom: 0.75rem;
    }

    p {
      color: #4b5563;
      margin-bottom: 1rem;
    }

    .underline {
      width: 4rem;
      height: 0.25rem;
      background-color: #10b981;
      margin: 0 auto;
      border-radius: 0.125rem;
    }
  }

  .cards-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(1, 1fr);

    @media(min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }

    .card {
      background-color: #ffffff;
      border-radius: 0.5rem;
      padding: 1.5rem;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      transition: box-shadow 0.3s;

      &:hover {
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 1rem;
        background:white;
        border-bottom:none;
        .number {
          background-color: #d1fae5;
          color: #065f46;
          padding: 0.25rem 0.75rem;
          border-radius: 0.25rem;
          font-weight: bold;
        }

        .icon {
          color: #9ca3af;
          padding: 5px;
          background:#f2f2f2;
          border-radius:5px;
          
        }
      }

      .card-title {
        color: #065f46;
        margin-bottom: 0.75rem;
        font-size: 1.125rem;
        font-weight: 600;
      }

      .card-description {
        color: #4b5563;
        font-size: 0.875rem;
        line-height: 1.5;
      }
    }
  }
}
</style>
