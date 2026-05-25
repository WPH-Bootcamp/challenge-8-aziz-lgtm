import React from 'react';
import { projects } from '../../data/team';

const TeamSection: React.FC = () => {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-[#0a0a0a] py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-16">
          <p className="text-[#FF5C00] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            From Vision to Launch!<br />
            <span className="text-white/25">Projects We're Proud Of</span>
          </h2>
        </div>

        {/* First card large, remaining two smaller — intentional asymmetry */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {featured && (
            <div
              className="lg:col-span-3 group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.07] hover:border-white/[0.15] transition-all duration-300 min-h-[320px] flex flex-col justify-end"
              style={{ background: 'linear-gradient(145deg, #111111, #0d0d0d)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, ${featured.accentColor}, transparent)` }}
              />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />
              {/* Big number watermark */}
              <div
                className="absolute top-6 right-6 text-[7rem] font-black leading-none opacity-[0.04] select-none"
                style={{ color: featured.accentColor }}
              >
                0{featured.id}
              </div>

              <div className="relative p-8">
                <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-1">
                  {featured.label} · {featured.year}
                </p>
                <h3 className="text-white font-black text-2xl mb-4">{featured.name}</h3>
                <div className="flex gap-2 flex-wrap">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full border border-white/[0.08] text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-6 right-6 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/[0.05] transition-all duration-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l10-10M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          )}

          {/* Smaller cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.07] hover:border-white/[0.15] transition-all duration-300 flex-1 min-h-[150px] flex flex-col justify-end"
                style={{ background: 'linear-gradient(145deg, #111111, #0d0d0d)' }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
                />
                <div
                  className="absolute top-4 right-4 text-[4rem] font-black leading-none opacity-[0.04] select-none"
                  style={{ color: project.accentColor }}
                >
                  0{project.id}
                </div>
                <div className="relative p-6">
                  <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-0.5">
                    {project.label} · {project.year}
                  </p>
                  <h3 className="text-white font-black text-lg">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;