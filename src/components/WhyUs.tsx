import type { JSX } from "react";
import { advantages } from "../data/content.ts";

export const WhyUs = (): JSX.Element => {
  return (
    <section className="bg-[#eaece4] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Philosophy Card */}
          <article className="flex flex-col justify-between rounded-2xl bg-[#cb542d] p-8 text-white shadow-lg sm:p-10 lg:col-span-5">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#f7e8de] uppercase">
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
            <div className="mt-12 border-t border-[#dc896b] pt-6 text-sm font-medium text-[#f7e8de]">
              Gemilang Construction. &nbsp;/&nbsp; Dibangun dengan sepenuh hati.
            </div>
          </article>

          {/* Advantages List */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <span className="text-xs font-semibold tracking-widest text-[#cb542d] uppercase">
              TENANG DI SETIAP TAHAP
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#222823] sm:text-4xl">
              Anda punya rencana.
              <br />
              Kami bantu mewujudkannya.
            </h2>

            <div className="mt-8 divide-y divide-[#d0d5c9]">
              {advantages.map((item) => (
                <article key={item.number} className="flex items-start gap-6 py-5">
                  <span className="text-sm font-bold text-[#cb542d]">{item.number}</span>
                  <div>
                    <h3 className="text-base font-semibold text-[#222823] sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#697068]">
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
