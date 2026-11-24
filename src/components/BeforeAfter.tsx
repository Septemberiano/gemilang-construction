import { useState } from "react";
import type { JSX } from "react";

interface TransformationCase {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  beforeImg: string;
  afterImg: string;
  description: string;
  highlights: string[];
}

const CASES: TransformationCase[] = [
  {
    id: "case-1",
    title: "Transformasi Fasad Tropis Modern",
    category: "Renovasi Total Fasad & Struktur",
    location: "BSD City, Tangerang",
    duration: "3.5 Bulan Pengerjaan",
    beforeImg:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Rumah lama era 90-an dengan fasad kusam dan pencahayaan minim dirombak total menjadi hunian tropis berkonsep open-space dengan aksen kisi-kisi kayu ulin dan cross ventilation.",
    highlights: [
      "Perkuatan pondasi cakar ayam untuk penambahan mezanin",
      "Pemasangan fasad kisi-kisi kayu ulin tahan cuaca",
      "Efisiensi energi dengan bukaan kaca ganda (double-glazed)",
    ],
  },
  {
    id: "case-2",
    title: "Living Room & Open Kitchen",
    category: "Desain Interior & Tata Ruang",
    location: "Pondok Indah, Jakarta",
    duration: "2 Bulan Pengerjaan",
    beforeImg:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    description:
      "Penghilangan sekat dinding pembatas yang gelap, digantikan dengan konsep living-dining terintegrasi yang menghadap langsung ke inner garden.",
    highlights: [
      "Pembongkaran dinding partisi non-struktur",
      "Pemasangan custom cabinetry warm oak & indirect lighting",
      "Lantai vinyl SPC motif kayu natural tahan air",
    ],
  },
  {
    id: "case-3",
    title: "Ekspansi Rumah Tumbuh 2 Lantai",
    category: "Peningkatan Lantai & Balcony",
    location: "Sentul City, Bogor",
    duration: "4 Bulan Pengerjaan",
    beforeImg:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description:
      "Menambah lantai dua lengkap dengan master bedroom, rooftop garden, serta penataan ulang tata ruang lantai satu agar lebih ramah anak.",
    highlights: [
      "Dak beton bondek cepat & kuat berstandar SNI",
      "Rooftop semi-outdoor dengan pemandangan perbukitan",
      "Garansi kebocoran dak hingga 3 tahun",
    ],
  },
];

export const BeforeAfter = (): JSX.Element => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100

  const activeCase = CASES[selectedCaseIdx];

  return (
    <section id="transformasi" className="py-16 sm:py-24 bg-[#f1f5f9]/50 border-y border-[#e2e8f0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#3E5BA9] uppercase">
              TRANSFORMASI RUANG NYATA
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
              Sebelum &amp; Sesudah
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[#64748b]">
            Geser garis pemisah di tengah gambar untuk melihat perbandingan langsung antara kondisi awal
            dan hasil akhir karya Gemilang Construction.
          </p>
        </div>

        {/* Case selector tabs */}
        <div className="mt-8 flex flex-wrap gap-3">
          {CASES.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setSelectedCaseIdx(idx);
                setSliderPos(50);
              }}
              className={`rounded-lg px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                selectedCaseIdx === idx
                  ? "bg-[#3E5BA9] text-white shadow-md"
                  : "bg-white text-[#0f172a] hover:bg-[#e2e8f0] border border-[#e2e8f0]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Comparison Viewer Container */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-xl border border-[#e2e8f0]">
          {/* Interactive Image Split Slider */}
          <div className="relative h-[340px] sm:h-[480px] lg:h-[560px] w-full select-none overflow-hidden bg-[#0f172a]">
            {/* After Image (Full background) */}
            <img
              src={activeCase.afterImg}
              alt={`${activeCase.title} - Hasil Akhir`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute top-4 right-4 rounded-md bg-[#3E5BA9] px-3 py-1.5 text-xs font-bold tracking-wider text-white shadow-md">
              SESUDAH (AFTER)
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activeCase.beforeImg}
                alt={`${activeCase.title} - Sebelum Renovasi`}
                className="absolute inset-0 h-full w-full object-cover max-w-none"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="absolute top-4 left-4 rounded-md bg-[#0f172a]/90 px-3 py-1.5 text-xs font-bold tracking-wider text-white shadow-md">
                SEBELUM (BEFORE)
              </div>
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-2xl cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Circular Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-[#3E5BA9] text-white shadow-2xl border-2 border-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
                </svg>
              </div>
            </div>

            {/* Transparent Slider Input overlay for seamless dragging */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="Geser untuk membandingkan sebelum dan sesudah"
              className="absolute inset-0 h-full w-full opacity-0 cursor-ew-resize z-30"
            />
          </div>

          {/* Details below image */}
          <div className="p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e2e8f0] pb-6">
              <div>
                <span className="text-xs font-bold text-[#3E5BA9] uppercase tracking-wider">
                  {activeCase.category}
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-semibold text-[#0f172a]">
                  {activeCase.title}
                </h3>
                <p className="mt-1 text-xs text-[#64748b]">
                  {activeCase.location} • {activeCase.duration}
                </p>
              </div>

              <a
                href="#konsultasi"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-[#3E5BA9] px-6 text-xs font-bold text-white shadow hover:bg-[#2F4687] transition-colors"
              >
                Konsultasikan Renovasi Serupa ↗
              </a>
            </div>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#64748b]">
              {activeCase.description}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeCase.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] p-3 text-xs text-[#0f172a]">
                  <span className="text-[#3E5BA9] font-bold">✓</span>
                  <span className="leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
