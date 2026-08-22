

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 text-on-dark">
        <div
          className="mx-auto max-w-6xl px-5 pt-14 pb-28 sm:px-6 sm:pt-16 md:pb-16"
        >
          <div
            className="grid gap-10 border-b border-on-dark-border pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12"
          >
            <div className="sm:col-span-2 lg:col-span-4">
              <img
                src="/assets/hindara-logo-white-CAdDfWZc.png"
                alt="هندرة"
                className="h-9 w-auto"
              />
              <p className="mt-5 max-w-sm hd-small text-on-dark-muted">
                شريك الموارد البشرية للمنشآت في السعودية. نبني البنية، ونرشّح
                الملاءمة، ونضع الإنسان أولاً.
              </p>
              <a
                href="#contact"
                className="hd-focus-on-dark hd-interactive mt-7 inline-flex min-h-11 items-center gap-2 rounded-control border border-on-dark-border bg-on-dark-surface px-5 py-3 font-body text-[length:var(--text-small)] font-bold text-on-dark"
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
            <nav aria-label="الخدمات" className="lg:col-span-3">
              <h3 className="hd-eyebrow text-on-dark-muted">الخدمات</h3>
              <ul className="mt-4 space-y-1">
                <li>
                  <a
                    href="#services"
                    className="hd-focus-on-dark inline-flex min-h-10 items-center rounded-control font-body text-[length:var(--text-small)] text-on-dark-muted transition-colors hover:text-on-dark"
                    >الخدمات</a
                  >
                </li>
                <li>
                  <a
                    href="#sectors"
                    className="hd-focus-on-dark inline-flex min-h-10 items-center rounded-control font-body text-[length:var(--text-small)] text-on-dark-muted transition-colors hover:text-on-dark"
                    >القطاعات</a
                  >
                </li>
                <li>
                  <a
                    href="#method"
                    className="hd-focus-on-dark inline-flex min-h-10 items-center rounded-control font-body text-[length:var(--text-small)] text-on-dark-muted transition-colors hover:text-on-dark"
                    >المنهجية</a
                  >
                </li>
                <li>
                  <a
                    href="#plans"
                    className="hd-focus-on-dark inline-flex min-h-10 items-center rounded-control font-body text-[length:var(--text-small)] text-on-dark-muted transition-colors hover:text-on-dark"
                    >الباقات</a
                  >
                </li>
              </ul>
            </nav>
            <nav aria-label="الشركة" className="lg:col-span-3">
              <h3 className="hd-eyebrow text-on-dark-muted">الشركة</h3>
              <ul className="mt-4 space-y-1">
                <li>
                  <a
                    href="#principles"
                    className="hd-focus-on-dark inline-flex min-h-10 items-center rounded-control font-body text-[length:var(--text-small)] text-on-dark-muted transition-colors hover:text-on-dark"
                    >المبادئ</a
                  >
                </li>
                <li>
                  <a
                    href="#impact"
                    className="hd-focus-on-dark inline-flex min-h-10 items-center rounded-control font-body text-[length:var(--text-small)] text-on-dark-muted transition-colors hover:text-on-dark"
                    >الأثر</a
                  >
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hd-focus-on-dark inline-flex min-h-10 items-center rounded-control font-body text-[length:var(--text-small)] text-on-dark-muted transition-colors hover:text-on-dark"
                    >الأسئلة</a
                  >
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hd-focus-on-dark inline-flex min-h-10 items-center rounded-control font-body text-[length:var(--text-small)] text-on-dark-muted transition-colors hover:text-on-dark"
                    >تواصل</a
                  >
                </li>
              </ul>
            </nav>
            <div className="lg:col-span-2">
              <h3 className="hd-eyebrow text-on-dark-muted">تواصل</h3>
              <ul
                className="mt-4 space-y-1 font-body text-[length:var(--text-small)] text-on-dark-muted"
              >
                <li>
                  <a
                    href="mailto:hello@hindara.sa"
                    aria-label="راسلنا عبر البريد الإلكتروني hello@hindara.sa"
                    className="hd-focus-on-dark inline-flex min-h-10 items-center gap-3 rounded-control transition-colors hover:text-on-dark"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail size-4 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect
                        x="2"
                        y="4"
                        width="20"
                        height="16"
                        rx="2"
                      ></rect></svg
                    ><span dir="ltr" className="text-start"
                      >hello@hindara.sa</span
                    ></a
                  >
                </li>
                <li>
                  <a
                    href="tel:+966110000000"
                    aria-label="اتصل بنا على الرقم +966 11 000 0000"
                    className="hd-focus-on-dark inline-flex min-h-10 items-center gap-3 rounded-control transition-colors hover:text-on-dark"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone size-4 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                      ></path></svg
                    ><span dir="ltr" className="hd-num text-start"
                      >+966 11 000 0000</span
                    ></a
                  >
                </li>
                <li className="flex min-h-10 items-center gap-3">
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
                    className="lucide lucide-map-pin size-4 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle></svg
                  >الرياض، المملكة العربية السعودية
                </li>
              </ul>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 pt-8 font-body text-[length:var(--text-caption)] text-on-dark-muted sm:flex-row sm:items-center sm:justify-between"
          >
            <p>
              © <span dir="ltr" className="hd-num inline-block">2026</span> هندرة.
              جميع الحقوق محفوظة.
            </p>
            <a
              href="/privacy"
              className="hd-focus-on-dark inline-flex min-h-10 items-center rounded-control font-semibold transition-colors hover:text-on-dark"
              >سياسة الخصوصية</a
            >
          </div>
        </div>
      </footer>
  );
}
