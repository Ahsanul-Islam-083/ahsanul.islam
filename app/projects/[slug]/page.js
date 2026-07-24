
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

// Read JSON data
function getProjects() {
  const filePath = path.join(process.cwd(), 'public', 'projects.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }) {
  const projects = getProjects();
  // Next.js 15+ requires params to be awaited
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div 
      className="min-h-screen pt-20 sm:pt-28 pb-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 w-full transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-primary)" }}
    >
      <div className="w-full space-y-8 sm:space-y-10">

        {/* Navigation - Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 group text-[var(--accent)] hover:text-[var(--accent-hover)]"
          >
            <FaArrowLeft className="transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Showcase</span>
          </Link>
        </div>

        {/* 1. PROJECT TITLE & HERO PITCH */}
        <header className="space-y-4">
          <div>
            <span 
              className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full border inline-block"
              style={{ color: "var(--accent)", backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)" }}
            >
              {project.category}
            </span>
          </div>

          <h1 
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h1>

          <p 
            className="text-sm sm:text-base md:text-lg font-light leading-relaxed pt-1"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="pt-2 space-y-2">
            <span 
              className="text-xs font-mono uppercase tracking-widest block"
              style={{ color: "var(--accent)" }}
            >
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 border rounded-lg text-xs font-mono"
                  style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* 2. PROJECT SHOWCASE IMAGE (Right after Title & Description) */}
        <div 
          className="w-full rounded-2xl overflow-hidden border shadow-2xl relative group transition-colors duration-300"
          style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-primary)" }}
        >
          <div className="w-full max-h-[600px] overflow-hidden flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* 3. QUICK ACTIONS & LINKS */}
        <div 
          className="p-5 sm:p-6 rounded-2xl border space-y-4 w-full backdrop-blur-sm transition-colors duration-300"
          style={{ backgroundColor: "color-mix(in srgb, var(--bg-primary) 80%, transparent)", borderColor: "var(--border-color)" }}
        >
          <div>
            <h3 
              className="text-xs font-mono uppercase tracking-widest mb-1"
              style={{ color: "var(--accent)" }}
            >
              Quick Actions
            </h3>
            <p 
              className="text-xs leading-relaxed"
              style={{ color: "color-mix(in srgb, var(--text-secondary) 70%, transparent)" }}
            >
              Explore the live site or inspect the repository.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl transition-all duration-200 font-bold text-sm shadow-md group bg-[var(--accent)] hover:bg-[var(--accent-hover)]"
                style={{ color: "#0F1115" }}
              >
                <span>View Live Site</span>
                <FaExternalLinkAlt className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl border transition-all duration-200 font-medium text-sm group border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{ backgroundColor: "color-mix(in srgb, var(--bg-secondary) 60%, transparent)" }}
              >
                <FaGithub className="text-base" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* 4. DETAILS GRID (Engineering Challenges & Roadmap) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pt-2">

          {/* Engineering Challenges Card */}
          <article 
            className="p-5 sm:p-8 rounded-2xl border space-y-3 w-full backdrop-blur-sm transition-colors duration-300"
            style={{ backgroundColor: "color-mix(in srgb, var(--bg-primary) 40%, transparent)", borderColor: "var(--border-color)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <span 
                className="w-fit px-2.5 py-0.5 rounded-md font-mono text-[11px] uppercase tracking-wider border"
                style={{ 
                  color: "var(--accent)", 
                  backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)", 
                  borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)" 
                }}
              >
                Case Study
              </span>
              <h2 
                className="text-lg sm:text-2xl font-display font-bold leading-snug"
                style={{ color: "var(--text-primary)" }}
              >
                Engineering Challenges
              </h2>
            </div>
            <p 
              className="leading-relaxed text-sm sm:text-base font-light pt-1"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.challenges || "Details coming soon."}
            </p>
          </article>

          {/* Future Roadmap Card */}
          <article 
            className="p-5 sm:p-8 rounded-2xl border space-y-3 w-full backdrop-blur-sm transition-colors duration-300"
            style={{ backgroundColor: "color-mix(in srgb, var(--bg-primary) 40%, transparent)", borderColor: "var(--border-color)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <span 
                className="w-fit px-2.5 py-0.5 rounded-md font-mono text-[11px] uppercase tracking-wider border"
                style={{ 
                  color: "var(--accent)", 
                  backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)", 
                  borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)" 
                }}
              >
                Roadmap
              </span>
              <h2 
                className="text-lg sm:text-2xl font-display font-bold leading-snug"
                style={{ color: "var(--text-primary)" }}
              >
                Future Roadmap & Enhancements
              </h2>
            </div>
            <p 
              className="leading-relaxed text-sm sm:text-base font-light pt-1"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.improvements || "Details coming soon."}
            </p>
          </article>

        </div>

      </div>
    </div>
  );
}