<template>
  <section id="services" class="services-section">
    <div class="container">
      <div class="header">
        <h2>Services</h2>
      </div>

      <div class="services-grid">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-card"
          :style="{ background: getBgColor(service.color) }"
        >
          <div class="icon-container" :style="{ color: getIconColor(service.iconColor) }">
            <component :is="service.icon" class="icon" />
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <button class="service-btn">
            Accéder
            <ArrowRight class="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FileText, Database, Map, Layers, ArrowRight } from "lucide-vue-next";

const services = [
  {
    icon: FileText,
    title: "Procédures usuelles",
    description:
      "Standard des services fournis au niveau du Ministère en charge de l'Aménagement du territoire et du Foncier",
    color: "green-bg",
    iconColor: "green-icon",
  },
  {
    icon: Database,
    title: "SILOAT",
    description:
      "Systèmes d'information localisé pour l'Observatoire de l'Aménagement du territoire et du Foncier",
    color: "blue-bg",
    iconColor: "blue-icon",
  },
  {
    icon: Map,
    title: "Géoportail SILOAT",
    description:
      "Systèmes d'information localisé pour l'Observatoire de l'Aménagement du territoire et du Foncier",
    color: "purple-bg",
    iconColor: "purple-icon",
  },
  {
    icon: Layers,
    title: "MATAC",
    description:
      "Systèmes d'information localisé pour l'Observatoire de l'Aménagement du territoire et du Foncier",
    color: "teal-bg",
    iconColor: "teal-icon",
  },
];


const getBgColor = (colorClass) => {
  switch (colorClass) {
    case "green-bg": return "#b9d1c6";
    case "blue-bg": return "#eff6ff";
    case "purple-bg": return "#f5f3ff";
    case "teal-bg": return "#f0fdfa";
    default: return "#f9fafb";
  }
};

const getIconColor = (iconClass) => {
  switch (iconClass) {
    case "green-icon": return "#16a34a";
    case "blue-icon": return "#2563eb";
    case "purple-icon": return "#7c3aed";
    case "teal-icon": return "#0d9488";
    default: return "#000";
  }
};
</script>

<style lang="scss" scoped>
.services-section {
  background: #fff;
  padding: 4rem 1rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;

    h2 {
      font-size: 2rem;
      color: #1a1a1a;
      font-weight: 600;
    }
  }

  .services-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }

    .service-card {
      border-radius: 1rem;
      padding: 1.5rem;
      transition: box-shadow 0.3s ease;

      &:hover {
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      }

      .icon-container {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;

        .icon {
          width: 2rem;
          height: 2rem;
        }
      }

      h3 {
        color: #1a1a1a;
        margin-bottom: 0.75rem;
        font-size: 1.125rem;
        font-weight: 600;
      }

      p {
        color: #4a4a4a;
        font-size: 0.9rem;
        margin-bottom: 1rem;
        line-height: 1.5;
      }

      .service-btn {
        display: flex;
        align-items: center;
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        color: #333;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.2s ease;

        &:hover {
          background: #f5f5f5;
          transform: translateY(-2px);
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
</style>
