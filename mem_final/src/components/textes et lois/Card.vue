<template>
  <div class="doc-card">
    <h4 class="doc-title">{{ doc.title }}</h4>

    <div class="doc-meta">
      <Calendar class="icon" />
      <span>{{ doc.date }}</span>
    </div>

    <div class="doc-categories">
      <Tag v-for="(cat, i) in doc.categories" :key="i" class="tag">
        {{ cat }}
      </Tag>
    </div>

    <p class="doc-description">{{ doc.description }}</p>

    <div class="doc-actions">
      <button class="btn-view">
        <Eye class="icon" /> Voir le contenu
      </button>
      <button class="btn-download">
        <Download class="icon" /> Télécharger
      </button>
    </div>
  </div>
</template>

<script setup>
import { Calendar, Eye, Download, Tag } from "lucide-vue-next";
defineProps({ doc: Object });
</script>

<style scoped lang="scss">
.doc-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.2rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.03);

  .doc-title {
    color: #ea580c;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .doc-meta {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.9rem;
    color: #64748b;
    margin-bottom: 0.5rem;
  }

  .doc-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 0.5rem;

    .tag {
      background: #fef3c7;
      color: #92400e;
      border-radius: 8px;
      padding: 2px 8px;
      font-size: 0.8rem;
    }
  }

  .doc-description {
    color: #475569;
    margin-bottom: 1rem;
  }

  .doc-actions {
    display: flex;
    gap: 1rem;

    .btn-view, .btn-download {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 500;

      &.btn-view {
        background: #0f172a;
        color: white;
      }

      &.btn-download {
        background: #e2e8f0;
        color: #1e293b;
      }

      .icon {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
