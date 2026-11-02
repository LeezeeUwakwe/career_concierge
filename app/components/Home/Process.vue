<template>
  <section class="process" id="process">
    <div class="process__container">
      <!-- Header -->
      <div class="process__header">
        <div class="process__badge">How It Works</div>
        <h2 class="process__title">
          Your journey to a<br />
          <span class="process__title-highlight">new career</span>
        </h2>
        <p class="process__subtitle">
          From discovery to interviews — we handle the heavy lifting so you can focus on what matters.
        </p>
      </div>

      <!-- Steps -->
      <div class="process__steps">
        <!-- Step 1 -->
        <div class="process__step" data-delay="0">
          <div class="process__step-icon">
            <Users />
          </div>
          <h3 class="process__step-title">We get to know you</h3>
          <p class="process__step-text">
            A deep-dive consultation to understand your goals, experience, target roles, and what makes you unique.
          </p>
          <span class="process__step-detail">45-min discovery call</span>
        </div>

        <!-- Step 2 -->
        <div class="process__step" data-delay="100">
          <div class="process__step-icon process__step-icon--teal">
            <PenTool />
          </div>
          <h3 class="process__step-title">We optimize your presence</h3>
          <p class="process__step-text">
            Resume rewrite, LinkedIn transformation, and tailored cover letters — all positioned to attract recruiters.
          </p>
          <span class="process__step-detail">2–3 day turnaround</span>
        </div>

        <!-- Step 3 -->
        <div class="process__step" data-delay="200">
          <div class="process__step-icon process__step-icon--teal">
            <Send />
          </div>
          <h3 class="process__step-title">We apply every day</h3>
          <p class="process__step-text">
            5–10 targeted, high-quality applications submitted daily to roles perfectly matched to your profile.
          </p>
          <span class="process__step-detail">5–10 applications/day</span>
        </div>

        <!-- Step 4 -->
        <div class="process__step" data-delay="300">
          <div class="process__step-icon process__step-icon--gradient">
            <Briefcase />
          </div>
          <h3 class="process__step-title">You ace the interviews</h3>
          <p class="process__step-text">
            While we track responses and keep the momentum going, you prepare to shine in every interview.
          </p>
          <span class="process__step-detail">Ongoing support</span>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="process__bottom">
        <button class="process__bottom-btn">
          Start Your Journey
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Users, PenTool, Send, Briefcase } from 'lucide-vue-next'
</script>

<style scoped>
/* ===== PROCESS ===== */
.process {
  padding: 4rem 1rem 6rem;
  background: white;
  position: relative;
  overflow: hidden;
}

/* Subtle decorative glow */
.process::after {
  content: '';
  position: absolute;
  bottom: -200px;
  left: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(20, 184, 166, 0.04) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.process__container {
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* ===== HEADER ===== */
.process__header {
  text-align: center;
  margin-bottom: 4rem;
}

.process__badge {
  display: inline-block;
  background: rgba(20, 184, 166, 0.06);
  border: 1px solid rgba(20, 184, 166, 0.08);
  padding: 0.3rem 1rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #14B8A6;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.process__title {
  font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #111827;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}

.process__title-highlight {
  background: linear-gradient(135deg, #312E81 0%, #14B8A6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.process__subtitle {
  font-size: 1.1rem;
  color: #6B7280;
  font-weight: 400;
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ===== STEPS ===== */
.process__steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  position: relative;
}

@media (max-width: 768px) {
  .process__steps {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

/* ===== STEP ===== */
.process__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
  background: #FAFAFA;
  border-radius: 20px;
  border: 1px solid #F3F4F6;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  animation: stepFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  position: relative;
}

.process__step[data-delay="0"] { animation-delay: 0.05s; }
.process__step[data-delay="100"] { animation-delay: 0.1s; }
.process__step[data-delay="200"] { animation-delay: 0.15s; }
.process__step[data-delay="300"] { animation-delay: 0.2s; }

.process__step:hover {
  transform: translateY(-6px);
  border-color: transparent;
  box-shadow: 0 20px 48px -12px rgba(0, 0, 0, 0.06);
  background: white;
}

@keyframes stepFadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== STEP ICON ===== */
.process__step-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 16px;
  background: rgba(49, 46, 129, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  color: #312E81;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.process__step:hover .process__step-icon {
  background: #312E81;
  color: white;
  transform: scale(1.05);
}

.process__step-icon--teal {
  background: rgba(20, 184, 166, 0.08);
  color: #14B8A6;
}

.process__step:hover .process__step-icon--teal {
  background: #14B8A6;
  color: white;
}

.process__step-icon--gradient {
  background: linear-gradient(135deg, rgba(49, 46, 129, 0.08), rgba(20, 184, 166, 0.08));
  color: #312E81;
}

.process__step:hover .process__step-icon--gradient {
  background: linear-gradient(135deg, #312E81, #14B8A6);
  color: white;
}

.process__step-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}

/* ===== STEP CONTENT ===== */
.process__step-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.process__step-text {
  color: #6B7280;
  font-size: 0.9rem;
  line-height: 1.7;
  font-weight: 400;
  max-width: 260px;
  margin: 0 auto 0.75rem;
}

@media (max-width: 768px) {
  .process__step-text {
    max-width: 100%;
  }
}

.process__step-detail {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  color: #312E81;
  background: rgba(49, 46, 129, 0.05);
  padding: 0.2rem 0.9rem;
  border-radius: 100px;
  letter-spacing: 0.01em;
  transition: all 0.2s ease;
}

.process__step:hover .process__step-detail {
  background: rgba(49, 46, 129, 0.08);
}

/* Step 4 gets teal detail */
.process__step:last-child .process__step-detail {
  color: #14B8A6;
  background: rgba(20, 184, 166, 0.06);
}

.process__step:last-child:hover .process__step-detail {
  background: rgba(20, 184, 166, 0.1);
}

/* ===== BOTTOM CTA ===== */
.process__bottom {
  text-align: center;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid #F3F4F6;
}

.process__bottom-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2.4rem;
  background: white;
  color: #312E81;
  border: 1.5px solid #312E81;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: 'Inter', -apple-system, sans-serif;
  background: transparent;
}

.process__bottom-btn:hover {
  background: #312E81;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(49, 46, 129, 0.2);
}

.process__bottom-btn svg {
  transition: transform 0.2s ease;
}

.process__bottom-btn:hover svg {
  transform: translateX(3px);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 640px) {
  .process {
    padding: 3rem 1rem 4rem;
  }

  .process__step {
    padding: 1.75rem 1.25rem;
  }

  .process__bottom-btn {
    width: 100%;
    justify-content: center;
  }
}

/* ===== CONNECTOR LINES (subtle) ===== */
@media (min-width: 769px) {
  .process__steps {
    grid-template-columns: repeat(4, 1fr);
  }

  /* Subtle connector between cards */
  .process__steps::before {
    content: '';
    position: absolute;
    top: 4.5rem;
    left: calc(12.5% + 2rem);
    right: calc(12.5% + 2rem);
    height: 2px;
    background: linear-gradient(90deg, 
      rgba(49, 46, 129, 0.15) 0%, 
      rgba(49, 46, 129, 0.08) 25%,
      rgba(20, 184, 166, 0.08) 75%,
      rgba(20, 184, 166, 0.15) 100%
    );
    pointer-events: none;
  }
}

@media (max-width: 768px) {
  .process__steps::before {
    display: none;
  }
}
</style>