import { useState } from "react";
import type { JSX } from "react";
import { faqs } from "../data/content.ts";

export const FAQ = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Title */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-widest text-[#3E5BA9] uppercase">
              SEBELUM MEMULAI
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
              Masih ada
              <br />
              pertanyaan?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#64748b] sm:text-base">
              Kami bantu jelaskan proses kerja, biaya, dan tahapan proyek secara transparan tanpa
              istilah teknis yang rumit.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="divide-y divide-[#e2e8f0] border-y border-[#e2e8f0] lg:col-span-7">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <article key={faq.question} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between gap-4 text-left focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span
                      className={`text-base font-semibold sm:text-lg ${
                        isOpen ? "text-[#3E5BA9]" : "text-[#0f172a]"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f5f9] text-xl font-medium text-[#0f172a]"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`faq-answer-${idx}`} className="mt-4 pr-12">
                      <p className="text-sm leading-relaxed text-[#64748b] sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
