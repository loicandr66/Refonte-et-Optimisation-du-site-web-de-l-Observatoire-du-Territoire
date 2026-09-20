<template>
  <div class="entete">
    <div class="logos" ref="logosRef">
      <aside class="singleton">
        <img src="../images/header/Logo_MDAT.jpg" alt="MDAT" />
      </aside>
      <aside class="rep">
        <img src="../images/header/Repoblika.jpg" alt="republique" />
        <h3>Observatoire du Territoire</h3>
      </aside>
      <aside class="singleton">
        <img src="../images/header/otlogo.jfif" alt="OT" />
      </aside>
    </div>

    <div class="barnav" ref="barnav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <RouterLink to="/" class="navbar-brand">Guide</RouterLink>
          <button
            ref="burgerBtn"
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavBar"
            aria-controls="mainNavBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
            <span class="menu-text d-inline d-lg-none ms-2">Menu</span>
          </button>

          <div class="collapse navbar-collapse" id="mainNavBar" ref="mainNavBar">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/Acceuil" class="nav-link active" @click="closeMenu">Accueil</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Observatoire" class="nav-link" @click="closeMenu">Observatoire</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://observatoire-territoire.mg/carte/#/carte/map-siloat" @click="closeMenu">Géoportail Siloat</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Outils de Planification</a>
                <ul class="dropdown-menu">
                  <li><router-link to="/outil_plannification/presentation" class="dropdown-item" @click="closeMenu">Présentation</router-link></li>
                  <li><router-link to="/outil_plannification/statistique" class="dropdown-item" @click="closeMenu">Statistiques</router-link></li>
                  <li><router-link to="/Plan-Urbanisme/PUDé" class="dropdown-item" @click="closeMenu">Plan d'Urbanisme</router-link></li>
                  <li><router-link to="/Schemas-Amenagement/SAIC" class="dropdown-item" @click="closeMenu">Schémas d'Aménagement</router-link></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://observatoire-territoire.mg/siloat/acceuil.php" @click="closeMenu">Lecture du Territoire</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Bibliothèque</a>
                <ul class="dropdown-menu">
                  <li><router-link to="/texte-et-lois" class="dropdown-item" @click="closeMenu">Textes et Lois</router-link></li>
                  <li><router-link to="/Publications" class="dropdown-item" @click="closeMenu">Publications</router-link></li>
                  <li><router-link to="/Procédures/Aménagement" class="dropdown-item" @click="closeMenu">Procédures</router-link></li>
                  <li><router-link to="/Thèse" class="dropdown-item" @click="closeMenu">Thèses et Mémoires</router-link></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.matac-madagascar.mg/" @click="closeMenu">MATAC</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "entete",
  setup() {
    const mainNavBar = ref(null);
    const burgerBtn = ref(null);
    const barnav = ref(null);
    const logosRef = ref(null);

    function closeMenu() {
      if (mainNavBar.value && burgerBtn.value && mainNavBar.value.classList.contains("show")) {
        burgerBtn.value.click();
      }
    }

    const handleScroll = () => {
      if (!barnav.value || !logosRef.value) return;
      const footer = document.querySelector("footer");
      if (!footer) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const logosBottom = logosRef.value.getBoundingClientRect().bottom + scrollY;
      const footerTop = footer.getBoundingClientRect().top + scrollY;

      const navHeight = barnav.value.offsetHeight;

      if (scrollY >= logosBottom) {
        // Sticky si on a scrollé au-delà des logos
        if (scrollY + navHeight + 100 >= footerTop) {
          // Stop juste avant le footer (100px)
          barnav.value.style.position = "absolute";
          barnav.value.style.top = `${footerTop - navHeight - 100}px`;
          barnav.value.style.width = "100%";
        } else {
          barnav.value.style.position = "fixed";
          barnav.value.style.top = "0";
          barnav.value.style.width = "100%";
        }
      } else {
        // Menu statique sous les logos
        barnav.value.style.position = "static";
        barnav.value.style.top = "auto";
        barnav.value.style.width = "100%";
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      mainNavBar,
      burgerBtn,
      barnav,
      logosRef,
      closeMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.entete {
  width: 100%;

  .logos {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    padding: 30px 10px;
    background: white;

    .singleton {
      width: 25%;
      img {
        width: 40%;
        height: auto;
        margin-top: 20px;
      }
    }
    .rep {
      width: 49%;
      img {
        width: 48%;
        height: auto;
        margin-top: -30px;
        margin-bottom: 20px;
      }
      h3 {
        font-size: 1.5rem;
        margin-top: 10px;
      }
    }
  }

  .barnav {
    width: 100%;
    background: #212529;
    z-index: 1000;

    nav {
      .navbar-collapse {
        .nav-item {
          margin: 0 10px;
          a,
          RouterLink {
            font-size: 14px;
          }
        }
      }
    }
  }
}

.menu-text {
  font-weight: 600;
  font-size: 16px;
  color: white;
  user-select: none;
}
</style>
