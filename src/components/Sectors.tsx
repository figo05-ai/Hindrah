

export default function Sectors() {
  return (
    <section
          id="sectors"
          className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24"
        >
          <div className="max-w-2xl">
            <span
              className="hd-eyebrow inline-flex items-center gap-2.5 border-s-2 px-3 py-1 border-primary text-muted"
              ><span
                aria-hidden="true"
                className="size-1.5 rounded-pill bg-primary"
              ></span
              >القطاعات</span
            >
            <h2 className="mt-4 hd-h1 sm:mt-6">خبرة قطاعية، لا حلول عامة</h2>
            <p className="mt-4 hd-lead sm:mt-5 text-muted">
              لكل قطاع طبيعة قوى عاملة مختلفة؛ نبني النموذج التشغيلي وفق واقع
              قطاعك لا وفق قالب جاهز.
            </p>
          </div>
          <div className="mt-8 sm:mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article
              className="flex items-start gap-4 border-s-2 border-border ps-5 transition-colors duration-300 hover:border-primary"
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
                className="lucide lucide-landmark mt-1 size-5 shrink-0 text-primary"
                aria-hidden="true"
              >
                <path d="M10 18v-7"></path>
                <path
                  d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"
                ></path>
                <path d="M14 18v-7"></path>
                <path d="M18 18v-7"></path>
                <path d="M3 22h18"></path>
                <path d="M6 18v-7"></path>
              </svg>
              <div>
                <h3 className="hd-h3">الخدمات المالية</h3>
                <p className="mt-2 hd-small text-muted">
                  حوكمة صارمة وأدوار دقيقة الصلاحيات.
                </p>
              </div>
            </article>
            <article
              className="flex items-start gap-4 border-s-2 border-border ps-5 transition-colors duration-300 hover:border-primary"
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
                className="lucide lucide-factory mt-1 size-5 shrink-0 text-primary"
                aria-hidden="true"
              >
                <path d="M12 16h.01"></path>
                <path d="M16 16h.01"></path>
                <path
                  d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"
                ></path>
                <path d="M8 16h.01"></path>
              </svg>
              <div>
                <h3 className="hd-h3">الصناعة والتشغيل</h3>
                <p className="mt-2 hd-small text-muted">
                  قوى عاملة ميدانية بجداول ومناوبات منظّمة.
                </p>
              </div>
            </article>
            <article
              className="flex items-start gap-4 border-s-2 border-border ps-5 transition-colors duration-300 hover:border-primary"
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
                className="lucide lucide-shopping-bag mt-1 size-5 shrink-0 text-primary"
                aria-hidden="true"
              >
                <path d="M16 10a4 4 0 0 1-8 0"></path>
                <path d="M3.103 6.034h17.794"></path>
                <path
                  d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"
                ></path>
              </svg>
              <div>
                <h3 className="hd-h3">التجزئة</h3>
                <p className="mt-2 hd-small text-muted">
                  توظيف عالي الحجم مع دوران منخفض.
                </p>
              </div>
            </article>
            <article
              className="flex items-start gap-4 border-s-2 border-border ps-5 transition-colors duration-300 hover:border-primary"
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
                className="lucide lucide-truck mt-1 size-5 shrink-0 text-primary"
                aria-hidden="true"
              >
                <path
                  d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
                ></path>
                <path d="M15 18H9"></path>
                <path
                  d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
                ></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
              <div>
                <h3 className="hd-h3">اللوجستيات</h3>
                <p className="mt-2 hd-small text-muted">
                  هياكل فروع متعددة ومعايير تشغيل موحّدة.
                </p>
              </div>
            </article>
            <article
              className="flex items-start gap-4 border-s-2 border-border ps-5 transition-colors duration-300 hover:border-primary"
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
                className="lucide lucide-heart-pulse mt-1 size-5 shrink-0 text-primary"
                aria-hidden="true"
              >
                <path
                  d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                ></path>
                <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
              </svg>
              <div>
                <h3 className="hd-h3">الرعاية الصحية</h3>
                <p className="mt-2 hd-small text-muted">
                  اعتماد مهني وامتثال دقيق للتراخيص.
                </p>
              </div>
            </article>
            <article
              className="flex items-start gap-4 border-s-2 border-border ps-5 transition-colors duration-300 hover:border-primary"
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
                className="lucide lucide-building2 lucide-building-2 mt-1 size-5 shrink-0 text-primary"
                aria-hidden="true"
              >
                <path d="M10 12h4"></path>
                <path d="M10 8h4"></path>
                <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                <path
                  d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"
                ></path>
                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
              </svg>
              <div>
                <h3 className="hd-h3">المقاولات والعقار</h3>
                <p className="mt-2 hd-small text-muted">
                  إدارة مشاريع كثيفة العمالة بكفاءة.
                </p>
              </div>
            </article>
          </div>
        </section>
  );
}
