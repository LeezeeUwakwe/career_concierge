<template>
  <div class="page">
  <!-- Hero Section -->
  <Hero />
  <Features />
  <Process />
  <CTA />
  <Footer />

  <!-- Features Section -->

  <!-- How It Works Section -->


  <!-- CTA Section -->

  </div>

  <!-- Footer -->
 
</template>

<script setup lang="ts">
import Hero from "@/components/Home/Hero.vue";
import Features from "@/components/Home/Features.vue";
import Process from "@/components/Home/Process.vue";
import CTA from "@/components/Home/CTA.vue";
import Footer from "@/components/Footer.vue";
import { FileText, Linkedin, Send, Users, TrendingUp } from "lucide-vue-next";
definePageMeta({
  layout: "default",
});
</script>

<style scoped>
/* ===== PAGE ===== */
/* .page {
  min-height: 100vh;
  background-color: #f5f3f0;
} */

/* ===== HERO SECTION ===== */

/* ===== FEATURES SECTION ===== */

/* ===== PROCESS SECTION ===== */

/* ===== CTA SECTION ===== */
.cta {
  padding: 1rem;
  padding-top: 5rem;
  padding-bottom: 8rem;
}

.cta__box {
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(to bottom right, #1e40af, #047857);
  border-radius: 1rem;
  padding: 3rem;
  color: white;
}

.cta__title {
  font-size: 2.25rem;
  font-family: "Georgia", serif;
  font-weight: 300;
  margin-bottom: 1rem;
}

@media (min-width: 640px) {
  .cta__title {
    font-size: 3rem;
  }
}

.cta__text {
  font-size: 1.125rem;
  font-weight: 300;
  color: #dbeafe;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cta__button {
  background-color: white;
  color: #1e40af;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}

.cta__button:hover {
  background-color: #dbeafe;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
}

/* ===== FOOTER ===== */
.footer {
  padding: 1rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: #111827;
  color: #b0b9c3;
}

.footer__container {
  max-width: 80rem;
  margin: 0 auto;
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer__column {
  flex-shrink: 0;
}

.footer__heading {
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.footer__text {
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.5;
}

.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__list li {
  margin-bottom: 0.5rem;
}

.footer__link {
  color: #b0b9c3;
  text-decoration: none;
  transition: color 0.2s;
  font-size: 0.875rem;
  font-weight: 300;
}

.footer__link:hover {
  color: white;
}

.footer__bottom {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  font-size: 0.875rem;
  font-weight: 300;
  text-align: center;
}
</style>
