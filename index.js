
    // =====================
    // DATA
    // =====================
    const services = [
      {
        icon: 'ri-global-line',
        num: '01',
        name: 'Static Website',
        price: '₹250 / page',
        short: 'Lightning-fast, modern, SEO ready static site built for performance and elegance.',
        desc: 'Perfect for landing pages, portfolios, and brochure sites. We deliver blazing-fast static websites optimized for search engines and modern browsers no bloat, no clutter.',
        features: [
          'Custom HTML/CSS/JS per page',
          'Mobile responsive by default',
          'SEO meta optimization',
          'Performance-tuned (95+ Lighthouse)',
          'Delivery in 2,5 days',
          'Free 1 revision round',
          'Deployment support included'
        ]
      },
      {
        icon: 'ri-code-box-line',
        num: '02',
        name: 'Dynamic Website',
        price: '₹5,000 - ₹12,000',
        short: 'Full CMS, backend integration, custom functionality. Your site fully alive.',
        desc: 'For businesses needing real backend power user auth, database, CMS, APIs. We architect scalable dynamic sites that grow with your business needs.',
        features: [
          'CMS integration (custom or headless)',
          'Backend API & database setup',
          'User authentication & roles',
          'Custom admin dashboard',
          'Contact forms & dynamic content',
          '3 rounds of revision',
          '30 day post launch support'
        ]
      },
      {
        icon: 'ri-layout-grid-line',
        num: '03',
        name: 'Web Application',
        price: '₹8,000 - ₹20,000',
        short: 'Complex dashboards, SaaS tools, workflow apps full stack engineered.',
        desc: 'Full featured web apps for startups and businesses. We build scalable SaaS dashboards, workflow tools, and complex multi role platforms with modern architecture.',
        features: [
          'Full-stack React + Node/Python backend',
          'Multi role access control',
          'Real-time features & WebSockets',
          'Third party API integration',
          'Cloud deployment (AWS/GCP/Vercel)',
          'Custom data dashboards & analytics',
          'Ongoing sprint based development',
          '60-day extended support'
        ]
      },
      {
        icon: 'ri-shield-check-line',
        num: '05',
        name: 'Maintenance & Support',
        price: 'From ₹1,000/mo',
        short: 'Keep your site healthy, secure, and fast — all year round.',
        desc: 'Post-launch peace of mind. Choose the plan that fits your site\'s needs — from basic bug fixes to fully managed 24/7 support.',
        features: [
          'Basic ₹1,000/mo — Bug fixes + security patches',
          'Standard ₹3,000/mo — Basic + performance monitoring + 24/7 support',
          'Premium ₹5,000/mo — Full support (all of Standard + priority features)',
          'Monthly performance reports',
          'Uptime monitoring',
          'Dedicated Slack/WhatsApp channel',
          'CMS content update assistance'
        ]
      },
    ];

    const team = [
      {
        name: 'Altamash Siddiqui',
        role: 'CEO',
        initials: 'AS',
        color: '#00ffe7',
        bio: 'Visionary founder with a passion for building products that matter. Drives strategy, client relationships, and company culture with relentless focus.',
        github: 'https://github.com/Altamashsiddiqui2003',
        linkedin: 'https://www.linkedin.com/in/altamash-siddiqui-68b417207?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      },
      {
        name: 'Yash Gaikwad',
        role: 'CTO',
        initials: 'YG',
        color: '#7b2fff',
        bio: 'Full-stack architect and open-source enthusiast. Builds systems that are as clean under the hood as they are on screen.',
        github: 'https://github.com/YGCodeScape',
        linkedin: 'https://www.linkedin.com/in/yash-gaikwad-a0969833b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      },
      {
        name: 'Sumedh Kharat',
        role: 'COO',
        initials: 'SK',
        color: '#00ffe7',
        bio: 'Operations wizard who transforms chaos into process. Ensures every project is delivered on time and to spec with zero compromise.',
        github: '#',
        linkedin: '#',
      },
      {
        name: 'Prachi Mittra',
        role: 'CMO',
        initials: 'PM',
        color: '#ff2fa0',
        bio: 'Brand storyteller and digital strategist. Builds OmnimetrixTech\'s voice across every channel with creativity and data-backed precision.',
        github: '#',
        linkedin: '#',
      },
      {
        name: 'Asad Choudhary',
        role: 'CFO',
        initials: 'AC',
        color: '#00ffe7',
        bio: 'Finance strategist keeping the company lean and growth-oriented. Expert in startup finance, pricing strategy, and investor relations.',
        github: '#',
        linkedin:'#',
      },
      {
        name: 'Akash Vishwakarma',
        role: 'CSO',
        initials: 'AV',
        color: '#7b2fff',
        bio: 'Security-first engineer protecting every product we ship. Leads infrastructure security, code audits, and compliance strategy.',
        github: 'https://github.com/AKASH991833',
        linkedin: 'https://www.linkedin.com/in/akash-vishwakarma-48b176258',
      }
    ];

    // =====================
    // CURSOR
    // =====================
    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
    });

    function animRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      cursorRing.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      requestAnimationFrame(animRing);
    }
    animRing();

    document.querySelectorAll('a, button, .service-card, .team-card, .slide-dot, .team-nav-btn').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.style.transform += ' scale(2.5)');
      el.addEventListener('mouseleave', () => cursor.style.transform = cursor.style.transform.replace(' scale(2.5)', ''));
    });

    // =====================
    // NAVBAR
    // =====================
    window.addEventListener('scroll', () => {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    });

    document.getElementById('hamburger').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.toggle('open');
    });
    function closeMobile() {
      document.getElementById('mobileMenu').classList.remove('open');
    }

    // =====================
    // HERO SLIDER
    // =====================
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slide-dot');

    function goToSlide(n) {
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      currentSlide = n;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    setInterval(() => {
      goToSlide((currentSlide + 1) % slides.length);
    }, 5000);

    // =====================
    // PARTICLES
    // =====================
    function createParticles() {
      const container = document.getElementById('particles');
      for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.bottom = '0';
        p.style.setProperty('--dx', (Math.random() - 0.5) * 80 + 'px');
        p.style.animationDuration = (4 + Math.random() * 8) + 's';
        p.style.animationDelay = (Math.random() * 8) + 's';
        p.style.opacity = '0';
        container.appendChild(p);
      }
    }
    createParticles();

    // =====================
    // SERVICE CARDS
    // =====================
    const grid = document.getElementById('servicesGrid');
    services.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <div class="service-icon"><i class="${s.icon}"></i></div>
        <div class="service-num">${s.num}</div>
        <div class="service-name">${s.name}</div>
        <div class="service-price">${s.price}</div>
        <div class="service-desc">${s.short}</div>
        <button class="service-btn" onclick="openModal(${i})">
          View Details <i class="ri-arrow-right-line"></i>
        </button>
      `;
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width * 100).toFixed(1);
        const y = ((e.clientY - r.top) / r.height * 100).toFixed(1);
        card.style.setProperty('--mx', x + '%');
        card.style.setProperty('--my', y + '%');
      });
      grid.appendChild(card);
    });

    // =====================
    // MODAL
    // =====================
    window.openModal = function(i) {
      console.log('Modal opened for service:', i);
      const s = services[i];
      document.getElementById('modalIcon').innerHTML = `<i class="${s.icon}"></i>`;
      document.getElementById('modalTitle').textContent = s.name;
      document.getElementById('modalPrice').textContent = s.price;
      document.getElementById('modalDesc').textContent = s.desc;
      const ul = document.getElementById('modalFeatures');
      ul.innerHTML = s.features.map(f => `<li><i class="ri-check-line"></i> ${f}</li>`).join('');
      const modal = document.getElementById('serviceModal');
      if (modal) {
        modal.classList.add('open');
        console.log('Modal class added');
      } else {
        console.error('Modal element not found');
      }
      document.body.style.overflow = 'hidden';
    };

    window.closeModal = function(e) {
      if (e.target === document.getElementById('serviceModal')) window.closeModalDirect();
    };
    window.closeModalDirect = function() {
      const modal = document.getElementById('serviceModal');
      if (modal) {
        modal.classList.remove('open');
      }
      document.body.style.overflow = '';
    };

    // =====================
    // TEAM SLIDER
    // =====================
    let teamIndex = 0;
    const perView = () => window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const track = document.getElementById('teamTrack');
    const dotsContainer = document.getElementById('teamDots');

    function buildTeam() {
      track.innerHTML = '';
      dotsContainer.innerHTML = '';
      team.forEach((m, i) => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
          <div class="team-avatar" style="border-color:${m.color}; box-shadow:0 0 20px ${m.color}40;">${m.initials}</div>
          <div class="team-role" style="color:${m.color}">${m.role}</div>
          <div class="team-name">${m.name}</div>
          <div class="team-bio">${m.bio}</div>
          <div class="team-socials">
            <a href="${m.github}" target="_blank" class="team-social"><i class="ri-github-line"></i></a>
            <a href="${m.linkedin}" target="_blank" class="team-social"><i class="ri-linkedin-box-line"></i></a>
          </div>
        `;
        track.appendChild(card);

        const dot = document.createElement('div');
        dot.className = 'team-dot' + (i === 0 ? ' active' : '');
        dot.onclick = () => { teamIndex = i; updateTeam(); };
        dotsContainer.appendChild(dot);
      });
    }

    function updateTeam() {
      const pv = perView();
      const maxIndex = Math.max(0, team.length - pv);
      teamIndex = Math.min(Math.max(0, teamIndex), maxIndex);
      const cardW = track.children[0] ? track.children[0].offsetWidth + 24 : 0;
      track.style.transform = `translateX(-${teamIndex * cardW}px)`;
      document.querySelectorAll('.team-dot').forEach((d, i) => d.classList.toggle('active', i === teamIndex));
    }

    function slideTeam(dir) {
      const pv = perView();
      teamIndex = Math.min(Math.max(0, teamIndex + dir), team.length - pv);
      updateTeam();
    }

    buildTeam();
    window.addEventListener('resize', () => { buildTeam(); teamIndex = 0; updateTeam(); });

    // =====================
    // CONTACT FORM
    // =====================
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById('fname');
      const email = document.getElementById('femail');
      const msg = document.getElementById('fmessage');

      [name, email, msg].forEach(f => {
        f.classList.remove('invalid');
      });
      document.querySelectorAll('.field-error').forEach(e => e.classList.remove('show'));

      if (!name.value.trim()) {
        name.classList.add('invalid');
        document.getElementById('fnameErr').classList.add('show');
        valid = false;
      }
      const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailReg.test(email.value.trim())) {
        email.classList.add('invalid');
        document.getElementById('femailErr').classList.add('show');
        valid = false;
      }
      if (!msg.value.trim()) {
        msg.classList.add('invalid');
        document.getElementById('fmessageErr').classList.add('show');
        valid = false;
      }

      if (!valid) return;

      const btn = this.querySelector('.form-submit');
      btn.innerHTML = '<i class="ri-loader-4-line"></i> Sending...';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = '<i class="ri-send-plane-line"></i> Send Message';
        btn.disabled = false;
        const formMsg = document.getElementById('formMsg');
        formMsg.textContent = '✓ Message received! We\'ll reply within 24 hours.';
        formMsg.className = 'form-msg success show';
        this.reset();
        setTimeout(() => formMsg.classList.remove('show'), 5000);
      }, 1600);
    });

    // =====================
    // GSAP ANIMATIONS
    // =====================
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    gsap.from('.hero-eyebrow', { y: 30, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' });
    gsap.from('.hero-title', { y: 50, opacity: 0, duration: 1, delay: 0.5, ease: 'power3.out' });
    gsap.from('.hero-sub', { y: 30, opacity: 0, duration: 0.8, delay: 0.8, ease: 'power3.out' });
    gsap.from('.hero-btns', { y: 30, opacity: 0, duration: 0.8, delay: 1, ease: 'power3.out' });
    gsap.from('.slide-indicators', { y: 20, opacity: 0, duration: 0.6, delay: 1.2, ease: 'power3.out' });
    gsap.from('.scroll-indicator', { y: 20, opacity: 0, duration: 0.6, delay: 1.4, ease: 'power3.out' });

    // Services
    gsap.from('.services-header', {
      scrollTrigger: { trigger: '#services', start: 'top 80%' },
      y: 40, opacity: 1, duration: 0.8, ease: 'power3.out'
    });

    gsap.from('.service-card', {
      scrollTrigger: { trigger: '#services', start: 'top 70%' },
      y: 60, opacity: 1, duration: 0.7,
      stagger: 0.1, ease: 'power3.out', delay: 0.2
    });

    // Team
    gsap.from('.team-header', {
      scrollTrigger: { trigger: '#team', start: 'top 80%' },
      y: 40, opacity: 0, duration: 0.8, ease: 'power3.out'
    });

    gsap.from('.team-slider-wrapper', {
      scrollTrigger: { trigger: '#team', start: 'top 70%' },
      y: 50, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.2
    });

    // Vision
    gsap.from('.vision-inner > div:first-child', {
      scrollTrigger: { trigger: '#vision', start: 'top 75%' },
      x: -60, opacity: 0, duration: 0.9, ease: 'power3.out'
    });

    gsap.from('.stat-card', {
      scrollTrigger: { trigger: '#vision', start: 'top 70%' },
      y: 40, opacity: 1, duration: 0.7,
      stagger: 0.12, ease: 'power3.out', delay: 0.2
    });

    // Counter animation
    document.querySelectorAll('.stat-num[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          let cur = 0;
          const step = target / 40;
          const interval = setInterval(() => {
            cur = Math.min(cur + step, target);
            el.textContent = Math.round(cur) + suffix;
            if (cur >= target) clearInterval(interval);
          }, 30);
        }
      });
    });

    // Contact
    gsap.from('.contact-inner > div', {
      scrollTrigger: { trigger: '#contact', start: 'top 75%' },
      y: 50, opacity: 0, duration: 0.8,
      stagger: 0.2, ease: 'power3.out'
    });

    // Nav active state on scroll
    const sections = ['hero', 'services', 'team', 'vision', 'contact'];
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.offsetTop - 120;
        const bot = top + el.offsetHeight;
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (link) link.style.color = scrollY >= top && scrollY < bot ? 'var(--neon)' : '';
      });
    });

    // MODAL EVENT LISTENERS
    const modalOverlay = document.getElementById('serviceModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalCtaBtn = document.getElementById('modalCtaBtn');

    if (modalOverlay) {
      modalOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
          closeModalDirect();
        }
      });
    }

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModalDirect);
    }

    if (modalCtaBtn) {
      modalCtaBtn.addEventListener('click', closeModalDirect);
    }

    // Make functions globally accessible
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.closeModalDirect = closeModalDirect;

    console.log('%c OmnimetrixTech', 'font-size:20px; color:#00ffe7; font-weight:bold;');
    console.log('%c Built with neon precision ⚡', 'color:#7b2fff;');
