import { useState } from "react";
import type { FormEvent, JSX } from "react";

export const ConsultationForm = (): JSX.Element => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    location: "",
    service: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    // Direct WhatsApp redirect with Gemilang Construction branding
    const message = encodeURIComponent(
      `Halo Gemilang Construction, saya ${formData.name}. Saya ingin konsultasi mengenai ${formData.service} untuk lokasi di ${formData.location}. Mohon informasi dan penjadwalan survei.`
    );
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };

  return (
    <section id="konsultasi" className="bg-[#222823] py-16 text-[#f7f5f0] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column Copy */}
          <div className="lg:col-span-6 xl:col-span-7">
            <span className="text-xs font-semibold tracking-widest text-[#dfa17d] uppercase">
              KONSULTASI GEMILANG CONSTRUCTION
            </span>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Rencana Anda,
              <br />
              kita mulai
              <br />
              dari sini.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#c6cbc3] sm:text-lg">
              Diskusikan rencana bangun rumah, renovasi, atau pembuatan kanopi &amp; pagar las besi Anda bersama
              tim arsitek dan teknisi ahli <strong>Gemilang Construction</strong>.
            </p>
            <div className="mt-8 flex items-center gap-3 text-xs text-[#aeb7ad]">
              <span className="flex h-2 w-2 rounded-full bg-[#cb542d]" />
              <span>Konsultasi awal &amp; estimasi biaya 100% gratis. Tanpa komitmen.</span>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-6 xl:col-span-5">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-[#f7f5f0] p-6 text-[#222823] shadow-2xl sm:p-8"
            >
              <h3 className="text-xl font-semibold text-[#222823] sm:text-2xl">
                Mari kenali rencana Anda.
              </h3>
              <p className="mt-1 text-xs text-[#697068]">
                Isi form singkat ini, tim kami akan merespons dalam 1x24 jam.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#222823]">
                    Nama lengkap
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Budi Santoso"
                    className="mt-1.5 h-12 w-full rounded-md border border-[#daddd4] bg-white px-4 text-sm text-[#222823] placeholder-[#7a8077] transition-all focus:border-[#cb542d] focus:ring-1 focus:ring-[#cb542d] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#222823]">
                      Nomor WhatsApp
                    </label>
                    <input
                      required
                      type="tel"
                      inputMode="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="08xxxxxxxxxx"
                      className="mt-1.5 h-12 w-full rounded-md border border-[#daddd4] bg-white px-4 text-sm text-[#222823] placeholder-[#7a8077] transition-all focus:border-[#cb542d] focus:ring-1 focus:ring-[#cb542d] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#222823]">
                      Lokasi proyek
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Kota / Kabupaten"
                      className="mt-1.5 h-12 w-full rounded-md border border-[#daddd4] bg-white px-4 text-sm text-[#222823] placeholder-[#7a8077] transition-all focus:border-[#cb542d] focus:ring-1 focus:ring-[#cb542d] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#222823]">
                    Kebutuhan Pekerjaan
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="mt-1.5 h-12 w-full rounded-md border border-[#daddd4] bg-white px-4 text-sm text-[#222823] transition-all focus:border-[#cb542d] focus:ring-1 focus:ring-[#cb542d] focus:outline-none"
                  >
                    <option value="" disabled>
                      Pilih jenis layanan
                    </option>
                    <option value="Bangun Rumah Baru">Bangun rumah baru</option>
                    <option value="Renovasi Bangunan">Renovasi bangunan (parsial / total)</option>
                    <option value="Jasa Las: Kanopi (Kaca/Alderone/Solarflat)">Jasa Las: Kanopi carport / teras</option>
                    <option value="Jasa Las: Pagar & Pintu Gerbang (Laser Cut / Minimalis)">Jasa Las: Pagar &amp; pintu gerbang</option>
                    <option value="Jasa Las: Railing Tangga & Teralis Besi">Jasa Las: Railing tangga, balkon, &amp; teralis</option>
                    <option value="Konstruksi Rangka Baja WF">Konstruksi rangka baja WF &amp; gudang</option>
                    <option value="Bangun Ruang Usaha / Komersial">Bangun ruang usaha / komersial</option>
                    <option value="Desain Interior">Desain interior</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 flex h-13 w-full items-center justify-center rounded-md bg-[#cb542d] px-6 text-sm font-semibold text-white shadow transition-all hover:bg-[#b84825] hover:shadow-md cursor-pointer"
              >
                {submitted
                  ? "✓ Formulir terkirim! Mengalihkan ke WhatsApp..."
                  : "Mulai konsultasi gratis &nbsp;&nbsp;↗"}
              </button>

              <p className="mt-3 text-center text-[11px] text-[#697068]">
                Informasi Anda aman dan hanya digunakan untuk menindaklanjuti konsultasi proyek.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
