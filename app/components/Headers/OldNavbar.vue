<template>
  <nav class="navbar">
    <div class="navbar__container">
      <NuxtLink to="/" class="navbar__logo">
        <span class="navbar__logo-text">Career Concierge</span>
      </NuxtLink>

      <div class="navbar__menu">
        <a href="#features" class="navbar__link">Features</a>
        <a href="#how-it-works" class="navbar__link">How it Works</a>
        <a href="#pricing" class="navbar__link">Pricing</a>
      </div>

      <button class="navbar__cta">Consult</button>

      <button class="navbar__mobile-btn" aria-label="Toggle menu">
        <Menu class="navbar__mobile-icon" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.navbar__container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.navbar__logo-icon {
  width: 2rem;
  height: 2rem;
  background-color: red;
  /* background-color: #1e40af; */
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
}

.navbar__logo-text {
  font-size: 0.885rem;
  font-weight: 800;
  color: #1f2937;
  /* display: none; */
}

@media (min-width: 640px) {
  .navbar__logo-text {
    display: inline;
  }
}

.navbar__menu {
  display: none;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 768px) {
  .navbar__menu {
    display: flex;
  }
}

.navbar__link {
  color: #4b5563;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s;
}

.navbar__link:hover {
  color: #1f2937;
}

.navbar__cta {
  display: none;
  padding: 0.5rem 1.5rem;
  background-color: var(--PRIMARY-COLOR-SHADE-7);
  color: white;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

@media (min-width: 640px) {
  .navbar__cta {
    display: block;
  }
}

.navbar__cta:hover {
  background-color: var(--PRIMARY-COLOR-SHADE-9);
}

.navbar__mobile-btn {
  display: block;
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

@media (min-width: 768px) {
  .navbar__mobile-btn {
    display: none;
  }
}

.navbar__mobile-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #4b5563;
}
</style>
