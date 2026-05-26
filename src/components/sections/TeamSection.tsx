import React from 'react';
import { projects } from '../../data/team';

const TeamSection: React.FC = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            From Vision to Launch! Projects We're Proud Of
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto">
            Take a closer look at our recent work powering startups, enterprises, and everything in between.
          </p>
        </div>

        {/* 3-column equal grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
            >
              {/* Image preview card */}
              <div className="rounded-2xl overflow-hidden bg-white/6 border border-white/8 group-hover:border-white/20 transition-all duration-300 mb-4">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full object-cover object-top"
                    style={{ height: '240px' }}
                  />
                ) : (
                  <div className="h-60 flex items-center justify-center text-white/20 text-sm">
                    No preview
                  </div>
                )}
              </div>

              {/* Label + title */}
              <p className="text-[#FF5C00] text-sm font-semibold mb-1">
                {project.label}
              </p>
              <h3 className="text-white font-bold text-lg">
                {project.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
