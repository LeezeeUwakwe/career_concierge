<template>
  <section class="hero">
    <div class="hero__background"></div>
    <div class="hero__container">
      <div class="hero__content">
        <div class="hero__text-group">
          <h1 class="hero__title">Land your next role</h1>
          <p class="hero__subtitle">
            Your personal career concierge. Optimized resume, daily
            applications, expert guidance—everything you need to succeed.
          </p>
        </div>

        <div class="hero__buttons">
          <button class="hero__btn hero__btn--primary">Get Started</button>
          <button class="hero__btn hero__btn--secondary">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 1rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  overflow: hidden;
}

@media (min-width: 640px) {
  .hero {
    padding-top: 8rem;
    padding-bottom: 10rem;
  }
}
.hero__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Updated gradient for better visibility against the page background */
  background: linear-gradient(180deg, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%);
  z-index: -1;
  /* Ensure it sits behind everything */
}

/* .hero__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 40%, #f0f4f8 100%);
  z-index: -1;
} */

/* Update this part in your existing CSS */
.hero__background::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 800px;
  height: 800px;
  /* Increased opacity slightly for visibility */
  background: radial-gradient(
    circle at center,
    rgba(30, 64, 175, 0.2) 0%,
    rgba(30, 64, 175, 0.08) 40%,
    transparent 100%
  );
  border-radius: 50%;
  pointer-events: none;
  animation: float 6s ease-in-out infinite;
}

.hero__background::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 600px;
  height: 600px;
  /* Increased opacity slightly for visibility */
  background: radial-gradient(
    circle at center,
    rgba(4, 120, 87, 0.15) 0%,
    rgba(4, 120, 87, 0.06) 40%,
    transparent 100%
  );
  border-radius: 50%;
  pointer-events: none;
  animation: float 8s ease-in-out infinite reverse;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-30px) scale(1.05);
  }
}

.hero {
  --blob-1: linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, transparent 50%);
  --blob-2: linear-gradient(-45deg, rgba(4, 120, 87, 0.08) 0%, transparent 50%);
}

.hero::before {
  content: "";
  position: absolute;
  top: -200px;
  right: -100px;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.1) 0%,
    transparent 70%
  );
  border-radius: 45% 55% 50% 50%;
  filter: blur(50px);
  pointer-events: none;
  z-index: 0;
}

.hero::after {
  content: "";
  position: absolute;
  bottom: -150px;
  left: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(16, 185, 129, 0.1) 0%,
    transparent 70%
  );
  border-radius: 50% 45% 55% 50%;
  filter: blur(50px);
  pointer-events: none;
  z-index: 0;
}

.hero__container {
  position: relative;
  z-index: 1;
  max-width: 48rem;
  margin: 0 auto;
}

.hero__content {
  text-align: center;
}

.hero__text-group {
  margin-bottom: 2rem;
}

.hero__title {
  font-size: 3.5rem;
  font-family: "Georgia", serif;
  font-weight: 300;
  color: #111827;
  line-height: 1.2;
  margin-bottom: 1rem;
}

@media (min-width: 640px) {
  .hero__title {
    font-size: 4rem;
  }
}

@media (min-width: 1024px) {
  .hero__title {
    font-size: 4.5rem;
  }
}

.hero__subtitle {
  font-size: 1.125rem;
  color: #4b5563;
  font-weight: 300;
  max-width: 32rem;
  margin: 0 auto;
  line-height: 1.6;
}

@media (min-width: 640px) {
  .hero__subtitle {
    font-size: 1.25rem;
  }
}

.hero__buttons {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 1.5rem;
}

.hero__btn {
  padding: 0.75rem 1.75rem;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.hero__btn--primary {
  background-color: #1e40af;
  color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.hero__btn--primary:hover {
  background-color: #1e3a8a;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hero__btn--secondary {
  border: 1px solid #d1d5db;
  color: #374151;
  background-color: transparent;
}

.hero__btn--secondary:hover {
  background-color: #f3f4f6;
}
</style>
