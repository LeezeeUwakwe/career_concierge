<template>
  <section class="cta">
    <div class="cta__container">
      <div class="cta__box">
        <!-- Background decoration -->
        <div class="cta__glow cta__glow--1"></div>
        <div class="cta__glow cta__glow--2"></div>

        <div class="cta__content">
          <div class="cta__badge">Get Started</div>

          <h2 class="cta__title">
            Ready to stop stressing<br />
            <span class="cta__title-highlight">about your job search?</span>
          </h2>

          <p class="cta__text">
            Book a consultation and let Career Concierge handle the work while you prepare for interviews.
          </p>

          <div class="cta__actions">
            <button class="cta__button cta__button--primary">
              Book Your Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="cta__button cta__button--secondary">
              Explore Services
            </button>
          </div>

          <div class="cta__trust">
            <div class="cta__trust-item">
              <span class="cta__trust-number">2,000+</span>
              <span class="cta__trust-label">Professionals served</span>
            </div>
            <div class="cta__trust-divider"></div>
            <div class="cta__trust-item">
              <span class="cta__trust-number">92%</span>
              <span class="cta__trust-label">Interview rate increase</span>
            </div>
            <div class="cta__trust-divider"></div>
            <div class="cta__trust-item">
              <span class="cta__trust-number">4.9★</span>
              <span class="cta__trust-label">Average rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ===== CTA ===== */
.cta {
  padding: 4rem 1rem 6rem;
  background: #FAFAFA;
}

.cta__container {
  max-width: 80rem;
  margin: 0 auto;
}

/* ===== BOX ===== */
.cta__box {
  position: relative;
  background: linear-gradient(145deg, #312E81 0%, #1E1B5E 50%, #0F0C3A 100%);
  border-radius: 32px;
  padding: 4rem 3rem;
  overflow: hidden;
  isolation: isolate;
}

/* Glow decorations */
.cta__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}

.cta__glow--1 {
  width: 500px;
  height: 500px;
  top: -250px;
  right: -150px;
  background: radial-gradient(circle, rgba(20, 184, 166, 0.25), transparent 70%);
  animation: floatGlow 12s ease-in-out infinite;
}

.cta__glow--2 {
  width: 400px;
  height: 400px;
  bottom: -200px;
  left: -100px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent 70%);
  animation: floatGlow 15s ease-in-out infinite reverse;
}

@keyframes floatGlow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -20px) scale(1.1); }
}

/* ===== CONTENT ===== */
.cta__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
}

/* Badge */
.cta__badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.3rem 1rem;
  border-radius: 100px;
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

/* Title */
.cta__title {
  font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 700;
  color: white;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.cta__title-highlight {
  background: linear-gradient(135deg, #14B8A6, #5EEAD4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Text */
.cta__text {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  line-height: 1.7;
  max-width: 500px;
  margin: 0 auto 2rem;
}

/* ===== ACTIONS ===== */
.cta__actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.cta__button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: 'Inter', -apple-system, sans-serif;
  border: none;
  text-decoration: none;
}

.cta__button--primary {
  background: white;
  color: #312E81;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.cta__button--primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  background: #F9FAFB;
}

.cta__button--primary svg {
  transition: transform 0.2s ease;
}

.cta__button--primary:hover svg {
  transform: translateX(3px);
}

.cta__button--secondary {
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
}

.cta__button--secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.25);
}

/* ===== TRUST ===== */
.cta__trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.cta__trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta__trust-number {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.02em;
}

.cta__trust-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
}

.cta__trust-divider {
  width: 1px;
  height: 32px;
  background: rgba(255, 255, 255, 0.08);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .cta {
    padding: 2rem 1rem 4rem;
  }

  .cta__box {
    padding: 3rem 1.5rem;
    border-radius: 24px;
  }

  .cta__title {
    font-size: 1.8rem;
  }

  .cta__text {
    font-size: 1rem;
  }

  .cta__actions {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .cta__button {
    width: 100%;
    justify-content: center;
    padding: 0.85rem 1.5rem;
  }

  .cta__trust {
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .cta__trust-divider {
    display: none;
  }

  .cta__glow--1 {
    width: 300px;
    height: 300px;
    top: -150px;
    right: -80px;
  }

  .cta__glow--2 {
    width: 250px;
    height: 250px;
    bottom: -100px;
    left: -60px;
  }
}

@media (max-width: 480px) {
  .cta__box {
    padding: 2.5rem 1.25rem;
  }

  .cta__title {
    font-size: 1.5rem;
  }

  .cta__trust-item {
    flex: 1 1 40%;
  }
}
</style>