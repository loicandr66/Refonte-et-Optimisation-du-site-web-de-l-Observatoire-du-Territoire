import { createRouter, createWebHistory } from 'vue-router';
import planAdd from './components/plans/planForm.vue';
import table from './components/filteredTTablewithDelete.vue';
import procadd from './components/procedures/procAddForm.vue';
import pubadd from './components/publications/pubAddForm.vue';
import schemadd from './components/schemas/schemasForm.vue';
import statadd from './components/statistiques/statsAddForm.vue';
import tladd from './components/texte_loi/tlAddForm.vue';
import tmadd from './components/these_memoire/tmAddForm.vue';
import modifPlan from './components/modifTable.vue'


const routes = [
  { path: '/admin/plans/table', component: table},
  { path: '/admin/add', component: planAdd },
  { path: '/admin/plan/modify/:id', component: modifPlan, name: modifPlanForm, props: true},
  { path: '/admin/procadd', component: procadd },
  { path: '/admin/pubadd', component: pubadd },
  { path: '/admin/schemadd', component: schemadd },
  { path: '/admin/statadd', component: statadd },
  { path: '/admin/tladd', component: tladd },
  { path: '/admin/tmadd', component: tmadd },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
