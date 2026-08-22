

import AnimatedCounter from './AnimatedCounter';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-on-dark">
          <div
            className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 md:grid-cols-12 md:items-center md:gap-8 lg:gap-12 lg:py-24"
          >
            <div className="md:col-span-5">
              <span
                className="inline-flex items-center gap-2.5 rounded-pill border border-on-dark-border px-3.5 py-1.5"
                ><span
                  aria-hidden="true"
                  className="size-1.5 rounded-pill bg-on-dark"
                ></span
                ><span className="hd-eyebrow text-on-dark-muted"
                  >Human Resources, Engineered</span
                ></span
              >
              <h1
                className="mt-5 max-w-[15ch] text-balance font-display text-[clamp(2.5rem,4.4vw,3.5rem)] font-extrabold leading-[1.16] text-on-dark"
              >
                نُعيد هندسة عمليات الموارد البشرية
              </h1>
              <p className="mt-5 max-w-md hd-lead text-on-dark-muted">
                منظومة مهندَسة للمنشآت السعودية: هيكلة واضحة، ملاءمة دقيقة
                للكفاءات، والتزام نظامي قابل للقياس.
              </p>
              <ul className="mt-7 max-w-md space-y-3.5">
                <li className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.72em] flex h-px w-5 shrink-0 items-center bg-on-dark-border"
                    ><span
                      className="block size-1.5 shrink-0 rounded-pill bg-on-dark"
                    ></span></span
                  ><span
                    className="hd-small leading-[var(--leading-normal)] text-on-dark"
                    >هيكل تنظيمي موثّق وأدوار واضحة</span
                  >
                </li>
                <li className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.72em] flex h-px w-5 shrink-0 items-center bg-on-dark-border"
                    ><span
                      className="block size-1.5 shrink-0 rounded-pill bg-on-dark"
                    ></span></span
                  ><span
                    className="hd-small leading-[var(--leading-normal)] text-on-dark"
                    >استقطاب مبني على الملاءمة لا على السِيَر</span
                  >
                </li>
                <li className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.72em] flex h-px w-5 shrink-0 items-center bg-on-dark-border"
                    ><span
                      className="block size-1.5 shrink-0 rounded-pill bg-on-dark"
                    ></span></span
                  ><span
                    className="hd-small leading-[var(--leading-normal)] text-on-dark"
                    >التزام كامل بنظام العمل السعودي</span
                  >
                </li>
              </ul>
              <div
                className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
              >
                <button
                  type="button"
                  className="hd-focus inline-flex items-center justify-center gap-2 font-body font-bold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap bg-background text-foreground shadow-card hover:-translate-y-0.5 hover:shadow-raised active:translate-y-0 active:shadow-card text-[length:var(--text-body)] px-8 py-4 rounded-control"
                >
                  ابدأ الآن<svg
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
                  تصفّح الخدمات
                </button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex -space-x-3 space-x-reverse">
                  <img
                    src="/assets/portrait-1-DY7NZ3-T.jpg"
                    alt=""
                    aria-hidden="true"
                    width="80"
                    height="80"
                    className="size-9 rounded-pill border-2 border-[color:var(--hd-navy-900)] object-cover"
                  /><img
                    src="/assets/portrait-2-DTjkJLqQ.jpg"
                    alt=""
                    aria-hidden="true"
                    width="80"
                    height="80"
                    className="size-9 rounded-pill border-2 border-[color:var(--hd-navy-900)] object-cover"
                  /><img
                    src="/assets/portrait-3-DnSz9kA-.jpg"
                    alt=""
                    aria-hidden="true"
                    width="80"
                    height="80"
                    className="size-9 rounded-pill border-2 border-[color:var(--hd-navy-900)] object-cover"
                  />
                </div>
                <p className="hd-small text-on-dark-muted">
                  <span className="font-bold text-on-dark"
                    ><AnimatedCounter end={4.8} decimals={1} className="hd-num inline-block" /></span
                  >
                  تقييم الشركاء ·
                  <span className="font-bold text-on-dark"
                    ><AnimatedCounter end={120} suffix="+" className="hd-num inline-block" /></span
                  >
                  منشأة
                </p>
              </div>
            </div>
            <div className="md:col-span-7">
              <div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-[auto_auto_auto] lg:gap-5"
              >
                <figure
                  className="overflow-hidden rounded-surface border border-on-dark-border bg-navy-800 sm:col-span-1 sm:row-span-2"
                >
                  <img
                    src="/assets/hero-saudi-leader-nYslpoQY.jpg"
                    alt="قيادية سعودية في بيئة عمل مؤسسية"
                    width="1024"
                    height="1280"
                    fetchPriority="high"
                    className="aspect-[4/5] h-full w-full object-cover object-top sm:aspect-auto sm:min-h-[19rem] lg:min-h-[26rem]"
                  />
                </figure>
                <div
                  tabIndex={0}
                  role="group"
                  aria-label="درجة الملاءمة للأدوار"
                  className="hd-focus-on-dark hd-panel rounded-surface border border-on-dark-border bg-navy-900 p-5 text-on-dark sm:col-span-1 sm:p-4"
                >
                  <p className="hd-eyebrow text-on-dark-muted">Fit Score</p>
                  <ul className="mt-4 space-y-3 sm:mt-3 sm:space-y-2.5">
                    <li>
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className="text-[length:var(--text-caption)] text-on-dark"
                          >مدير موارد بشرية</span
                        ><span
                          className="hd-num text-[length:var(--text-caption)] font-bold text-on-dark"
                          dir="ltr"
                          >94%</span
                        >
                      </div>
                      <div
                        role="progressbar"
                        aria-label="ملاءمة مدير موارد بشرية"
                        aria-valuenow={94}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="mt-1.5 h-1.5 w-full overflow-hidden rounded-pill bg-on-dark-border"
                      >
                        <div
                          className="h-full rounded-pill bg-gradient-mark"
                          style={{"width":"94%"}}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className="text-[length:var(--text-caption)] text-on-dark"
                          >أخصائي رواتب</span
                        ><span
                          className="hd-num text-[length:var(--text-caption)] font-bold text-on-dark"
                          dir="ltr"
                          >88%</span
                        >
                      </div>
                      <div
                        role="progressbar"
                        aria-label="ملاءمة أخصائي رواتب"
                        aria-valuenow={88}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="mt-1.5 h-1.5 w-full overflow-hidden rounded-pill bg-on-dark-border"
                      >
                        <div
                          className="h-full rounded-pill bg-gradient-mark"
                          style={{"width":"88%"}}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className="text-[length:var(--text-caption)] text-on-dark"
                          >مشرف تشغيل</span
                        ><span
                          className="hd-num text-[length:var(--text-caption)] font-bold text-on-dark"
                          dir="ltr"
                          >81%</span
                        >
                      </div>
                      <div
                        role="progressbar"
                        aria-label="ملاءمة مشرف تشغيل"
                        aria-valuenow={81}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="mt-1.5 h-1.5 w-full overflow-hidden rounded-pill bg-on-dark-border"
                      >
                        <div
                          className="h-full rounded-pill bg-gradient-mark"
                          style={{"width":"81%"}}
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  tabIndex={0}
                  role="group"
                  aria-label="متوسط الالتزام النظامي"
                  className="hd-focus-on-dark hd-panel flex items-center justify-between gap-4 rounded-surface border border-on-dark-border bg-navy-900 p-5 text-on-dark sm:col-span-2 sm:order-last sm:p-4"
                >
                  <div className="min-w-0 text-start">
                    <p
                      className="font-display text-[length:var(--text-h3)] font-extrabold text-on-dark"
                    >
                      الالتزام النظامي
                    </p>
                    <p
                      className="mt-1 text-[length:var(--text-caption)] leading-[var(--leading-normal)] text-on-dark-muted"
                    >
                      نتيجة آخر مراجعة لدى الشركاء
                    </p>
                  </div>
                  <div className="relative shrink-0">
                    <svg
                      viewBox="0 0 100 58"
                      className="w-[92px]"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 50 A40 40 0 0 1 90 50"
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.25"
                        strokeWidth="10"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M10 50 A40 40 0 0 1 90 50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray="123.15043202071989 125.66370614359172"
                      ></path></svg
                    ><span
                      dir="ltr"
                      className="hd-num absolute inset-x-0 bottom-0 text-center font-display text-[1.35rem] font-extrabold leading-none"
                      >98%</span
                    >
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="grid grid-cols-6 items-end gap-2 rounded-surface border border-on-dark-border p-4 sm:col-span-1 sm:grid-cols-3"
                >
                  <span
                    className="hd-tri-up block h-6 w-full bg-gradient-mark opacity-90 sm:h-8"
                  ></span
                  ><span
                    className="hd-tri-up block h-9 w-full bg-on-dark-border sm:h-11"
                  ></span
                  ><span
                    className="hd-tri-up block h-5 w-full bg-gradient-mark opacity-60 sm:h-6"
                  ></span
                  ><span
                    className="hd-tri-up block h-8 w-full bg-on-dark-border sm:hidden"
                  ></span
                  ><span
                    className="hd-tri-up block h-6 w-full bg-gradient-mark opacity-75 sm:hidden"
                  ></span
                  ><span
                    className="hd-tri-up block h-4 w-full bg-on-dark-border sm:hidden"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
