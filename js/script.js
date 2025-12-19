// Minimal site script: replace these sample values with your real data
const data = {
  name: 'Deep Jadav',
  title: 'MCA 2nd year 4th semester',
  location: 'Baroda, Gujarat',
  email: 'deepjadav233@gmail.com',
  phone: '',
  about: 'I am a motivated aspiring Full-Stack Developer with experience in front-end technologies like HTML, CSS, JavaScript, and UI/UX design, along with Python for backend development. I am eager to learn new technologies and contribute to innovative projects.',
  skills: [
    // Frontend
    'HTML5','CSS3','JavaScript (ES6+)','TypeScript','React.js','Next.js',
    // Backend
    'Node.js','Express.js','Python (APIs - basics)',
    // Database / Cloud
    'MongoDB','AWS (basic)',
    // Languages & DSA
    'C++','Java','Data Structures & Algorithms (DSA)'
  ],
  experiences: [
    {title:'Aspiring Full-Stack Developer (Fresher)',period:'',desc:'Hands-on practice with front-end technologies: HTML, CSS, JavaScript. Basic backend development using Python. Understanding of UI/UX design principles and responsive layouts.'}
  ],
  projects: [
    {
      title: 'Customer Segmentation ML',
      tech: 'Jupyter Notebook, Python',
      desc: 'A machine learning project focused on customer segmentation.',
      link: 'https://github.com/deepjadav233/Customer-Segmentation-ML'
    },
    {
      title: 'Deep CV',
      tech: 'JavaScript, HTML, CSS',
      desc: 'Personal CV website built with modern web technologies.',
      link: 'https://github.com/deepjadav233/deep.cv'
    },
    {
      title: 'Dijkstra\'s Algorithm Visualization using Pygame',
      tech: 'Python, Pygame',
      desc: 'Visualization of Dijkstra\'s algorithm for pathfinding.',
      link: 'https://github.com/deepjadav233/Dijkstra-s-Algorithm-Visualization-using-Pygame'
    },
    {
      title: 'Commerce Hub',
      tech: 'HTML, CSS, JavaScript',
      desc: 'A modern, responsive e-commerce website featuring product categories, shopping cart, user dashboard, search functionality, and intuitive navigation.',
      link: 'https://github.com/deepjadav233/commerce_hub-main'
    },
    {
      title: 'TechNet Platform',
      tech: 'Tech stack not specified',
      desc: 'Description not available',
      link: 'https://github.com/deepjadav233/TechNet-platform-main'
    }
  ],
  resume: '', // set to a relative path like 'assets/Resume.pdf' if you add one
  github: 'https://github.com/deepjadav233',
  linkedin: 'https://www.linkedin.com/in/deepjadav03?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  twitter: ''
}

console.log('Script loaded, data:', data);

function populateContent() {
  console.log('populateContent called');
  console.log('Data object:', data);
  try {
    const nameEl = document.getElementById('name')
    if (nameEl) nameEl.textContent = data.name
    const titleEl = document.getElementById('title')
    if (titleEl) titleEl.textContent = data.title
    const locationEl = document.getElementById('location')
    if (locationEl) locationEl.textContent = `${data.location} • ${data.email} ${data.phone? '• '+data.phone : ''}`
    const metaEl = document.getElementById('meta')
    if(metaEl) metaEl.textContent = 'DOB: 22/03/2004 • University: Parul University'
    const aboutEl = document.getElementById('aboutText')
    if (aboutEl) aboutEl.textContent = data.about
    const emailEl = document.getElementById('email')
    if (emailEl) emailEl.textContent = `Email: ${data.email}`

  // Group skills into categories
  const frontend = ['HTML5','CSS3','JavaScript (Basics)','Responsive Web Design','UI / UX Design','User Interface (UI) Design','User Experience (UX) Basics','Wireframing (Basic)','Simple & Clean Design Approach']
  const backend = ['Python (Basics)','Basic Backend Logic','Programming Concepts','Basic Data Structures','Problem Solving','Logical Thinking']
  const infra = ['Visual Studio Code','Git (Basic)','Debugging Basics']
  const langs = ['Quick Learner','Teamwork','Time Management','Willingness to Learn']

  // Combine backend, databases & cloud into one array for skillsInfra
  const combinedInfra = [...backend, ...infra]

  function renderList(id, arr){
    const el = document.getElementById(id)
    if(!el) return
    arr.forEach(s=>{
      const chip = document.createElement('div')
      chip.className = 'chip'
      chip.textContent = s
      el.appendChild(chip)
    })
  }

  renderList('skillsFrontend', frontend)
  renderList('skillsBackend', backend)
  renderList('skillsLang', langs)
  renderList('skillsInfra', infra)

  const experienceList = document.getElementById('experienceList')
  if (experienceList) {
    data.experiences.forEach(e=>{
      const card = document.createElement('article')
      card.className = 'card'
      card.innerHTML = `
      <h3>${e.title}</h3>
      <p class="meta">${e.period || ''}</p>
      <p>${e.desc}</p>
    `
      experienceList.appendChild(card)
    })
  }

  const projectsList = document.getElementById('projectsList')
  if (projectsList) {
    data.projects.forEach(p=>{
      const card = document.createElement('article')
      card.className = 'card'
      card.innerHTML = `
      <h3>${p.title}</h3>
      <p class="meta">${p.tech || ''}</p>
      <p>${p.desc}</p>
      ${p.link?`<p><a href="${p.link}" target="_blank" rel="noopener" class="btn ghost">View Project</a></p>`:''}
    `
      projectsList.appendChild(card)
    })
  }

  // Social links
  const github = document.getElementById('githubLink')
  if(github) github.href = data.github || '#'
  const linkedin = document.getElementById('linkedinLink')
  if(linkedin) linkedin.href = data.linkedin || '#'
  const emailBtn = document.getElementById('emailBtn')
  if(emailBtn) emailBtn.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}`
  // Twitter link removed

  const resumeLink = document.getElementById('resumeLink')
  if(resumeLink){
    if(data.resume){
      resumeLink.href = data.resume
    } else {
      resumeLink.style.display = 'none'
    }
  }

  // Remove any leftover default contact paragraph that says "If you'd like to reach me" or contains a placeholder email
  // This ensures old placeholder text like "you@example.com" is removed if it exists in the page.
  try{
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT)
    const toRemove = []
    while(walker.nextNode()){
      const el = walker.currentNode
      if(el.children.length === 0 && el.textContent){
        const txt = el.textContent.trim()
        if(/If you'?d like to reach me/i.test(txt) || /you@example\.com/i.test(txt)){
          toRemove.push(el)
        }
      }
    }
    toRemove.forEach(n=>n.remove())
  }catch(e){
    // non-fatal
    console.warn('cleanup:', e)
  }

  // Contact Button Functionality
  const btn = document.getElementById('contactBtn')
  if (btn) {
    btn.addEventListener('click', function() {
      const mailtoLink = 'mailto:deepjadav233@gmail.com?subject=Hello%20from%20your%20site&body=Hi%20Deep%2C%0D%0A%0D%0AI%20saw%20your%20CV%20and%20would%20like%20to%20connect.'
      window.location.href = mailtoLink
    })
  }

  // Email link is now a direct mailto link in HTML
  } catch (error) {
    console.error('Error in DOM manipulation:', error);
  }
}

document.addEventListener('DOMContentLoaded', populateContent);

// Also try to run immediately in case DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', populateContent);
} else {
  populateContent();
}
