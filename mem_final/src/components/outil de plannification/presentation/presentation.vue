<template>
  <div>
    <!-- Bandeau titre -->
    <section class="banniere">
      <h2>OUTIL DE PLANIFICATION TERRITORIALE</h2>
      <p>
        Les outils de planification territoriale à Madagascar sont définis par l'article 32 de la Loi 2015-051 du 03
        Février 2016 portant Orientation de l'Aménagement du Territoire. Ces outils ont force obligatoire et servent
        de cadre de référence aux politiques, programmes et projets des ministères et des collectivités territoriales
        décentralisées.
      </p>
    </section>

    <div class="main-container">
      <!-- Accordéons à gauche -->
      <div class="accordion-list">
        <div
          v-for="(item, index) in accordions"
          :key="index"
          class="accordion-item"
        >
          <button
            class="accordion-header"
            @click="toggleAccordion(index)"
            :aria-expanded="item.open"
            :aria-controls="'accordion-content-' + index"
          >
            <span aria-hidden="true">{{ item.open ? '−' : '+' }}</span>
            {{ item.title }}
          </button>
          <transition name="accordion">
            <div
              v-show="item.open"
              class="accordion-content"
              :id="'accordion-content-' + index"
              role="region"
            >
              <div v-for="(para, i) in item.content" :key="i">
                <p>{{ para }}</p>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- Bloc de droite -->
      <div class="sidebar">
        <div class="sidebar-box">
          <h4>LES PLANS D'URBANISME</h4>
          <ul>
            <li>PUDI (Plan d'Urbanisme Directeur)</li>
            <li>PUDé (Plan d'Urbanisme de Détails)</li>
            <li>SSU (Schéma Simplifié d'Urbanisme)</li>
            <li>PSU (Plan Simplifié d'Urbanisme)</li>
          </ul>
        </div>
        <div class="sidebar-box">
          <h4>SCHEMAS D'AMENAGEMENT</h4>
          <ul>
            <li>SNAT (Schémas Nationaux)</li>
            <li>SRAT (Schéma Régionaux)</li>
            <li>SAIC (Schéma d'Aménagement Inter-Communaux)</li>
            <li>SAC (Schémas d'Aménagement Communaux)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OutilPlanification",
  data() {
    return {
      accordions: [
        {
          title: "Politique Nationale de l'Aménagement du Territoire ou",
          content: [
            "La politique nationale d’aménagement du territoire fixe le cadrage général de l’aménagement du territoire national en vue d’optimiser son utilisation et sa mise en valeur pour améliorer les conditions de vie de la population.",
            "Elle fixe les orientations stratégiques de développement à travers les actions d’aménagement du territoire, les axes d’intervention et les programmes y afférents.",
            "Elle favorise la spécialisation et la complémentarité entre les zones d’influence aux fins d’harmoniser le développement du territoire national."
          ],
          open: true,
        },
        {
          title: "La politique nationale foncière ou LPF",
          content: [
            "La LPF définit les grandes orientations et principes qui régissent la gestion du foncier à Madagascar.",
            "Elle vise la sécurisation foncière, la réduction des conflits, la promotion des investissements et l'amélioration de l'accès équitable à la terre.",
            "Elle oriente également la mise en œuvre des lois foncières et des réformes institutionnelles dans ce domaine."
          ],
          open: false,
        },
        {
          title: "Le schéma provincial d'aménagement du territoire ou SPAT",
          content: [
            "Le SPAT est un outil de planification à l’échelle provinciale qui traduit les orientations nationales en fonction des spécificités locales.",
            "Il fixe les priorités de développement et les aménagements structurants de la province.",
            "Il vise la cohérence entre les politiques sectorielles et territoriales au niveau provincial."
          ],
          open: false,
        },
        {
          title: "Schéma Régional d'Aménagement du Territoire ou SRAT",
          content: [
            "Le SRAT est un outil de planification stratégique à l’échelle des régions.",
            "Il identifie les potentialités et les contraintes régionales pour un développement équilibré.",
            "Il oriente les investissements publics et les projets de développement en fonction des objectifs régionaux."
          ],
          open: false,
        },
        {
          title: "Le schéma intercommunal et Communal d'aménagement du territoire (SAIC et SAC)",
          content: [
            "Le SAIC est un document d’orientation pour l’aménagement de plusieurs communes regroupées.",
            "Il assure la cohérence des interventions sur le territoire intercommunal en tenant compte des dynamiques locales.",
            "Le SAC, quant à lui, est un outil de planification à l’échelle de la commune visant à améliorer la gestion du territoire et la qualité de vie des citoyens."
          ],
          open: false,
        },
        {
          title:
            "Les plans d'urbanisme : Plans d'Urbanisme Directeur ou PUDI et Plans d'Urbanisme de Détails (PUDé)",
          content: [
            "Le PUDI définit les grandes orientations de développement urbain à moyen et long terme.",
            "Il organise les zones d’habitation, d’activités, d’équipements, de circulations et d’espaces verts.",
            "Le PUDé, quant à lui, précise les modalités d’aménagement de secteurs spécifiques à une échelle plus fine."
          ],
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.accordions[index].open = !this.accordions[index].open;
    },
  },
};
</script>

<style scoped>

.main-container {
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 2rem;
}

.accordion-list {
  flex: 2;
  min-width: 300px;
}

.sidebar {
  flex: 1;
  min-width: 250px;
}

.sidebar-box {
  background: var(--light-bg);
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.sidebar-box h4 {
  color: red;
  margin-bottom: 1rem;
}

.sidebar-box ul {
  padding-left: 1rem;
  list-style-type: none;
}

.sidebar-box li {
  margin-bottom: 1.2rem;
  position: relative;
  padding-left: 1.2rem;
}

.banniere {
  background-color: #333;
  color: #ffffff;
  padding: 2rem;
  text-align: center;
  height: 220px;
  margin-bottom: 100px;
}

.banniere h2 {
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.accordion-item {
  margin-bottom: 1rem;
  border-radius: 20px;
  border: 2px solid var(--primary-green);
  overflow: hidden;
}

.accordion-header {
  width: 100%;
  background: white;
  padding: 0.8rem 1.2rem;
  font-weight: bold;
  color: var(--text-dark);
  border: none;
  outline: none;
  text-align: left;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.accordion-header:hover {
  background-color: #007e33;
  color: white;
}

.accordion-header span {
  font-weight: bold;
  font-size: 1.2rem;
}

.accordion-content {
  background-color: var(--light-bg);
  padding: 1rem 1.2rem;
  border-top: 1px solid #ccc;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}

@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
  }
  .banniere{
   
    height:max-content;
    margin-bottom: 0px;
  }
  
  
}
</style>
