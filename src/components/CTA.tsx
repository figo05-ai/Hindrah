

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-cta text-on-dark">
          <div
            className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:py-20 md:grid-cols-12 md:items-center"
          >
            <div className="md:col-span-8">
              <h2 className="hd-h1">لنبدأ بتشخيص مجاني لمنظومتك</h2>
              <p className="mt-5 max-w-2xl hd-lead text-on-dark-muted">
                جلسة <span dir="ltr" className="hd-num inline-block">45</span> دقيقة
                مع مستشار هندرة، تخرج منها بخارطة فجوات واضحة وخطة أولويات — بلا
                التزام.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:col-span-4 md:justify-end">
              <button
                type="button"
                className="hd-focus inline-flex items-center justify-center gap-2 font-body font-bold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap bg-background text-foreground shadow-card hover:-translate-y-0.5 hover:shadow-raised active:translate-y-0 active:shadow-card text-[length:var(--text-body)] px-8 py-4 rounded-control hd-focus-on-dark"
              >
                احجز الجلسة<svg
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
                  <path d="M19 12H5"></path>
                </svg></button
              ><button
                type="button"
                className="hd-focus inline-flex items-center justify-center gap-2 font-body font-bold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap hd-focus-on-dark border-2 border-on-dark-border text-on-dark hover:border-on-dark hover:bg-on-dark-surface active:bg-transparent text-[length:var(--text-body)] px-8 py-4 rounded-control"
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
                  className="lucide lucide-users size-4"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle></svg
                >تحدث مع مستشار
              </button>
            </div>
          </div>
        </section>
  );
}
