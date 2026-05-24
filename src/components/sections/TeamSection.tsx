import React from 'react';

const projects = [
  { label: 'Landing Page', name: 'Portfolio 1', bg: 'from-orange-600/30 to-orange-900/20' },
  { label: 'Landing Page', name: 'Portfolio 2', bg: 'from-blue-600/20 to-blue-900/20' },
  { label: 'Landing Page', name: 'Portfolio 3', bg: 'from-purple-600/20 to-purple-900/20' },
];

const TeamSection: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            From Vision to Launch! Projects We're Proud Of
          </h2>
          <p className="text-gray-400 text-lg">
            Take a closer look at our recent work powering startups, enterprises, and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer"
            >
              {/* Image placeholder */}
              <div
                className={`h-52 bg-gradient-to-br ${project.bg} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gray-800/40" />
                <span className="relative z-10 text-white font-black text-2xl tracking-tight opacity-30">
                  {project.name}
                </span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-widest mb-1">
                  {project.label}
                </p>
                <h3 className="text-white font-bold text-lg">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;