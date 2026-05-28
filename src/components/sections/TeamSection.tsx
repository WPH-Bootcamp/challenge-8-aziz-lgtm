import React from 'react';
import { projects } from '../../data/team';

const TeamSection: React.FC = () => {
  return (
    <section id="projects" className="bg-white dark:bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-[40px] leading-14 text-center tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] flex-none self-stretch grow-0 mb-4">
            From Vision to Launch! Projects We're Proud Of
          </h2>
          <p className="font-medium text-lg leading-8 text-center text-[#A4A7AE] flex-none order-1 self-stretch grow-0">
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
              <div className="relative w-93.25 h-93.25 rounded-2xl overflow-hidden bg-gray-50 dark:bg-white/6 border border-gray-200 dark:border-white/8 group-hover:border-gray-300 dark:group-hover:border-white/20 transition-all duration-300 mb-4">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute left-0 top-0 w-93.25 h-93.25 object-cover"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-[#717680] dark:text-white/20 text-sm">
                    No preview
                  </div>
                )}
              </div>

              {/* Label + title */}
              <p className="w-93.25 h-7.5 font-medium text-base leading-7.5 text-[#FF623E] flex-none order-0 self-stretch grow-0">
                {project.label}
              </p>
              <h3 className="w-93.25 h-8.5 font-bold text-xl leading-8.5 text-gray-900 dark:text-[#FDFDFD] flex-none order-1 self-stretch grow-0">
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
