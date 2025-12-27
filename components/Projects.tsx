import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'SocialNetwork',
    description:
      'A robust authentication and authorization service provider, designed to be easily integrated into microservices architectures.',
    tags: [
      'Node.js',
      'NestJS',
      'TypeScript',
      'JWT',
      'PostgreSQL',
      'Docker',
      'React',
      'Next.js',
    ],
    imageUrl:
      'https://wallpapers.com/images/hd/social-media-platforms-gw9z05gc8iyb0esl.jpg',
    githubUrl: 'https://github.com/none-git/Social_network',
    icon: 'groups',
  },

  {
    id: '2',
    title: 'ForgeCraft',
    description:
      'A text-based RPG Telegram bot called ForgeCraft where players can adventure, explore dungeons, collect items, and battle each other. Features include a shop, market, guilds, leaderboards, and interactive inline buttons.',
    tags: ['Node.js', 'Supabase', 'Telegram'],
    imageUrl: 'https://github.com/none-git/ForgeCraft/raw/main/forgeCraft.jpg',
    githubUrl: 'https://github.com/none-git/ForgeCraft',
    icon: 'security',
  },
  {
    id: '3',
    title: 'ArcadeVerse',
    description:
      'Front-end development for ArcadeVerse - Game Platform Homepage. Note: Because this project is a single page, none of the links or buttons will take you to another page',
    tags: ['JQuary'],
    imageUrl:
      'https://github.com/none-type1/ArcadeVerse/raw/main/images/sitePreviewDesktop.png?raw=true',
    githubUrl: 'https://github.com/none-git/ArcadeVerse',
    icon: 'bar_chart',
  },
  {
    id: '4',
    title: 'Lightino',
    description:
      'Front-end development for Lightino - Light Shop Homepage. Note: Because this project is a single page, none of the links or buttons will take you to another page. this project is just for desktop.',
    tags: ['JQuary'],
    imageUrl:
      'https://github.com/none-type1/Lightino/raw/main/images/sitePreviewDesktop.png?raw=true',
    githubUrl: 'https://github.com/none-git/Lightino',
    icon: 'shopping_cart',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold font-display">Featured Projects</h2>
          <a
            href="https://github.com/none-git?tab=repositories"
            className="text-primary font-bold text-sm hover:underline flex items-center gap-2 group"
          >
            View all GitHub
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-card-dark rounded-2xl border border-card-border overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a
                    href={project.githubUrl}
                    className="flex bg-white text-black p-3 rounded-full hover:scale-110 transition-transform shadow-xl"
                  >
                    <span className="material-symbols-outlined">code</span>
                  </a>
                </div>
              </div>

              <div className="p-8 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold font-display tracking-tight">
                    {project.title}
                  </h3>
                  <span className="material-symbols-outlined text-slate-500">
                    {project.icon}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
