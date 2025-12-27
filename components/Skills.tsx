import React from 'react';
import { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'web',
    iconColor: 'text-sky-400',
    skills: ['React', 'Next.js', 'TypeScript', 'Fimga'],
  },
  {
    title: 'Backend',
    icon: 'database',
    iconColor: 'text-emerald-400',
    skills: [
      'Node.js',
      'Python',
      'PostgreSQL',
      'Express.js',
      'NestJS',
      'JWT',
      'Postman',
    ],
  },
  {
    title: 'DevOps',
    icon: 'cloud',
    iconColor: 'text-purple-400',
    skills: ['Docker', 'Cloudflare', 'GIT', 'ESLint', 'Prettier'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#222f49] pb-10 mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold font-display tracking-tight">
              Technical Proficiency
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl font-body">
              A curated stack of tools and languages I use to bring ideas to
              life.
            </p>
          </div>
          <div className="text-primary hidden md:block">
            <span className="material-symbols-outlined text-5xl">terminal</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-card-dark border border-card-border p-8 rounded-2xl hover:border-primary/50 transition-all flex flex-col gap-6">
                <div
                  className={`w-14 h-14 rounded-xl bg-slate-800/50 flex items-center justify-center ${cat.iconColor} group-hover:bg-primary group-hover:text-white transition-all duration-300`}
                >
                  <span className="material-symbols-outlined text-3xl">
                    {cat.icon}
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-display">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-full bg-[#222f49] text-xs font-medium text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
