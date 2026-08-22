

export default function Impact() {
  return (
    <section
          id="impact"
          className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24"
        >
          <div className="max-w-2xl">
            <span
              className="hd-eyebrow inline-flex items-center gap-2.5 border-s-2 px-3 py-1 border-primary text-muted"
              ><span
                aria-hidden="true"
                className="size-1.5 rounded-pill bg-primary"
              ></span
              >الأثر بالأرقام</span
            >
            <h2 className="mt-4 hd-h1 sm:mt-6">أرقام تُقاس، لا انطباعات</h2>
            <p className="mt-4 hd-lead sm:mt-5 text-muted">
              متوسط النتائج المسجّلة لدى شركائنا بعد اثني عشر شهراً من التشغيل
              الكامل للمنظومة.
            </p>
          </div>
          <dl
            className="mt-8 sm:mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="bg-background px-4 py-5 sm:px-6 sm:py-7">
              <dd className="hd-h2 text-gradient-brand">
                <span dir="ltr" className="hd-num inline-block"
                  >3,400+</span
                >
              </dd>
              <dt className="mt-2 hd-small font-semibold text-foreground">
                عملية توظيف مكتملة
              </dt>
              <p
                className="mt-1 hd-small text-[length:var(--text-caption)] text-muted"
              >
                منذ عام 2019
              </p>
            </div>
            <div className="bg-background px-4 py-5 sm:px-6 sm:py-7">
              <dd className="hd-h2 text-gradient-brand">
                <span dir="ltr" className="hd-num inline-block">42%</span>
              </dd>
              <dt className="mt-2 hd-small font-semibold text-foreground">
                انخفاض في دوران الموظفين
              </dt>
              <p
                className="mt-1 hd-small text-[length:var(--text-caption)] text-muted"
              >
                خلال 12 شهراً
              </p>
            </div>
            <div className="bg-background px-4 py-5 sm:px-6 sm:py-7">
              <dd className="hd-h2 text-gradient-brand">
                <span dir="ltr" className="hd-num inline-block"
                  >18
                  يوم</span
                >
              </dd>
              <dt className="mt-2 hd-small font-semibold text-foreground">
                متوسط زمن إغلاق الوظيفة
              </dt>
              <p
                className="mt-1 hd-small text-[length:var(--text-caption)] text-muted"
              >
                بدلاً من 34 يوماً
              </p>
            </div>
            <div className="bg-background px-4 py-5 sm:px-6 sm:py-7">
              <dd className="hd-h2 text-gradient-brand">
                <span dir="ltr" className="hd-num inline-block">3.4x</span>
              </dd>
              <dt className="mt-2 hd-small font-semibold text-foreground">
                عائد على كلفة التوظيف
              </dt>
              <p
                className="mt-1 hd-small text-[length:var(--text-caption)] text-muted"
              >
                متوسط الشركاء
              </p>
            </div>
          </dl>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <figure className="border border-border bg-background p-5 sm:p-8">
              <figcaption className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="hd-h3">زمن إغلاق الوظيفة</h3>
                  <p className="mt-1 hd-small text-muted">
                    بالأيام، خلال أرباع السنة الأولى من الشراكة
                  </p>
                </div>
                <span className="hd-eyebrow shrink-0 text-muted"
                  ><span dir="ltr" className="hd-num inline-block">2025</span></span
                >
              </figcaption>
              <div
                className="mt-6 flex h-44 sm:mt-9 sm:h-56 items-end justify-between gap-4 border-b border-border"
                role="img"
                aria-label="مخطط أعمدة: زمن إغلاق الوظيفة ينخفض من 34 يوماً في الربع الأول إلى 18 يوماً في الربع الرابع"
              >
                <div className="flex h-full flex-1 flex-col justify-end">
                  <span
                    className="mb-2 text-center hd-small font-bold text-foreground"
                    ><span dir="ltr" className="hd-num inline-block">34</span></span
                  >
                  <div
                    className="w-full bg-gradient-tint border border-border border-b-0"
                    style={{"height":"85%"}}
                  ></div>
                </div>
                <div className="flex h-full flex-1 flex-col justify-end">
                  <span
                    className="mb-2 text-center hd-small font-bold text-foreground"
                    ><span dir="ltr" className="hd-num inline-block">29</span></span
                  >
                  <div
                    className="w-full bg-gradient-tint border border-border border-b-0"
                    style={{"height":"72.5%"}}
                  ></div>
                </div>
                <div className="flex h-full flex-1 flex-col justify-end">
                  <span
                    className="mb-2 text-center hd-small font-bold text-foreground"
                    ><span dir="ltr" className="hd-num inline-block">24</span></span
                  >
                  <div
                    className="w-full bg-gradient-tint border border-border border-b-0"
                    style={{"height":"60%"}}
                  ></div>
                </div>
                <div className="flex h-full flex-1 flex-col justify-end">
                  <span
                    className="mb-2 text-center hd-small font-bold text-foreground"
                    ><span dir="ltr" className="hd-num inline-block">18</span></span
                  >
                  <div
                    className="w-full bg-gradient-mark"
                    style={{"height":"45%"}}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <span
                  dir="ltr"
                  className="hd-num flex-1 pt-3 text-center hd-small text-[length:var(--text-caption)] text-muted"
                  >Q1</span
                ><span
                  dir="ltr"
                  className="hd-num flex-1 pt-3 text-center hd-small text-[length:var(--text-caption)] text-muted"
                  >Q2</span
                ><span
                  dir="ltr"
                  className="hd-num flex-1 pt-3 text-center hd-small text-[length:var(--text-caption)] text-muted"
                  >Q3</span
                ><span
                  dir="ltr"
                  className="hd-num flex-1 pt-3 text-center hd-small text-[length:var(--text-caption)] text-muted"
                  >Q4</span
                >
              </div>
            </figure>
            <figure className="border border-border bg-surface p-5 sm:p-8">
              <figcaption>
                <h3 className="hd-h3">جاهزية المنظومة</h3>
                <p className="mt-1 hd-small text-muted">
                  نسب الاكتمال المقاسة على محفظة الشركاء
                </p>
              </figcaption>
              <ul className="mt-6 space-y-5">
                <li>
                  <div className="flex items-center justify-between gap-4">
                    <span className="hd-small font-semibold text-foreground"
                      >اجتياز مراجعات الالتزام</span
                    ><span className="hd-small font-bold text-foreground"
                      ><span dir="ltr" className="hd-num inline-block"
                        >96%</span
                      ></span
                    >
                  </div>
                  <div
                    className="mt-2 h-2.5 w-full bg-surface-2"
                    role="img"
                    aria-label="اجتياز مراجعات الالتزام: 96%"
                  >
                    <div
                      className="h-full bg-gradient-mark"
                      style={{"width":"96%"}}
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between gap-4">
                    <span className="hd-small font-semibold text-foreground"
                      >اكتمال ملفات الموظفين</span
                    ><span className="hd-small font-bold text-foreground"
                      ><span dir="ltr" className="hd-num inline-block"
                        >92%</span
                      ></span
                    >
                  </div>
                  <div
                    className="mt-2 h-2.5 w-full bg-surface-2"
                    role="img"
                    aria-label="اكتمال ملفات الموظفين: 92%"
                  >
                    <div
                      className="h-full bg-gradient-mark"
                      style={{"width":"92%"}}
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between gap-4">
                    <span className="hd-small font-semibold text-foreground"
                      >تطبيق دورات الأداء</span
                    ><span className="hd-small font-bold text-foreground"
                      ><span dir="ltr" className="hd-num inline-block"
                        >88%</span
                      ></span
                    >
                  </div>
                  <div
                    className="mt-2 h-2.5 w-full bg-surface-2"
                    role="img"
                    aria-label="تطبيق دورات الأداء: 88%"
                  >
                    <div
                      className="h-full bg-gradient-mark"
                      style={{"width":"88%"}}
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between gap-4">
                    <span className="hd-small font-semibold text-foreground"
                      >رضا الموظفين عن الوضوح</span
                    ><span className="hd-small font-bold text-foreground"
                      ><span dir="ltr" className="hd-num inline-block"
                        >84%</span
                      ></span
                    >
                  </div>
                  <div
                    className="mt-2 h-2.5 w-full bg-surface-2"
                    role="img"
                    aria-label="رضا الموظفين عن الوضوح: 84%"
                  >
                    <div
                      className="h-full bg-gradient-mark"
                      style={{"width":"84%"}}
                    ></div>
                  </div>
                </li>
              </ul>
            </figure>
          </div>
          <figure className="relative mt-6 overflow-hidden border border-border">
            <img
              src="/assets/workplace-C6BAUsa9.jpg"
              alt="موظفون سعوديون في مقر شركة بالرياض"
              width="1280"
              height="864"
              loading="lazy"
              className="h-[180px] w-full object-cover sm:h-[320px] md:h-[420px]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-veil"
            ></div>
            <figcaption
              className="absolute bottom-0 w-full p-5 hd-h3 sm:p-8 text-on-dark md:p-10"
            >
              بيئة عمل منظّمة، يشعر بها الإنسان قبل أن تقرأها في التقارير.
            </figcaption>
          </figure>
        </section>
  );
}
