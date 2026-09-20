import { createRouter, createWebHistory } from 'vue-router'

import logIn from '../components/admin/login.vue'

import addPlanForm from '../components/plans/planAddForm.vue';
import planDataTable from '../components/plans/planFilteredTable.vue';
import planEdit from '../components/plans/planEditForm.vue';

import addPubForm from '../components/publications/pubAddForm.vue';
import pubDataTable from '../components/publications/pubFilteredTable.vue';
import pubEdit from '../components/publications/pubEditForm.vue';

import addSchemaForm from '../components/schemas/schemasAddForm.vue';
import schemaDataTable from '../components/schemas/schemasFilteredTable.vue';
import schemaEdit from '../components/schemas/schemasEditForm.vue';

import addStatForm from '../components/statistiques/statsAddForm.vue';
import statDataTable from '../components/statistiques/statsFilteredTable.vue';
import statEdit from '../components/statistiques/statsEditForm.vue';

import addProcForm from '../components/procedures/procAddForm.vue';
import procDataTable from '../components/procedures/procFilteredTable.vue';
import procEdit from '../components/procedures/procEditForm.vue';


const routes = [
  { path : '/', component: logIn, name:'logIn' },
  { path: '/admin/plan', component: planDataTable, name: 'planDataTable'}, { path: '/admin/plan/add', component: addPlanForm, name:'planAddForm' }, { path: '/admin/plan/edit/:id_plan', component: planEdit, name: 'planEditForm', props: true},
  { path: '/admin/pub', component: pubDataTable, name: 'pubDataTable'}, { path: '/admin/pub/add', component: addPubForm, name:'pubAddForm' }, { path: '/admin/pub/edit/:id_pub', component: pubEdit, name: 'pubEditForm', props: true},
  { path: '/admin/stats', component: statDataTable, name: 'statDataTable'}, { path: '/admin/stat/add', component: addStatForm, name:'statAddForm' }, { path: '/admin/stat/edit/:id_stats', component: statEdit, name: 'statEditForm', props: true},
  { path: '/admin/schema', component: schemaDataTable, name: 'schemaDataTable'}, { path: '/admin/schema/add', component: addSchemaForm, name:'schemaAddForm' }, { path: '/admin/schema/edit/:id_schema', component: schemaEdit, name: 'schemaEditForm', props: true},
  { path: '/admin/procedures', component: procDataTable, name: 'procDataTable'}, { path: '/admin/procedures/add', component: addProcForm, name:'procAddForm' }, { path: '/admin/procedure/edit/:id_procedure', component: procEdit, name: 'procEditForm', props: true},
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const publicPages = ["/"];
  const requireAuth = !publicPages.includes(to.path);
  if(requireAuth && !token) {
    next("/");
  } else {
    next();
  }
})

export default router;