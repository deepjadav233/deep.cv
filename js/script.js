// Data Object
const data = {
  name: 'Deep Jadav',
  title: 'Full Stack Developer',
  location: 'Baroda, Gujarat',
  email: 'deepjadav233@gmail.com',
  phone: '',
  about: 'I am a motivated aspiring Full-Stack Developer with experience in front-end technologies like HTML, CSS, JavaScript, and UI/UX design, along with Python for backend development. I am eager to learn new technologies and contribute to innovative projects.',
  skills: {
    frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs'],
    languages: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
    infra: ['Git', 'GitHub', 'VS Code', 'MongoDB', 'AWS (Basic)', 'Vercel']
  },
  experiences: [
    {
      title: 'Aspiring Full-Stack Developer',
      period: 'Present',
      desc: 'Hands-on practice with front-end technologies: HTML, CSS, JavaScript. Basic backend development using Python. Understanding of UI/UX design principles and responsive layouts.'
    }
  ],
  projects: [
    {
      title: 'Customer Segmentation ML',
      tech: 'Jupyter Notebook, Python',
      desc: 'A machine learning project focused on customer segmentation using clustering algorithms.',
      link: 'https://github.com/deepjadav233/Customer-Segmentation-ML'
    },
    {
      title: 'Deep CV',
      tech: 'JavaScript, HTML, CSS',
      desc: 'Personal CV website built with modern web technologies, featuring a unique glassmorphism UI.',
      link: 'https://github.com/deepjadav233/deep.cv'
    },
    {
      title: 'Dijkstra\'s Algorithm Viz',
      tech: 'Python, Pygame',
      desc: 'Interactive visualization of Dijkstra\'s algorithm for pathfinding in a grid.',
      link: 'https://github.com/deepjadav233/Dijkstra-s-Algorithm-Visualization-using-Pygame'
    },
    {
      title: 'Commerce Hub',
      tech: 'HTML, CSS, JavaScript',
      desc: 'A modern, responsive e-commerce website featuring product categories, shopping cart, and user dashboard.',
      link: 'https://github.com/deepjadav233/commerce_hub-main'
    },
    {
      title: 'TechNet Platform',
      tech: 'MERN Stack',
      desc: 'Developed a user-friendly job search platform where users can easily find jobs using filters like skills, location, and job type. Built an online Resume Maker that allows users to create professional resumes quickly and easily. Implemented a simple and clean UI to improve user experience and accessibility. Users can search jobs efficiently using advanced filtering options. Focused on helping freshers and job seekers save time in job searching and resume creation.',
      link: 'https://github.com/deepjadav233/TechNet-platform-main'
    }
  ],
  resume: '', // Add path to resume if available
  github: 'https://github.com/deepjadav233',
  linkedin: 'https://www.linkedin.com/in/deepjadav03',
  emailLink: 'mailto:deepjadav233@gmail.com'
};

// Populate Content
function populateContent() {
  try {
    // Basic Info
    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setText('name', data.name);
    // setText('title', data.title); // Title is static in HTML for now or can be dynamic
    setText('location', data.location);
    setText('email', data.email);
    setText('aboutText', data.about);
    setText('meta', 'MCA 2nd Year • Parul University');

    // Skills
    const renderSkills = (id, skills) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = '';
      skills.forEach(skill => {
        const chip = document.createElement('div');
        chip.className = 'chip';
        chip.textContent = skill;
        el.appendChild(chip);
      });
    };

    renderSkills('skillsFrontend', data.skills.frontend);
    renderSkills('skillsBackend', data.skills.backend);
    renderSkills('skillsLang', data.skills.languages);
    renderSkills('skillsInfra', data.skills.infra);

    // Experience
    const expList = document.getElementById('experienceList');
    if (expList) {
      expList.innerHTML = '';
      data.experiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h3>${exp.title}</h3>
          <p class="meta">${exp.period}</p>
          <p>${exp.desc}</p>
        `;
        expList.appendChild(card);
      });
    }

    // Projects
    const projList = document.getElementById('projectsList');
    if (projList) {
      projList.innerHTML = '';
      data.projects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h3>${proj.title}</h3>
          <p class="meta">${proj.tech}</p>
          <p>${proj.desc}</p>
          ${proj.link ? `<a href="${proj.link}" target="_blank" rel="noopener" class="btn ghost">View Code <i class="fab fa-github"></i></a>` : ''}
        `;
        projList.appendChild(card);
      });
    }

    // Links
    const setLink = (id, url) => {
      const el = document.getElementById(id);
      if (el) el.href = url;
    };

    setLink('githubLink', data.github);
    setLink('linkedinLink', data.linkedin);
    setLink('emailBtn', data.emailLink);
    
    // Resume
    const resumeLink = document.getElementById('resumeLink');
    if (resumeLink) {
        if (data.resume) resumeLink.href = data.resume;
        else resumeLink.style.display = 'none';
    }

    // Contact Button
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
      contactBtn.addEventListener('click', () => {
        window.location.href = data.emailLink;
      });
    }

  } catch (error) {
    console.error('Error populating content:', error);
  }
}

// Background Animation (Constellation Effect)
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.fillStyle = 'rgba(0, 243, 255, 0.3)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const initParticles = () => {
    particles = [];
    const count = Math.min(Math.floor(window.innerWidth / 15), 100); // Responsive count
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, width, height);
    
    particles.forEach((p, index) => {
      p.update();
      p.draw();

      // Draw connections
      for (let j = index + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.strokeStyle = `rgba(0, 243, 255, ${0.1 - dist / 1500})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animate);
  };

  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });

  resize();
  initParticles();
  animate();
}

// Mobile Menu
function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active'); // Add animation to bars later if wanted
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }
}

// Intersection Observer for Fade-in Animations
function initObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
  populateContent();
  initCanvas();
  initMobileMenu();
  initObserver();
});
