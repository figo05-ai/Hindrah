

export default function MobileCTA() {
  return (
    <div className="hd-cta-dock md:hidden">
        <a
          href="#contact"
          className="hd-focus flex min-h-11 w-full items-center justify-center gap-2 rounded-control bg-gradient-mark px-6 py-3 font-body text-[length:var(--text-body)] font-bold text-primary-foreground shadow-glow"
          >اطلب عرض سعر<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left size-4"
            aria-hidden="true"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path></svg
        ></a>
      </div>
  );
}
