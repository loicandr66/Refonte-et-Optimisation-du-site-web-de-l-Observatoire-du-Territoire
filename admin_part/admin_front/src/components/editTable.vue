<template>
  <div>
    <h2>Modifier les lignes de plan_urbanisme</h2>
    <div v-if="plans.length === 0">Chargement...</div>

    <div v-for="plan in plans" :key="plan.id_plan" style="border:1px solid #ccc; padding:10px; margin-bottom:10px;">
      <p><strong>ID :</strong> {{ plan.id_plan }}</p>
      <label>
        Region :
        <input v-model="plan.plan_region" />
      </label>
      <br />
      <label>
        District :
        <input v-model="plan.plan_district" />
      </label>
      <br />
      <label>
        Commune :
        <input v-model="plan.plan_commune" />
      </label>
      <br />
      <label>
        PUDE :
        <input v-model="plan.plan_pude" />
      </label>
      <br />
      <label>
        Carte :
        <input v-model="plan.plan_carte" />
      </label>
      <br />
      <label>
        Rapport :
        <input v-model="plan.plan_rapport" />
      </label>
      <br />
      <label>
        Type de Plan :
        <input v-model="plan.plan_type" />
      </label>
      <br />
      <button @click="updatePlan(plan)">Modifier</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plans: [],
    };
  },
  methods: {
    async fetchPlans() {
      try {
        const res = await fetch('/api/plans');
        const data = await res.json();
        this.plans = data;
        console.log(data);
      } catch (err) {
        console.error('Erreur chargement plans :', err);
      }
    },
    async updatePlan(plan) {
      const id = plan.id_plan
      try {
        const res = await fetch(`/api/plans/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            plan_region: plan.plan_region,
            plan_district: plan.plan_district,
            plan_commune: plan.plan_commune,
            plan_pude: plan.plan_pude,
            plan_carte: plan.plan_carte,
            plan_rapport: plan.plan_rapport,
            plan_type: plan.plan_type,
          }),
        });

        if (res.ok) {
          alert('Mise à jour réussie pour ID ' + plan.id_plan);
        } else {
          const err = await res.json();
          alert('Erreur de mise à jour : ' + err.error);
        }
      } catch (err) {
        console.error('Erreur fetch PUT :', err);
        alert('Échec de la requête');
      }
    },
  },
  mounted() {
    this.fetchPlans();
  },
};
</script>
