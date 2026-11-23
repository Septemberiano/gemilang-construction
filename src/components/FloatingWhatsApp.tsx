import type { JSX } from "react";

export const FloatingWhatsApp = (): JSX.Element => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/6281234567890?text=Halo%20Gemilang%20Construction%2C%20saya%20ingin%20konsultasi%20mengenai%20rencana%20pembangunan%20%2F%20renovasi%20%2F%20jasa%20las."
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20ba59]"
        aria-label="Chat WhatsApp Konsultasi Gemilang Construction"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75" />

        {/* WhatsApp SVG Icon */}
        <svg
          className="relative h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 2C6.508 2 2.023 6.485 2.023 12.008c0 1.907.534 3.69 1.464 5.215L2.008 22l4.927-1.44a9.96 9.96 0 0 0 5.096 1.45h.004c5.523 0 10.008-4.485 10.008-10.002C22.043 6.485 17.558 2 12.031 2zM12.035 20.08a8.04 8.04 0 0 1-4.223-1.187l-.303-.18-2.92.853.86-2.846-.197-.315a8.04 8.04 0 0 1-1.232-4.4c0-4.453 3.623-8.077 8.08-8.077 4.456 0 8.079 3.624 8.079 8.08 0 4.456-3.623 8.072-8.067 8.072zm4.417-6.07c-.242-.121-1.433-.707-1.656-.788-.222-.08-.384-.121-.546.121-.161.242-.626.788-.767.95-.141.161-.283.181-.525.06-.242-.12-1.022-.376-1.946-1.2-.72-.642-1.206-1.436-1.348-1.678-.141-.242-.015-.373.106-.494.109-.108.242-.282.363-.424.121-.141.161-.242.242-.403.08-.162.04-.303-.02-.424-.06-.121-.546-1.314-.748-1.8-.196-.474-.395-.41-.546-.418-.141-.008-.303-.008-.465-.008-.161 0-.424.06-.646.303-.222.242-.848.828-.848 2.02 0 1.192.868 2.344.99 2.505.12.162 1.708 2.607 4.138 3.657.578.25 1.03.4 1.383.512.58.185 1.109.159 1.527.097.466-.07 1.434-.586 1.636-1.152.202-.566.202-1.05.141-1.152-.06-.1-.222-.16-.464-.282z" />
        </svg>

        {/* Text */}
        <span className="relative hidden sm:inline text-xs font-bold tracking-wide">
          Konsultasi WhatsApp
        </span>
      </a>
    </div>
  );
};
