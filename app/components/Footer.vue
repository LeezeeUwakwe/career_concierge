<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <!-- Brand Column -->
        <div class="footer__column footer__column--brand">
          <div class="footer__logo">
            <div class="footer__logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" stroke-width="1.5"/>
                <path d="M8 8H16M8 12H13M8 16H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <span class="footer__logo-text">Career <span class="footer__logo-highlight">Concierge</span></span>
          </div>
          <p class="footer__text">
            Your personal career concierge. We optimize your resume, strengthen your LinkedIn, and apply to jobs for you every day.
          </p>
          <div class="footer__social">
            <a href="#" class="footer__social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Twitter / X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div class="footer__column">
          <h4 class="footer__heading">Services</h4>
          <ul class="footer__list">
            <li><a href="#" class="footer__link">Resume Optimization</a></li>
            <li><a href="#" class="footer__link">LinkedIn Strategy</a></li>
            <li><a href="#" class="footer__link">Daily Applications</a></li>
            <li><a href="#" class="footer__link">Cover Letter Writing</a></li>
            <li><a href="#" class="footer__link">Career Strategy</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div class="footer__column">
          <h4 class="footer__heading">Company</h4>
          <ul class="footer__list">
            <li><a href="#" class="footer__link">About Us</a></li>
            <li><a href="#" class="footer__link">How It Works</a></li>
            <li><a href="#" class="footer__link">Testimonials</a></li>
            <li><a href="#" class="footer__link">Blog</a></li>
            <li><a href="#" class="footer__link">Contact</a></li>
          </ul>
        </div>

        <!-- Legal + Newsletter -->
        <div class="footer__column">
          <h4 class="footer__heading">Legal</h4>
          <ul class="footer__list">
            <li><a href="#" class="footer__link">Privacy Policy</a></li>
            <li><a href="#" class="footer__link">Terms of Service</a></li>
            <li><a href="#" class="footer__link">Cookie Policy</a></li>
          </ul>

          <div class="footer__newsletter">
            <h4 class="footer__heading footer__heading--newsletter">Stay in the loop</h4>
            <p class="footer__newsletter-text">Get job search tips and updates.</p>
            <div class="footer__newsletter-form">
              <input type="email" placeholder="Enter your email" class="footer__newsletter-input" />
              <button class="footer__newsletter-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer__bottom">
        <p class="footer__bottom-text">
          &copy; 2026 Career Concierge. All rights reserved.
        </p>
        <div class="footer__bottom-links">
          <a href="#" class="footer__bottom-link">Privacy</a>
          <span class="footer__bottom-divider">·</span>
          <a href="#" class="footer__bottom-link">Terms</a>
          <span class="footer__bottom-divider">·</span>
          <a href="#" class="footer__bottom-link">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* ===== FOOTER ===== */
.footer {
  background: #111827;
  padding: 4rem 1.5rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.footer__container {
  max-width: 80rem;
  margin: 0 auto;
}

/* ===== GRID ===== */
.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

@media (max-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 640px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

/* ===== BRAND COLUMN ===== */
.footer__column--brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.footer__logo-icon {
  width: 2.2rem;
  height: 2.2rem;
  background: linear-gradient(135deg, #312E81, #14B8A6);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.footer__logo-text {
  font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.02em;
}

.footer__logo-highlight {
  background: linear-gradient(135deg, #312E81 0%, #14B8A6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer__text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.7;
  max-width: 320px;
  font-weight: 400;
}

/* ===== SOCIAL ===== */
.footer__social {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.footer__social-link {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer__social-link:hover {
  background: rgba(255, 255, 255, 0.08);
  color: white;
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.1);
}

/* ===== HEADINGS ===== */
.footer__heading {
  font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.footer__heading--newsletter {
  margin-top: 1.5rem;
}

/* ===== LISTS ===== */
.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer__link {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 400;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-block;
}

.footer__link:hover {
  color: white;
  transform: translateX(3px);
}

/* ===== NEWSLETTER ===== */
.footer__newsletter-text {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 0.75rem;
}

.footer__newsletter-form {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.footer__newsletter-form:focus-within {
  border-color: rgba(20, 184, 166, 0.3);
}

.footer__newsletter-input {
  flex: 1;
  padding: 0.7rem 1rem;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 0.85rem;
  font-family: 'Inter', -apple-system, sans-serif;
  min-width: 0;
}

.footer__newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.footer__newsletter-btn {
  padding: 0.7rem 1rem;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.footer__newsletter-btn:hover {
  color: white;
}

/* ===== BOTTOM BAR ===== */
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer__bottom-text {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
  font-weight: 400;
}

.footer__bottom-links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer__bottom-link {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer__bottom-link:hover {
  color: rgba(255, 255, 255, 0.6);
}

.footer__bottom-divider {
  color: rgba(255, 255, 255, 0.1);
  font-size: 0.8rem;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 640px) {
  .footer {
    padding: 3rem 1rem 1.5rem;
  }

  .footer__bottom {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }

  .footer__bottom-links {
    gap: 0.5rem;
  }

  .footer__text {
    max-width: 100%;
  }

  .footer__newsletter-form {
    max-width: 100%;
  }
}
</style>