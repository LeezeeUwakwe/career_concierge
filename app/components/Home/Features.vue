<template>
  <section class="features" id="services">
    <div class="features__container">
      <!-- Header -->
      <div class="features__header">
        <div class="features__badge">What's Included</div>
        <h2 class="features__title">
          Everything you need to<br />
          <span class="features__title-highlight">land your next role</span>
        </h2>
        <p class="features__subtitle">
          Comprehensive support across every stage of your job search — from strategy to execution.
        </p>
      </div>

      <!-- Grid -->
      <div class="features__grid">
        <!-- Resume Optimization -->
        <div class="feature-card" data-delay="0">
          <div class="feature-card__icon-wrapper">
            <div class="feature-card__icon feature-card__icon--indigo">
              <FileText />
            </div>
          </div>
          <h3 class="feature-card__title">Resume Optimization</h3>
          <p class="feature-card__text">
            ATS-friendly resumes with achievement-focused bullet points, strong action verbs, and modern formatting that recruiters love.
          </p>
          <div class="feature-card__tag">Keyword optimized</div>
        </div>

        <!-- LinkedIn Strategy -->
        <div class="feature-card" data-delay="50">
          <div class="feature-card__icon-wrapper">
            <div class="feature-card__icon feature-card__icon--teal">
              <Linkedin />
            </div>
          </div>
          <h3 class="feature-card__title">LinkedIn Strategy</h3>
          <p class="feature-card__text">
            Transform your profile into a recruiter magnet with optimized headlines, About section, and keyword-rich experience.
          </p>
          <div class="feature-card__tag">Recruiter visibility</div>
        </div>

        <!-- Daily Applications -->
        <div class="feature-card" data-delay="100">
          <div class="feature-card__icon-wrapper">
            <div class="feature-card__icon feature-card__icon--indigo">
              <Send />
            </div>
          </div>
          <h3 class="feature-card__title">Daily Applications</h3>
          <p class="feature-card__text">
            5–10 targeted, high-quality applications delivered daily to roles perfectly matched to your background and goals.
          </p>
          <div class="feature-card__tag">5–10 / day</div>
        </div>

        <!-- Cover Letter Support -->
        <div class="feature-card" data-delay="50">
          <div class="feature-card__icon-wrapper">
            <div class="feature-card__icon feature-card__icon--teal">
              <FileText />
            </div>
          </div>
          <h3 class="feature-card__title">Cover Letter Support</h3>
          <p class="feature-card__text">
            Professionally written cover letters tailored to each role, connecting your experience directly to what hiring managers want.
          </p>
          <div class="feature-card__tag">Role-specific</div>
        </div>

        <!-- Expert Consultation -->
        <div class="feature-card" data-delay="0">
          <div class="feature-card__icon-wrapper">
            <div class="feature-card__icon feature-card__icon--indigo">
              <Users />
            </div>
          </div>
          <h3 class="feature-card__title">Career Strategy</h3>
          <p class="feature-card__text">
            1-on-1 consultation to clarify goals, define target roles, industries, salary expectations, and build your roadmap.
          </p>
          <div class="feature-card__tag">Personalized</div>
        </div>

        <!-- Progress Tracking -->
        <div class="feature-card" data-delay="100">
          <div class="feature-card__icon-wrapper">
            <div class="feature-card__icon feature-card__icon--teal">
              <TrendingUp />
            </div>
          </div>
          <h3 class="feature-card__title">Progress Tracking</h3>
          <p class="feature-card__text">
            Real-time dashboard with application history, interview tracking, and insights to keep you informed and confident.
          </p>
          <div class="feature-card__tag">Coming soon</div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <!-- <div class="features__bottom">
        <p class="features__bottom-text">
          Ready to stop applying and start preparing?
        </p>
        <button class="features__bottom-btn">
          Book Your Consultation
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { FileText, Linkedin, Send, Users, TrendingUp } from 'lucide-vue-next'
</script>

<style scoped>
/* ===== FEATURES ===== */
.features {
  padding: 4rem 1rem 6rem;
  background: #FAFAFA;
  position: relative;
  overflow: hidden;
}

/* Subtle background decoration */
.features::before {
  content: '';
  position: absolute;
  top: -300px;
  right: -200px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(49, 46, 129, 0.03) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.features__container {
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* ===== HEADER ===== */
.features__header {
  text-align: center;
  margin-bottom: 4rem;
}

.features__badge {
  display: inline-block;
  background: rgba(49, 46, 129, 0.06);
  border: 1px solid rgba(49, 46, 129, 0.08);
  padding: 0.3rem 1rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #312E81;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.features__title {
  font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #111827;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}

.features__title-highlight {
  background: linear-gradient(135deg, #312E81 0%, #14B8A6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.features__subtitle {
  font-size: 1.1rem;
  color: #6B7280;
  font-weight: 400;
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ===== GRID ===== */
.features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .features__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ===== CARD ===== */
.feature-card {
  padding: 2rem 1.75rem;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 20px;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  cursor: default;
}

/* Card glow on hover */
.feature-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(135deg, transparent 40%, rgba(49, 46, 129, 0.06) 60%, rgba(20, 184, 166, 0.06) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card:hover {
  transform: translateY(-6px);
  border-color: transparent;
  box-shadow: 0 20px 48px -12px rgba(0, 0, 0, 0.08);
}

/* Stagger animation on mount */
.feature-card {
  opacity: 0;
  animation: cardFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.feature-card[data-delay="0"] { animation-delay: 0.05s; }
.feature-card[data-delay="50"] { animation-delay: 0.1s; }
.feature-card[data-delay="100"] { animation-delay: 0.15s; }

@keyframes cardFadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== ICON ===== */
.feature-card__icon-wrapper {
  margin-bottom: 1.25rem;
}

.feature-card__icon {
  width: 3rem;
  height: 3rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.feature-card__icon--indigo {
  background: rgba(49, 46, 129, 0.08);
  color: #312E81;
}

.feature-card:hover .feature-card__icon--indigo {
  background: #312E81;
  color: white;
  transform: scale(1.05);
}

.feature-card__icon--teal {
  background: rgba(20, 184, 166, 0.08);
  color: #14B8A6;
}

.feature-card:hover .feature-card__icon--teal {
  background: #14B8A6;
  color: white;
  transform: scale(1.05);
}

.feature-card__icon svg {
  width: 1.25rem;
  height: 1.25rem;
}

/* ===== CARD CONTENT ===== */
.feature-card__title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.feature-card__text {
  color: #6B7280;
  font-size: 0.9rem;
  line-height: 1.6;
  font-weight: 400;
  margin-bottom: 1rem;
}

.feature-card__tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  color: #6B7280;
  background: #F3F4F6;
  padding: 0.2rem 0.7rem;
  border-radius: 100px;
  letter-spacing: 0.01em;
  transition: all 0.2s ease;
}

.feature-card:hover .feature-card__tag {
  background: rgba(49, 46, 129, 0.06);
  color: #312E81;
}

/* ===== BOTTOM CTA ===== */
.features__bottom {
  text-align: center;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid #E5E7EB;
}

.features__bottom-text {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.features__bottom-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  background: #312E81;
  color: white;
  border: none;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(49, 46, 129, 0.15);
  font-family: 'Inter', -apple-system, sans-serif;
}

.features__bottom-btn:hover {
  background: #1E1B5E;
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(49, 46, 129, 0.25);
}

.features__bottom-btn svg {
  transition: transform 0.2s ease;
}

.features__bottom-btn:hover svg {
  transform: translateX(3px);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 640px) {
  .features {
    padding: 3rem 1rem 4rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .features__bottom-text {
    font-size: 1rem;
  }

  .features__bottom-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>