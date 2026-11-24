import type { JSX } from "react";
import { advantages } from "../data/content.ts";

export const WhyUs = (): JSX.Element => {
  return (
    <section className="bg-[#f1f5f9] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Philosophy Card */}
          <article className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#3E5BA9] to-[#25396d] p-8 text-white shadow-lg sm:p-10 lg:col-span-5">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#FED7AA] uppercase">
                FILOSOFI KAMI
              </span>
              <h2 className="mt-8 text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Bukan sekadar
                <br />
                membangun.
                <br />
                Tapi menjaga
                <br />
                kepercayaan.
              </h2>
            </div>
            <div className="mt-12 border-t border-[#5576cb] pt-6 text-sm font-medium text-[#FED7AA]">
              Gemilang Construction. &nbsp;/&nbsp; Dibangun dengan sepenuh hati.
            </div>
          </article>

          {/* Advantages List */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <span className="text-xs font-semibold tracking-widest text-[#3E5BA9] uppercase">
              TENANG DI SETIAP TAHAP
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#0f172a] sm:text-4xl">
              Anda punya rencana.
              <br />
              Kami bantu mewujudkannya.
            </h2>

            <div className="mt-8 divide-y divide-[#e2e8f0]">
              {advantages.map((item) => (
                <article key={item.number} className="flex items-start gap-6 py-5">
                  <span className="text-sm font-bold text-[#3E5BA9]">{item.number}</span>
                  <div>
                    <h3 className="text-base font-semibold text-[#0f172a] sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#64748b]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
