<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <Folder class="icon" />
      <h3>CATÉGORIES</h3>
    </div>

    <ul class="category-list">
      <li v-for="(cat, index) in categories" :key="index" class="category-item">
        <span>{{ cat.label }}</span>
        <span class="badge">{{ cat.count }}</span>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { Folder } from "lucide-vue-next";
import { categories } from "../../components/textes et lois/data/categorie.js";
</script>

<style scoped lang="scss">
.sidebar {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);

  .sidebar-header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1rem;

    .icon {
      width: 20px;
      height: 20px;
      color: #2563eb;
    }
  }

  .category-list {
    list-style: none;
    padding: 0;
    margin: 0;

    .category-item {
      display: flex;
      justify-content: space-between;
      padding: 6px 0;
      color: #334155;
      font-size: 0.95rem;
      cursor: pointer;
      border-radius: 6px;

      &:hover {
        background: #f1f5f9;
      }

      .badge {
        background: #e2e8f0;
        border-radius: 10px;
        padding: 0 8px;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
