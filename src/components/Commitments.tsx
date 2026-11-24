import type { JSX } from "react";
import { commitments } from "../data/content.ts";

export const Commitments = (): JSX.Element => {
  return (
    <section className="border-y border-[#e2e8f0] bg-[#f1f5f9] py-8 sm:py-10" aria-label="Komitmen kami">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-[#e2e8f0] md:grid-cols-3 md:divide-y-0 md:divide-x">
          {commitments.map((item) => (
            <article
              key={item.number}
              className="flex items-start gap-5 py-4 first:pt-0 last:pb-0 md:px-8 md:py-2 md:first:pl-0 md:last:pr-0"
            >
              <span className="text-sm font-bold text-[#3E5BA9]">{item.number}</span>
              <div>
                <h3 className="text-base font-semibold text-[#0f172a]">{item.title}</h3>
                <p className="mt-1 text-sm text-[#64748b]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
