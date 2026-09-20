<template>
  <div class="liste" :class="{ active: isActive }">
    <div class="liens" @click="toggleActive">
      <h4 class="nom">{{item.nom_procedure}}</h4>
      <span class="chevron" :class="{ rotate: isActive }"></span>
    </div>

    <transition name="slide">
      <div v-if="isActive" class="info">
        <p>
          Cliquez ici pour voir le contenu :
          <a href="item.consult_procedure" target="_blank" class="contenu">AFFICHER LE CONTENU</a>
        </p>
        <p>
          Pour obtenir la version PDF cliquez ici :
          <a href="item.down_procedure" class="pdf">TÉLÉCHARGER</a>
        </p>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: "Liste",
  props:{
    item: Object
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss">
.liste {
  width: 90%;
  max-width: 900px;
  margin: 15px auto;
  padding: 20px 25px;
  border: 1px solid rgba(145, 145, 145, 0.349);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #fff;
  transition: all 0.4s ease;

  .liens {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;

    .nom {
      color: #707070;
      font-weight: bold;
      font-size: 20px; 
      margin: 0;
      flex: 1;
    }

    .chevron {
      width: 10px;
      height: 10px;
      border-right: 3px solid #7aa95c;
      border-bottom: 3px solid #7aa95c;
      transform: rotate(45deg);
      transition: transform 0.3s ease;
      margin-left: 10px;
    }

    .chevron.rotate {
      transform: rotate(-135deg);
    }
  }

  .info {
    margin-top: 10px;
    p {
      text-indent: 20px;
      margin-bottom: 6px;

      a {
        text-decoration: none;
        color: #7aa95c;
        font-weight: bold;
      }
    }
  }
}


.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}


@media screen and (max-width: 1024px) {
  .liste {
    width: 90%;
    margin: 10px auto;
  }
}

@media screen and (max-width: 768px) {
  .liste {
    width: 90%;
    margin: 10px auto;
  }
}

@media screen and (max-width: 480px) {
  .liste {
    width: 90%;
    margin: 8px auto;
  }
}
</style>
