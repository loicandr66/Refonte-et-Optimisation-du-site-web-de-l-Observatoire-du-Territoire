<template>
  <div class="responsive-nav-container">
    <div class="responsive-nav">
      <div class="nav-content">
        <div class="nav-section" v-for="cat in categories" :key="cat.label">
          <h3>{{ cat.label }}</h3>
          <ul>
            <li v-for="item in cat.items" :key="item.value">
              <RouterLink
                :to="item.to"
                :class="{ 'router-link-exact-active': modelValue === item.value }"
                @click="handleNavClick(item.value)"
              >
                {{ item.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "ResponsiveNav",
  components: { RouterLink },
  props: {
    modelValue: String,
    categories: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    handleNavClick(value) {
      this.$emit("update:modelValue", value);
    },
  },
  mounted() {
    console.log("ResponsiveNav mounted — categories:", this.categories);
  }
};
</script>

<style scoped>
.responsive-nav-container {
  position: relative;
  z-index: 100;
  background: white;
}

.responsive-nav {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-content {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.nav-section {
  flex: 1 1 200px;
}

.nav-section h3 {
  color: #b22222;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.nav-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-section li {
  margin-bottom: 5px;
}

.nav-section a {
  display: block;
  padding: 8px 15px;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s;
}

.nav-section a:hover {
  background-color: #f0f0f0;
}

.nav-section a.router-link-exact-active {
  background-color: #955149;
  color: white;
}

/* Tablettes (2 colonnes) */
@media (max-width: 1024px) {
  .nav-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

/* Mobiles (menu horizontal scrollable) */
@media (max-width: 768px) {
  .nav-content {
    display: flex;
    overflow-x: auto;
    gap: 10px;
  }

  .nav-section {
    flex: 0 0 auto;
    min-width: 160px;
  }
}
</style>
