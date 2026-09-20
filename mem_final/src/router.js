import { createRouter, createWebHistory } from 'vue-router';
import guide from './components/Guide.vue'
import Accueil from './pages/Accueil.vue';
import Observatoire from './pages/Observatoire.vue';
import These from './pages/these&memoire/these.vue';
import Publications from './pages/publication.vue';
import Procedures from './pages/procédures/amenagement.vue';
import Topo from './pages/procédures/topo.vue';
import Domaines from './pages/procédures/domaine.vue';
import presentation from './components/outil de plannification/presentation/presentation.vue';
import statistique from './pages/outil_plannification/statistique.vue'
import pudé from './pages/OTP/PUDé.vue'
import pudi from './pages/OTP/PUDI.vue'
import sac from './pages/OTP/SAC.vue'
import srat from './pages/OTP/SRAT.vue'
import snat from './pages/OTP/SNAT.vue'
import saic from './pages/OTP/SAIC.vue'
import texteLois from './pages/texte&lois/texteLois.vue';

const routes = [
    {path:'/', component: guide},
    {path:'/acceuil', component: Accueil},
    {path:'/Thèse', component: These},
    {path:'/texte-et-lois', component: texteLois},
    {path:'/Observatoire', component: Observatoire},
    {path:'/Publications', component: Publications},
    {path:'/Procédures/Aménagement', component: Procedures},
    {path:'/Procédures/Topo', component: Topo},
    {path:'/Procédures/Domaine', component: Domaines},
    {path:'/outil_plannification/presentation',component:presentation},
    {path:'/outil_plannification/statistique',component: statistique},
    {path:'/Plan-Urbanisme/PUDé', component: pudé},
    {path:'/Plan-Urbanisme/PUDI', component: pudi},
    {path:'/Schemas-Amenagement/SAC', component: sac},
    {path:'/Schemas-Amenagement/SRAT', component: srat},
    {path:'/Schemas-Amenagement/SNAT', component: snat},
    {path:'/Schemas-Amenagement/SAIC', component: saic},
    
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router