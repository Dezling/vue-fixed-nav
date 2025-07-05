<template>
  <div class="section">
    <h1 class="section-title">{{ $route.name }}</h1>
    <div class="coming-soon">
      <p>🚧 COMING SOON 🚧</p>
    </div>
  </div>
</template>

<style scoped>
.coming-soon {
  text-align: center;
  font-size: 1.5rem;
  color: #64748b;
  padding: 4rem 0;
  background: #f8fafc;
  border-radius: 16px;
  margin: 2rem auto;
  max-width: 800px;
}
</style>