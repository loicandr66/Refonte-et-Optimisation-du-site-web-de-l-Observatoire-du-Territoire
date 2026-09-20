<template>
  <div class="wrap">
    <div class="carousel" role="region" aria-roledescription="carousel" aria-label="Carrousel d'articles">
      <!-- Bouton gauche -->
      <button class="nav prev" aria-label="Faites défiler vers la gauche" @click="prev" :disabled="index === 0">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>

      <!-- Liste des cartes -->
      <div class="viewport" ref="viewport">
        <ul class="track" :style="{ transform: `translateX(${-index * (cardWidth + gap)}px)`, '--card-width': cardWidth + 'px' }">
          <li v-for="(card, i) in cards" :key="i" class="card">
            <img class="card__media" :src="card.image" :alt="card.alt" />
            <div class="card__body">
              <h3 class="card__title">{{ card.title }}</h3>
              <p class="card__text">{{ card.description}}</p>
              <div class="btn">
                <img src="../icons/body/icone_det.png" alt="icone">
                <p>Voir détails</p>
              </div>
              
            </div>
          </li>
        </ul>
      </div>

      <!-- Bouton droite -->
      <button class="nav next" aria-label="Faites défiler vers la droite" @click="next" :disabled="index >= maxIndex">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>

    <!-- Dots -->
    <div class="dots" aria-hidden="true">
      <span v-for="i in maxIndex + 1" :key="i" class="dot" :class="{ 'is-active': i-1 === index }" @click="goTo(i-1)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      index: 0,
      perView: 3,
      gap: 16,
      cardWidth: 300,
      maxIndex: 0,
      startX: 0,
      dragging: false
    };
  },
  mounted() {
    this.computeLayout();
    window.addEventListener('resize', this.computeLayout);

    // Swipe tactile
    const viewport = this.$refs.viewport;
    viewport.addEventListener('touchstart', (e) => { 
      this.startX = e.touches[0].clientX; 
      this.dragging = true; 
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
      if (!this.dragging) return; 
      this.dragging = false;
      const dx = e.changedTouches[0].clientX - this.startX;
      const threshold = Math.max(40, this.cardWidth * 0.15);
      if (dx < -threshold) this.next();
      else if (dx > threshold) this.prev();
    });

    // Ajout JS pour couper le texte à 3 lignes avec "..."
    this.$nextTick(() => {
      const lineCount = 3;
      const texts = this.$el.querySelectorAll('.card__text');
      texts.forEach(el => {
        const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
        const maxHeight = lineHeight * lineCount;
        let text = el.textContent;
        el.textContent = text;
        while (el.scrollHeight > maxHeight && text.length > 0) {
          text = text.slice(0, -1);
          el.textContent = text + '...';
        }
      });
    });

    // Clavier
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') this.next();
      else if (e.key === 'ArrowLeft') this.prev();
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.computeLayout);
  },
  methods: {
    computePerView() {
      const w = window.innerWidth;
      if (w <= 640) return 1;   // Mobile = 1 carte
      if (w >= 1024) return 3;  //  Desktop large = 3 cartes
      return 2;                 //  Tablette = 2 cartes
    },
    computeLayout() {
      this.perView = this.computePerView();
      this.gap = parseFloat(getComputedStyle(this.$refs.viewport).gap) || 16;
      this.cardWidth = (this.$refs.viewport.clientWidth - this.gap * (this.perView - 1)) / this.perView;
      this.maxIndex = Math.max(0, this.cards.length - this.perView);
      if (this.index > this.maxIndex) this.index = this.maxIndex;
    },
    next() { if (this.index < this.maxIndex) this.index++; },
    prev() { if (this.index > 0) this.index--; },
    goTo(i) { this.index = i; }
  }
};
</script>

<style scoped>

.wrap {
  max-width: 1100px;
  margin: 48px auto; 
  padding: 0 16px; 
}

.carousel {
  display: grid; 
  grid-template-columns: auto 1fr auto; 
  align-items: center; 
  gap: 8px; 
  height: max-content;
}

.viewport {
  overflow: hidden; 
  border-radius: 16px;
}

.track { 
  list-style: none; 
  margin: 0;
  padding: 0;
  display: flex; 
  gap: 16px; 
  transition: transform .45s ease; 
  will-change: transform; 
}

.card { 
  flex: 0 0 var(--card-width, 300px);
  border-radius: 10px;
  box-shadow: 0 6px 14px rgba(6,6,5,.28);
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  display: flex;              
  flex-direction: column;     /* Version desktop : image en haut */
}

.card__media { 
  aspect-ratio: 16/9; 
  width: 100%; 
  object-fit: cover;
  display: block; 
}

.card__body { 
  padding: 14px 16px 16px;   
  display: flex;             
  flex-direction: column;    
  flex: 1 1 auto;            
  position: relative;
}

.card__title { 
  margin: 0 0 6px;
  font-size: 1.3rem;
  font-weight: 700; 
  color: black;
  text-align: left;
  display: -webkit-box;
  line-clamp: 2;           
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  max-height: calc(1.2em * 2);    
  min-height: calc(1.2em * 2);    
}

.card__text { 
  margin-bottom: 25px;
  margin-top: 25px;
  font-size: .92rem;
  color: #9ca3af;
  line-height: 1.45;
  overflow: hidden;
  height: calc(1.45em * 3);    
  max-height: calc(1.45em * 3);
}

.btn{
  display: flex;
  margin-top: auto;          
  position: static;         
  left: unset;                
  bottom: unset;  
}
.btn img{
  width:30px;
  height: 30px;
}
.btn p{
  margin-left: 10px;
}

.nav { 
  appearance: none;
  border: 1px solid black;
  background: transparent;
  color: #e5e7eb;
  width: 44px; 
  height: 44px;
  border-radius: 50%;
  display: grid; 
  place-items: center; 
  cursor: pointer; 
  transition: transform .15s ease, background .2s ease, opacity .2s ease; 
}
.nav:hover { 
  background: rgba(255,255,255,.06); 
  transform: translateY(-1px);
}
.nav:active { 
  transform: translateY(0); 
}
.nav[disabled] {
  opacity: .35;
  cursor: not-allowed;
}
.nav svg { 
  width: 50px; 
  height: 50px; 
  color:black;
  margin: -10px;
}

.dots { 
  display: flex; 
  justify-content: center;
  gap: 8px; 
  margin-top: 14px; 
}
.dot { 
  width: 8px;
  height: 8px; 
  border-radius: 50%;
  background: #334155;
  opacity: .7;
  cursor: pointer; 
}
.dot.is-active { 
  background: #A7001E; 
  opacity: 1;
}

/* ===================== */
/* VERSION MOBILE (<=640px) */
/* ===================== */
@media (max-width:412px){
  /* .wrap{
    border:2px solid red;
  }
  .card{
    border:2px solid red;
    width:100%;
  } */
}
@media (max-width: 640px) {
  .card {
    flex-direction: row;        /* Image à gauche, texte à droite */
    align-items: stretch;       /* Étire le contenu sur toute la hauteur */
    height: auto;
    width: 100%;

  }
  .card__media {
    flex: 0 0 40%;              /* Image = 40% largeur */
    width: 40%;
    height: auto;
    object-fit: cover;
  }
  .card__body {
    flex: 1 1 auto;             /* Prend tout l’espace restant */
    min-width: 0;               /* évite que le texte soit écrasé */
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .card__title {
    font-size: 1rem;          
    max-height: none;         
    min-height: unset;
    -webkit-line-clamp: unset; 
    line-clamp: unset;        
    overflow: visible;
  }
  .card__text {@media (max-width: 640px) {
  .card {
    flex-direction: row;        /* Image à gauche, texte à droite */
    align-items: stretch;       /* Étire le contenu sur toute la hauteur */
    height: auto;
    width: 100%;
  }
  .card__media {
    flex: 0 0 40%;              /* Image = 40% largeur */
    width: 40%;
    height: auto;
    object-fit: cover;
  }
  .card__body {
    flex: 1 1 auto;             /* Prend tout l’espace restant */
    min-width: 0;               /* évite que le texte soit écrasé */
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .card__title {
    font-size: 1rem;          
    max-height: none;         
    min-height: unset;
    -webkit-line-clamp: unset; 
    line-clamp: unset;        
    overflow: visible;
  }
  .card__text {
    font-size: 0.85rem;
    margin: 8px 0;
    height: auto;
    max-height: none;
    overflow: visible;
  }
  .btn {
    margin-top: 12px;
  }
}

    font-size: 0.85rem;
    margin: 8px 0;
    height: auto;
    max-height: none;
    overflow: visible;
  }
  .btn {
    margin-top: 12px;
  }
}

</style>
