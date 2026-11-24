import type { JSX } from "react";
import type { ProjectItem } from "../types/index.ts";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps): JSX.Element | null => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-[#0f172a] text-white shadow-2xl border border-[#1e293b]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-[#3E5BA9] cursor-pointer"
          aria-label="Tutup jendela"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative h-64 sm:h-96 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-4 left-4 rounded-md bg-[#3E5BA9] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#cbd5e1]">
            {project.description}
          </p>

          {/* Specs Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-y border-[#1e293b] py-5">
            <div>
              <span className="block text-xs text-[#94a3b8] uppercase">Area / Lingkup</span>
              <strong className="mt-1 block text-sm font-semibold text-white">
                {project.specs.area}
              </strong>
            </div>
            <div>
              <span className="block text-xs text-[#94a3b8] uppercase">Durasi Pengerjaan</span>
              <strong className="mt-1 block text-sm font-semibold text-white">
                {project.specs.duration}
              </strong>
            </div>
            <div>
              <span className="block text-xs text-[#94a3b8] uppercase">Lokasi Proyek</span>
              <strong className="mt-1 block text-sm font-semibold text-white">
                {project.specs.location}
              </strong>
            </div>
            <div>
              <span className="block text-xs text-[#94a3b8] uppercase">Gaya / Spesifikasi</span>
              <strong className="mt-1 block text-sm font-semibold text-white">
                {project.specs.style}
              </strong>
            </div>
          </div>

          {/* CTA in Modal */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#94a3b8]">
              Ingin pengerjaan serupa dari Gemilang Construction?
            </span>
            <a
              href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                `Halo Gemilang Construction, saya tertarik dengan pengerjaan ${project.title} (${project.category}). Bisakah kita jadwalkan survei & konsultasi?`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[#3E5BA9] px-6 text-sm font-semibold text-white shadow hover:bg-[#2F4687] transition-colors"
            >
              Konsultasikan Proyek Ini &nbsp;↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
