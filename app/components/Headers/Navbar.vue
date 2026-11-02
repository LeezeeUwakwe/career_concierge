<template>
  <nav class="navbar">
    <div class="navbar__container">
      <!-- Logo -->
      <NuxtLink to="/" class="navbar__logo">
        <div class="navbar__logo-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" stroke-width="1.5"/>
            <path d="M8 8H16M8 12H13M8 16H10" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <span class="navbar__logo-text">Career <span class="navbar__logo-highlight">Concierge</span></span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <div class="navbar__menu">
        <a href="#services" class="navbar__link">Services</a>
        <a href="#process" class="navbar__link">Process</a>
        <a href="#pricing" class="navbar__link">Pricing</a>
        <a href="#faq" class="navbar__link">FAQ</a>
      </div>

      <!-- Right side -->
      <div class="navbar__actions">
        <!-- <button class="navbar__cta">
          <span>Book Consultation</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button> -->

        <!-- Mobile Toggle -->
        <button class="navbar__mobile-btn" @click="toggleMenu" aria-label="Toggle menu">
          <Menu v-if="!isOpen" class="navbar__mobile-icon" />
          <X v-else class="navbar__mobile-icon" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="navbar__mobile-enter-active"
      leave-active-class="navbar__mobile-leave-active"
      enter-from-class="navbar__mobile-enter-from"
      leave-to-class="navbar__mobile-leave-to"
    >
      <div v-if="isOpen" class="navbar__mobile-menu">
        <a href="#services" class="navbar__mobile-link" @click="closeMenu">Services</a>
        <a href="#process" class="navbar__mobile-link" @click="closeMenu">Process</a>
        <a href="#pricing" class="navbar__mobile-link" @click="closeMenu">Pricing</a>
        <a href="#faq" class="navbar__mobile-link" @click="closeMenu">FAQ</a>
        <hr class="navbar__mobile-divider" />
        <button class="navbar__mobile-cta" @click="closeMenu">
          Book Consultation
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<style scoped>
/* ===== NAVBAR ===== */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s ease;
}

.navbar.scrolled {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
}

.navbar__container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

/* ===== LOGO ===== */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  flex-shrink: 0;
}

.navbar__logo-icon {
  width: 2.2rem;
  height: 2.2rem;
  background: linear-gradient(135deg, #312E81 0%, #14B8A6 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 12px rgba(49, 46, 129, 0.2);
}

.navbar__logo:hover .navbar__logo-icon {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(49, 46, 129, 0.3);
}

.navbar__logo-text {
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.02em;
}

.navbar__logo-highlight {
  background: linear-gradient(135deg, #312E81 0%, #14B8A6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 480px) {
  .navbar__logo-text {
    font-size: 0.85rem;
  }
  .navbar__logo-icon {
    width: 1.8rem;
    height: 1.8rem;
  }
}

/* ===== DESKTOP MENU ===== */
.navbar__menu {
  display: none;
  align-items: center;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .navbar__menu {
    display: flex;
  }
}

.navbar__link {
  position: relative;
  color: #6B7280;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 0.25rem 0;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #312E81, #14B8A6);
  border-radius: 2px;
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar__link:hover {
  color: #111827;
}

.navbar__link:hover::after {
  width: 100%;
}

/* ===== ACTIONS ===== */
.navbar__actions {
  display: none;
  align-items: center;
  gap: 0.75rem;
}

.navbar__cta {
  display: none;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.5rem;
  background: #312E81;
  color: white;
  border: none;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 16px rgba(49, 46, 129, 0.15);
  font-family: 'Inter', -apple-system, sans-serif;
  letter-spacing: -0.01em;
}

.navbar__cta:hover {
  background: #1E1B5E;
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(49, 46, 129, 0.25);
}

.navbar__cta:active {
  transform: translateY(0px);
}

.navbar__cta svg {
  transition: transform 0.2s ease;
}

.navbar__cta:hover svg {
  transform: translateX(3px);
}

@media (min-width: 640px) {
  .navbar__cta {
    display: inline-flex;
  }
}

/* ===== MOBILE BUTTON ===== */
.navbar__mobile-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  background: transparent;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.navbar__mobile-btn:hover {
  background: #F3F4F6;
  border-color: #D1D5DB;
}

@media (min-width: 768px) {
  .navbar__mobile-btn {
    display: none;
  }
}

.navbar__mobile-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #4B5563;
}

/* ===== MOBILE MENU ===== */
.navbar__mobile-menu {
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.04);
}

@media (min-width: 768px) {
  .navbar__mobile-menu {
    display: none !important;
  }
}

.navbar__mobile-link {
  padding: 0.75rem 1rem;
  color: #4B5563;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 10px;
  transition: all 0.15s ease;
}

.navbar__mobile-link:hover {
  background: #F3F4F6;
  color: #111827;
}

.navbar__mobile-divider {
  border: none;
  border-top: 1px solid #F3F4F6;
  margin: 0.5rem 0;
}

.navbar__mobile-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.5rem;
  background: #312E81;
  color: white;
  border: none;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.25rem;
  font-family: 'Inter', -apple-system, sans-serif;
}

.navbar__mobile-cta:hover {
  background: #1E1B5E;
}

/* ===== MOBILE TRANSITIONS ===== */
.navbar__mobile-enter-active,
.navbar__mobile-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.navbar__mobile-enter-from,
.navbar__mobile-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.navbar__mobile-enter-to,
.navbar__mobile-leave-from {
  opacity: 1;
  max-height: 400px;
}
</style>