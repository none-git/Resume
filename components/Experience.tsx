
import React from 'react';
import { ExperienceItem } from '../types';

const experience: ExperienceItem[] = [
  {
    id: '1',
    role: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2021 - Present',
    description: [
      'Led a team of 5 developers in rebuilding the legacy monolithic application into microservices.',
      'Improved application performance by 40% through code optimization and caching strategies.',
      'Mentored junior developers and conducted code reviews to ensure code quality.'
    ],
    current: true
  },
  {
    id: '2',
    role: 'Frontend Developer',
    company: 'Creative Web Agency',
    period: '2019 - 2021',
    description: [
      'Developed responsive and interactive user interfaces for over 20 client projects using React.',
      'Collaborated with UX/UI designers to implement pixel-perfect designs.',
      'Integrated RESTful APIs and optimized frontend assets for faster load times.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold font-display mb-16 tracking-tight">Experience</h2>
        <div className="relative pl-8 border-l-2 border-[#314368] space-y-16">
          {experience.map((item) => (
            <div key={item.id} className="relative group">
              <div className={`absolute -left-[42px] top-1.5 w-6 h-6 rounded-full border-4 border-background-dark flex items-center justify-center transition-colors duration-300 ${item.current ? 'bg-primary' : 'bg-[#314368] group-hover:bg-primary'}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors">{item.role}</h3>
                <span className={`text-sm font-bold font-mono px-4 py-1.5 rounded-full ${item.current ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                  {item.period}
                </span>
              </div>
              
              <h4 className="text-xl font-medium text-slate-300 mb-6">{item.company}</h4>
              
              <ul className="space-y-4">
                {item.description.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-400 leading-relaxed max-w-3xl">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
