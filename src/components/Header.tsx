

export default function Header() {
  return (
    <header
        className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl"
      >
        <div
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6"
        >
          <a
            href="#top"
            className="hd-focus flex shrink-0 items-center rounded-control"
            ><img
              src="/assets/hindara-logo-blue-BjifvQIC.png"
              alt="هندرة"
              className="h-8 w-auto"
          /></a>
          <nav
            aria-label="أقسام الصفحة"
            className="hidden items-center gap-5 lg:flex xl:gap-7"
          >
            <a
              href="#principles"
              className="hd-focus rounded-control font-body text-[length:var(--text-small)] font-semibold text-muted transition-colors hover:text-foreground"
              >المبادئ</a
            ><a
              href="#services"
              className="hd-focus rounded-control font-body text-[length:var(--text-small)] font-semibold text-muted transition-colors hover:text-foreground"
              >الخدمات</a
            ><a
              href="#sectors"
              className="hd-focus rounded-control font-body text-[length:var(--text-small)] font-semibold text-muted transition-colors hover:text-foreground"
              >القطاعات</a
            ><a
              href="#method"
              className="hd-focus rounded-control font-body text-[length:var(--text-small)] font-semibold text-muted transition-colors hover:text-foreground"
              >المنهجية</a
            ><a
              href="#impact"
              className="hd-focus rounded-control font-body text-[length:var(--text-small)] font-semibold text-muted transition-colors hover:text-foreground"
              >الأثر</a
            ><a
              href="#plans"
              className="hd-focus rounded-control font-body text-[length:var(--text-small)] font-semibold text-muted transition-colors hover:text-foreground"
              >الباقات</a
            ><a
              href="#faq"
              className="hd-focus rounded-control font-body text-[length:var(--text-small)] font-semibold text-muted transition-colors hover:text-foreground"
              >الأسئلة</a
            ><a
              href="#articles"
              className="hd-focus rounded-control font-body text-[length:var(--text-small)] font-semibold text-muted transition-colors hover:text-foreground"
              >المدونة</a
            ><a
              href="#contact"
              className="hd-focus rounded-control font-body text-[length:var(--text-small)] font-semibold text-muted transition-colors hover:text-foreground"
              >تواصل</a
            >
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hd-focus items-center justify-center gap-2 font-body font-bold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap bg-gradient-mark text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:shadow-raised active:translate-y-0 active:shadow-card text-[length:var(--text-small)] px-4 py-2 rounded-control hidden sm:inline-flex"
              >اطلب عرض سعر</a
            ><button
              type="button"
              aria-label="فتح القائمة"
              aria-expanded="false"
              aria-controls="mobile-nav"
              className="hd-focus hd-interactive inline-flex size-11 items-center justify-center rounded-control border border-border text-foreground lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu size-5"
                aria-hidden="true"
              >
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
  );
}
