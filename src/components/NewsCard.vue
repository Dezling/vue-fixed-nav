<template>
  <article class="news-card" @click="$emit('click')">
    <slot></slot>
  </article>
</template>

<style scoped>
.news-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
}
</style>