const skillCategories = [
  { title: 'Frontend', icon: 'web', iconColor: 'text-sky-400', skills: ['React', 'Next.js', 'TypeScript', 'Figma'] },
  { title: 'Backend', icon: 'database', iconColor: 'text-emerald-400', skills: ['Node.js', 'Python', 'PostgreSQL', 'Express.js', 'NestJS', 'JWT', 'Postman'] },
  { title: 'DevOps', icon: 'cloud', iconColor: 'text-purple-400', skills: ['Docker', 'Cloudflare', 'GIT', 'ESLint', 'Prettier'] },
];

const projects = [
  { id: '1', title: 'RepHub', description: 'Private project', tags: ['Node.js', 'NestJS', 'TypeScript', 'JWT', 'PostgreSQL', 'Docker', 'React', 'Next.js'], imageUrl: 'https://wallpapers.com/images/hd/social-media-platforms-gw9z05gc8iyb0esl.jpg', githubUrl: 'https://github.com/none-git/Social_network', icon: 'groups' },
  { id: '2', title: 'ForgeCraft', description: 'A text-based RPG Telegram bot called ForgeCraft where players can adventure, explore dungeons, collect items, and battle each other. Features include a shop, market, guilds, leaderboards, and interactive inline buttons.', tags: ['Node.js', 'Supabase', 'Telegram'], imageUrl: 'https://github.com/none-git/ForgeCraft/raw/main/website/pictures/background.webp?raw=true', githubUrl: 'https://github.com/none-git/ForgeCraft', icon: 'security' },
  { id: '3', title: 'ArcadeVerse', description: 'Front-end development for ArcadeVerse - Game Platform Homepage.', tags: ['jQuery'], imageUrl: 'https://github.com/none-type1/ArcadeVerse/raw/main/images/sitePreviewDesktop.png?raw=true', githubUrl: 'https://github.com/none-git/ArcadeVerse', icon: 'bar_chart' },
  { id: '4', title: 'Lightino', description: 'Front-end development for Lightino - Light Shop Homepage. Note: this project is just for desktop.', tags: ['jQuery'], imageUrl: 'https://github.com/none-type1/Lightino/raw/main/images/sitePreviewDesktop.png?raw=true', githubUrl: 'https://github.com/none-git/Lightino', icon: 'shopping_cart' },
];

const socialLinks = [
  { name: 'Github', url: 'https://github.com/none-git', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
];

function renderSkills() {
  const container = document.getElementById('skills-container');
  container.innerHTML = skillCategories.map((cat) => `
    <div class="group relative">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div class="relative h-full bg-card-dark border border-card-border p-8 rounded-2xl hover:border-primary/50 transition-all flex flex-col gap-6">
        <div class="w-14 h-14 rounded-xl bg-slate-800/50 flex items-center justify-center ${cat.iconColor} group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <span class="material-symbols-outlined text-3xl">${cat.icon}</span>
        </div>
        <div class="space-y-4">
          <h3 class="text-2xl font-bold font-display">${cat.title}</h3>
          <div class="flex flex-wrap gap-2">
            ${cat.skills.map((s) => `<span class="px-3 py-1 rounded-full bg-[#222f49] text-xs font-medium text-slate-300 border border-white/5">${s}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = projects.map((p) => `
    <div class="group flex flex-col bg-card-dark rounded-2xl border border-card-border overflow-hidden hover:border-primary/50 transition-all">
      <div class="relative aspect-video overflow-hidden">
        <img src="${p.imageUrl}" alt="${p.title}" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
          <a href="${p.githubUrl}" class="flex bg-white text-black p-3 rounded-full hover:scale-110 transition-transform shadow-xl">
            <span class="material-symbols-outlined">code</span>
          </a>
        </div>
      </div>
      <div class="p-8 flex flex-col gap-4">
        <div class="flex justify-between items-start">
          <h3 class="text-2xl font-bold font-display tracking-tight">${p.title}</h3>
          <span class="material-symbols-outlined text-slate-500">${p.icon}</span>
        </div>
        <p class="text-slate-400 text-sm leading-relaxed">${p.description}</p>
        <div class="flex flex-wrap gap-2 mt-2">
          ${p.tags.map((t) => `<span class="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderSocialLinks() {
  const container = document.getElementById('social-links');
  container.innerHTML = socialLinks.map((s) => `
    <a href="${s.url}" class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all shadow-lg" aria-label="${s.name}">
      <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="${s.icon}" />
      </svg>
    </a>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  renderSkills();
  renderProjects();
  renderSocialLinks();

  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });

  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:none00email@gmail.com?subject=${subject}&body=${body}`;
  });
});
