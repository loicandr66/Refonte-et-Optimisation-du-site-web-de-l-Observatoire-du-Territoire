<template>
  <section id="actualites" class="news-section">
    <div class="container">
      <div class="section-header">
        <h2>Actualités</h2>
        <p>Suivez les actualités récentes de notre Ministère</p>
      </div>

      <div class="carousel-wrapper">
        <div class="carousel-viewport">
          <div
            class="carousel-track"
          
            :style="{ transform: `translateX(-${currentSlide * (100 / perView)}%)` }"
          >
            <article
              v-for="item in latest"
              :key="item.id_pub"
              class="news-card"
            >
              <div class="image-wrapper">
                <img :src="getImage(item.img_pub)" :alt="item.titre_pub" class="news-image" />
              </div>
              <div class="news-content">
                <h3 class="news-title">{{ item.titre_pub }}</h3>
                <p class="news-excerpt">{{ item.contenu_pub }}</p>

                <div class="news-footer">
                  <div class="news-date">
                    <Calendar class="icon" />
                    <span>{{ item.date_pub }}</span>
                  </div>
                  <button class="details-btn">
                    Voir détails
                    <ArrowRight class="icon-right" />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="carousel-bottom">
        <button class="nav-btn" @click="prevSlide">
          <ChevronLeft class="icon" />
        </button>

        <div class="dots">
          <button
            v-for="(dot, index) in totalSlides"
            :key="index"
            class="dot"
            :class="{ active: index === currentSlide }"
            @click="goToSlide(index)"
          ></button>
        </div>

        <button class="nav-btn" @click="nextSlide">
          <ChevronRight class="icon" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-vue-next";
import { newsItems } from "../../components/acceuil/carousselData.js"; 

const currentSlide = ref(0);
const perView = ref(3);
const latest = ref([])
const totalSlides = computed(() => Math.ceil(newsItems.length / perView.value));

const getImage = (imageName) => {
  return new URL(`../../assets/images/${imageName}`, import.meta.url).href
}

function updatePerView() {
  const w = window.innerWidth;
  if (w < 768) perView.value = 1;
  else if (w < 1024) perView.value = 2;
  else perView.value = 3;

  if (currentSlide.value >= totalSlides.value) {
    currentSlide.value = totalSlides.value - 1;
  }
}

function nextSlide() {
  if (currentSlide.value < totalSlides.value - 1) currentSlide.value++;
}
function prevSlide() {
  if (currentSlide.value > 0) currentSlide.value--;
}
function goToSlide(i) {
  currentSlide.value = i;
}

onMounted( async () => {
  updatePerView();
  window.addEventListener("resize", updatePerView);
  
  
  const loadingData = async() => {
    try {
      const res = await fetch("http://localhost:3000/api/publications");
      const pubData = await res.json();
      console.log("Données reçues.", pubData);
      const sortData = pubData.sort((a, b) => new Date(b.date_pub)- new Date(a.date_pub));
      latest.value = sortData.slice(0, 5);
    } catch (err) {
      console.error("Erreur lors du chargelent des données: ", err);
    }
  };

  loadingData();
});
onUnmounted(() => window.removeEventListener("resize", updatePerView));
</script>

<style lang="scss" scoped>

.news-section {
  background: #f9fafb;
  padding: 4rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      color: #111827;
      margin-bottom: 0.5rem;
    }
    p {
      color: #6b7280;
    }
  }

  .carousel-wrapper {
    overflow: hidden;

    .carousel-viewport {
      overflow: hidden;
      width: 100%;
    }

    .carousel-track {
      display: flex;
      transition: transform 0.6s ease;
    }

    .news-card {
      flex: 0 0 calc(100% / 3 - 1rem);
      margin-right: 1rem;
      background: #fff;
      border-radius: 1rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      overflow: hidden;
      transition: 0.3s ease;

      &:last-child {
        margin-right: 0;
      }

      @media (max-width: 1024px) {
        flex: 0 0 calc(100% / 2 - 0.75rem);
      }

      @media (max-width: 768px) {
        flex: 0 0 100%;
        margin-right: 0;
      }

      &:hover .news-image {
        transform: scale(1.05);
      }

      .image-wrapper {
        height: 200px;
        overflow: hidden;

        .news-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
      }

      .news-content {
        padding: 1.2rem;

        .news-title {
          font-size: 1.1rem;
          color: #111827;
          margin-bottom: 0.5rem;
        }
        .news-excerpt {
          font-size: 0.95rem;
          color: #6b7280;
          margin-bottom: 1rem;
        }

        .news-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .news-date {
            display: flex;
            align-items: center;
            font-size: 0.85rem;
            color: #6b7280;

            .icon {
              width: 1rem;
              height: 1rem;
              margin-right: 0.3rem;
            }
          }

          .details-btn {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            border: none;
            background: none;
            color: #2563eb;
            font-size: 0.9rem;
            cursor: pointer;
            transition: color 0.3s;

            &:hover {
              color: #1e40af;
            }

            .icon-right {
              width: 1rem;
              height: 1rem;
            }
          }
        }
      }
    }
  }

  .carousel-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;

    .nav-btn {
      background: white;
      border: none;
      border-radius: 50%;
      width: 38px;
      height: 38px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: #f3f4f6;
      }

      .icon {
        width: 1.25rem;
        height: 1.25rem;
        color: #4b5563;
      }
    }

    .dots {
      display: flex;
      gap: 0.6rem;

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #d1d5db;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;

        &.active {
          background: #2563eb;
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
