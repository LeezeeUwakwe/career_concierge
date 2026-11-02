<template>
  <section class="hero">
    <!-- Animated background -->
    <div class="hero__bg">
      <div class="hero__bg-glow hero__bg-glow--blue"></div>
      <div class="hero__bg-glow hero__bg-glow--teal"></div>
      <div class="hero__bg-grid"></div>
    </div>

    <div class="hero__container">
      <div class="hero__grid">
        <!-- Left: Text Content -->
        <div class="hero__content">
          <div class="hero__badge">
            <span class="hero__badge-dot"></span>
            Trusted by 2,000+ professionals
          </div>

          <h1 class="hero__title">
            Stop applying.
            <br />
            <span class="hero__title-highlight">Start preparing.</span>
          </h1>

          <p class="hero__subtitle">
            Your personal career concierge handles the job search — optimized
            resumes, daily applications, and strategic positioning. You focus on
            interviews.
          </p>

          <div class="hero__actions">
            <button class="hero__btn hero__btn--primary">
              Book Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="hero__btn hero__btn--secondary">
              Explore Services
            </button>
          </div>

          <div class="hero__trust">
            <div class="hero__trust-item">
              <span class="hero__trust-number">5-10</span>
              <span class="hero__trust-label">Daily applications</span>
            </div>
            <div class="hero__trust-divider"></div>
            <div class="hero__trust-item">
              <span class="hero__trust-number">3x</span>
              <span class="hero__trust-label">More interviews</span>
            </div>
            <div class="hero__trust-divider"></div>
            <div class="hero__trust-item">
              <span class="hero__trust-number">100%</span>
              <span class="hero__trust-label">ATS-optimized</span>
            </div>
          </div>
        </div>

        <!-- Right: Visual Dashboard -->
        <div class="hero__visual">
          <div class="hero__dashboard">
            <!-- Dashboard Header -->
            <div class="hero__dashboard-header">
              <div class="hero__dashboard-dots">
                <span></span><span></span><span></span>
              </div>
              <span class="hero__dashboard-title">Career Concierge</span>
            </div>

            <!-- Dashboard Content -->
            <div class="hero__dashboard-body">
              <!-- Application Card -->
              <div class="hero__app-card">
                <div class="hero__app-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect
                      x="2"
                      y="2"
                      width="16"
                      height="16"
                      rx="4"
                      stroke="#14B8A6"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6 6H14M6 10H11M6 14H8"
                      stroke="#14B8A6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div class="hero__app-info">
                  <span class="hero__app-company">Stripe</span>
                  <span class="hero__app-role">Senior Product Designer</span>
                </div>
                <span class="hero__app-status">Applied</span>
              </div>

              <div class="hero__app-card">
                <div class="hero__app-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle
                      cx="10"
                      cy="10"
                      r="7"
                      stroke="#312E81"
                      stroke-width="1.5"
                    />
                    <path
                      d="M10 5V10L13 13"
                      stroke="#312E81"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div class="hero__app-info">
                  <span class="hero__app-company">Notion</span>
                  <span class="hero__app-role">Product Manager</span>
                </div>
                <span class="hero__app-status hero__app-status--upcoming"
                  >Upcoming</span
                >
              </div>

              <div class="hero__app-card">
                <div class="hero__app-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M3 15L8 10L11 13L17 7"
                      stroke="#14B8A6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="16"
                      height="16"
                      rx="4"
                      stroke="#14B8A6"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
                <div class="hero__app-info">
                  <span class="hero__app-company">Linear</span>
                  <span class="hero__app-role">Engineering Manager</span>
                </div>
                <span class="hero__app-status hero__app-status--matched"
                  >Matched</span
                >
              </div>

              <!-- Mini Stats -->
              <div class="hero__dashboard-stats">
                <div>
                  <span class="hero__stat-number">12</span>
                  <span class="hero__stat-label">Applications this week</span>
                </div>
                <div>
                  <span class="hero__stat-number">87%</span>
                  <span class="hero__stat-label">Response rate</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating badge -->
          <div class="hero__floating-badge hero__floating-badge--1">
            <span class="hero__floating-emoji">📈</span>
            <span>2x more interviews</span>
          </div>
          <div class="hero__floating-badge hero__floating-badge--2">
            <span class="hero__floating-emoji">⚡</span>
            <span>Daily applications</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ===== HERO ===== */
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 2rem 1.5rem;
  overflow: hidden;
  background: #fafafa;
}

/* ===== BACKGROUND ===== */
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.hero__bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  opacity: 0.4;
}

.hero__bg-glow--blue {
  width: 600px;
  height: 600px;
  top: -200px;
  right: -100px;
  background: radial-gradient(circle, rgba(49, 46, 129, 0.15), transparent 70%);
  animation: floatGlow 12s ease-in-out infinite;
}

.hero__bg-glow--teal {
  width: 500px;
  height: 500px;
  bottom: -150px;
  left: -100px;
  background: radial-gradient(
    circle,
    rgba(20, 184, 166, 0.12),
    transparent 70%
  );
  animation: floatGlow 15s ease-in-out infinite reverse;
}

.hero__bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(
    ellipse at center,
    black 30%,
    transparent 70%
  );
}

@keyframes floatGlow {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, -30px) scale(1.1);
  }
}

/* ===== CONTAINER ===== */
.hero__container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

/* ===== GRID ===== */
.hero__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

@media (max-width: 1024px) {
  .hero__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
}

/* ===== CONTENT ===== */
.hero__content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Badge */
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(49, 46, 129, 0.06);
  border: 1px solid rgba(49, 46, 129, 0.1);
  padding: 0.4rem 1rem 0.4rem 0.6rem;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #312e81;
  width: fit-content;
  letter-spacing: 0.01em;
}

@media (max-width: 1024px) {
  .hero__badge {
    margin: 0 auto;
  }
}

.hero__badge-dot {
  width: 6px;
  height: 6px;
  background: #14b8a6;
  border-radius: 50%;
  display: inline-block;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.8);
  }
}

/* Title */
.hero__title {
  font-family:
    "Plus Jakarta Sans",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  font-size: clamp(2.8rem, 6vw, 4.2rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: #111827;
}

.hero__title-highlight {
  background: linear-gradient(135deg, #312e81 0%, #14b8a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Subtitle */
.hero__subtitle {
  font-size: 1.15rem;
  color: #6b7280;
  line-height: 1.7;
  max-width: 480px;
  font-weight: 400;
}

@media (max-width: 1024px) {
  .hero__subtitle {
    max-width: 560px;
    margin: 0 auto;
  }
}

/* Actions */
.hero__actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  padding-top: 0.25rem;
}

@media (max-width: 1024px) {
  .hero__actions {
    justify-content: center;
  }
}

.hero__btn {
  padding: 0.85rem 2rem;
  border-radius: 60px;
  font-weight: 600;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family:
    "Inter",
    -apple-system,
    sans-serif;
}

.hero__btn--primary {
  background: #312e81;
  color: white;
  box-shadow: 0 8px 24px rgba(49, 46, 129, 0.2);
}

.hero__btn--primary:hover {
  background: #1e1b5e;
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(49, 46, 129, 0.3);
}

.hero__btn--secondary {
  background: transparent;
  color: #374151;
  border: 1.5px solid #e5e7eb;
}

.hero__btn--secondary:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
  transform: translateY(-3px);
}

/* Trust Section */
.hero__trust {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e5e7eb;
  padding-top: 1.5rem;
  margin-top: 0.5rem;
}

@media (max-width: 1024px) {
  .hero__trust {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero__trust {
    flex-wrap: wrap;
    gap: 1rem;
  }
}

.hero__trust-item {
  display: flex;
  flex-direction: column;
}

.hero__trust-number {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.02em;
}

.hero__trust-label {
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 400;
}

.hero__trust-divider {
  width: 1px;
  height: 32px;
  background: #e5e7eb;
}

@media (max-width: 480px) {
  .hero__trust-divider {
    display: none;
  }
}

/* ===== VISUAL DASHBOARD ===== */
.hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__dashboard {
  background: white;
  border-radius: 24px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 24px 60px -16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 440px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.hero__dashboard:hover {
  transform: translateY(-4px);
}

/* Dashboard Header */
.hero__dashboard-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #f3f4f6;
}

.hero__dashboard-dots {
  display: flex;
  gap: 5px;
}

.hero__dashboard-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e5e7eb;
}

.hero__dashboard-dots span:first-child {
  background: #f87171;
}
.hero__dashboard-dots span:nth-child(2) {
  background: #fbbf24;
}
.hero__dashboard-dots span:last-child {
  background: #34d399;
}

.hero__dashboard-title {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #6b7280;
  letter-spacing: 0.02em;
  margin-left: auto;
}

/* Dashboard Body */
.hero__dashboard-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Application Cards */
.hero__app-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  background: #fafafa;
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.hero__app-card:hover {
  background: #f3f4f6;
  border-color: #e5e7eb;
}

.hero__app-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid #e5e7eb;
}

.hero__app-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.hero__app-company {
  font-size: 0.8rem;
  font-weight: 600;
  color: #111827;
}

.hero__app-role {
  font-size: 0.75rem;
  color: #6b7280;
}

.hero__app-status {
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  background: #d1fae5;
  color: #065f46;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.hero__app-status--upcoming {
  background: #dbeafe;
  color: #1e40af;
}

.hero__app-status--matched {
  background: #fef3c7;
  color: #92400e;
}

/* Dashboard Mini Stats */
.hero__dashboard-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-top: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid #f3f4f6;
}

.hero__dashboard-stats > div {
  display: flex;
  flex-direction: column;
  background: #fafafa;
  padding: 0.75rem;
  border-radius: 10px;
}

.hero__stat-number {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
}

.hero__stat-label {
  font-size: 0.7rem;
  color: #6b7280;
}

/* ===== FLOATING BADGES ===== */
.hero__floating-badge {
  position: absolute;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 100px;
  padding: 0.5rem 1.2rem 0.5rem 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #111827;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  animation: floatBadge 6s ease-in-out infinite;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.9);
}

.hero__floating-badge--1 {
  top: -10px;
  right: -20px;
  animation-delay: 0s;
}

.hero__floating-badge--2 {
  bottom: 20px;
  left: -30px;
  animation-delay: 2s;
}

@media (max-width: 768px) {
  .hero__floating-badge {
    display: none;
  }
}

.hero__floating-emoji {
  font-size: 1.1rem;
}

@keyframes floatBadge {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 5rem 1.5rem 3rem;
  }

  .hero__title {
    font-size: 2.4rem;
  }

  .hero__subtitle {
    font-size: 1rem;
  }

  .hero__trust {
    gap: 1.25rem;
    flex-wrap: wrap;
  }

  .hero__dashboard {
    max-width: 100%;
  }

  .hero__bg-glow--blue {
    width: 300px;
    height: 300px;
    top: -100px;
    right: -50px;
  }

  .hero__bg-glow--teal {
    width: 250px;
    height: 250px;
    bottom: -80px;
    left: -50px;
  }
}
</style>
