import { useState } from "react";
import type { JSX } from "react";
import { projects } from "../data/content.ts";
import type { ProjectItem } from "../types/index.ts";
import { ProjectModal } from "./ProjectModal.tsx";

type CategoryFilter = "all" | "bangun-baru" | "renovasi" | "las" | "interior" | "komersial";

export const Projects = (): JSX.Element => {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>("all");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filterButtons: { key: CategoryFilter; label: string }[] = [
    { key: "all", label: "Semua Proyek" },
    { key: "bangun-baru", label: "Bangun Rumah" },
    { key: "renovasi", label: "Renovasi" },
    { key: "las", label: "Jasa Las & Besi" },
    { key: "interior", label: "Desain Interior" },
    { key: "komersial", label: "Ruang Usaha" },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.categoryKey === selectedFilter);

  return (
    <section id="proyek" className="bg-[#0f172a] py-16 text-[#f8fafc] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#FED7AA] uppercase">
              PORTOFOLIO GEMILANG CONSTRUCTION
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
              Berawal dari rancangan.
              <br />
              Menjadi karya yang nyata.
            </h2>
          </div>
          <p className="max-w-xs text-base text-[#cbd5e1] md:text-right">
            Klik pada setiap proyek untuk melihat rincian spesifikasi, durasi, dan detail pengerjaan.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              type="button"
              onClick={() => setSelectedFilter(btn.key)}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedFilter === btn.key
                  ? "bg-[#3E5BA9] text-white shadow-md"
                  : "bg-[#1e293b] text-[#cbd5e1] hover:bg-[#334155] hover:text-white"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-[#162238] border border-[#1e293b] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FED7AA]/50 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 rounded-md bg-[#0f172a]/90 px-3 py-1 text-[10px] font-bold tracking-wider text-[#FED7AA] backdrop-blur-sm">
                  {project.category}
                </div>

                {/* Click overlay indicator */}
                <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#3E5BA9] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  ↗
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-[#94a3b8]">
                  <span>{project.specs.location}</span>
                  <span>{project.specs.area}</span>
                </div>
                <h3 className="mt-2 text-xl font-medium text-white transition-colors group-hover:text-[#FED7AA] sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#cbd5e1] line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 pt-4 border-t border-[#1e293b] flex items-center justify-between text-xs text-[#FED7AA] font-semibold">
                  <span>Lihat Spesifikasi Lengkap</span>
                  <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Lightbox */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
