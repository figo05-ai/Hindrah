

export default function Plans() {
  return (
    <section
          id="plans"
          className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24"
        >
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span
                className="hd-eyebrow inline-flex items-center gap-2.5 border-s-2 px-3 py-1 border-primary text-muted"
                ><span
                  aria-hidden="true"
                  className="size-1.5 rounded-pill bg-primary"
                ></span
                >الباقات</span
              >
              <h2 className="mt-4 hd-h1 sm:mt-6">اختر مستوى الشراكة المناسب</h2>
            </div>
            <p className="font-body text-[length:var(--text-small)] text-muted">
              أسعار واضحة بلا رسوم مخفية — بالريال السعودي شهرياً.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
            <article
              className="flex flex-col rounded-surface p-6 sm:p-8 border border-border bg-background"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="hd-h3">الأساسية</h3>
              </div>
              <p
                className="mt-2 text-[length:var(--text-caption)] leading-[var(--leading-relaxed)] text-muted"
              >
                للمنشآت الناشئة التي تبني أول منظومة موارد بشرية.
              </p>
              <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span
                  className="font-display font-extrabold leading-none text-[clamp(2.25rem,7vw,2.75rem)] text-primary"
                  ><span dir="ltr" className="hd-num inline-block"
                    >9,400</span
                  ></span
                ><span className="text-[length:var(--text-caption)] text-muted"
                  >ريال / شهرياً</span
                >
              </div>
              <ul
                className="mt-6 grid flex-1 grid-cols-1 gap-3 border-t pt-6 border-border"
              >
                <li
                  className="flex items-start gap-3 hd-small leading-[var(--leading-normal)] text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-pill bg-primary mt-[0.7em]"
                  ></span
                  >مراجعة الهيكل التنظيمي
                </li>
                <li
                  className="flex items-start gap-3 hd-small leading-[var(--leading-normal)] text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-pill bg-primary mt-[0.7em]"
                  ></span
                  >عقود وسياسات متوافقة نظاماً
                </li>
                <li
                  className="flex items-start gap-3 hd-small leading-[var(--leading-normal)] text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-pill bg-primary mt-[0.7em]"
                  ></span
                  >توظيف حتى 3 أدوار شهرياً
                </li>
                <li
                  className="flex items-start gap-3 hd-small leading-[var(--leading-normal)] text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-pill bg-primary mt-[0.7em]"
                  ></span
                  >تقرير أداء شهري
                </li>
              </ul>
              <button
                type="button"
                className="hd-focus inline-flex items-center justify-center gap-2 font-body font-bold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap border-2 border-border text-foreground hover:border-primary hover:text-primary hover:bg-surface active:bg-surface-2 text-[length:var(--text-body)] px-8 py-4 rounded-control mt-6 w-full"
              >
                ابدأ الآن
              </button>
            </article>
            <article
              className="flex flex-col rounded-surface p-6 sm:p-8 bg-gradient-section text-on-dark shadow-raised"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="hd-h3 text-on-dark">النمو</h3>
                <span
                  className="inline-flex items-center gap-2 rounded-pill font-body font-semibold bg-[color:var(--on-dark-surface)] text-[color:var(--on-dark)] border border-[color:var(--on-dark-border)] text-[length:var(--text-caption)] px-3 py-1"
                  >الأكثر طلباً</span
                >
              </div>
              <p
                className="mt-2 text-[length:var(--text-caption)] leading-[var(--leading-relaxed)] text-on-dark-muted"
              >
                للشركات المتوسطة التي توسّع فرقها بسرعة.
              </p>
              <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span
                  className="font-display font-extrabold leading-none text-[clamp(2.25rem,7vw,2.75rem)] text-on-dark"
                  ><span dir="ltr" className="hd-num inline-block"
                    >17,900</span
                  ></span
                ><span
                  className="text-[length:var(--text-caption)] text-on-dark-muted"
                  >ريال / شهرياً</span
                >
              </div>
              <ul
                className="mt-6 grid flex-1 grid-cols-1 gap-3 border-t pt-6 border-on-dark-border"
              >
                <li
                  className="flex items-start gap-3 hd-small leading-[var(--leading-normal)] text-on-dark-muted"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-pill bg-on-dark mt-[0.7em]"
                  ></span
                  >كل مزايا الباقة الأساسية
                </li>
                <li
                  className="flex items-start gap-3 hd-small leading-[var(--leading-normal)] text-on-dark-muted"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-pill bg-on-dark mt-[0.7em]"
                  ></span
                  >توظيف غير محدود للأدوار التشغيلية
                </li>
                <li
                  className="flex items-start gap-3 hd-small leading-[var(--leading-normal)] text-on-dark-muted"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-pill bg-on-dark mt-[0.7em]"
                  ></span
                  >نظام إدارة أداء متكامل
                </li>
                <li
                  className="flex items-start gap-3 hd-small leading-[var(--leading-normal)] text-on-dark-muted"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-pill bg-on-dark mt-[0.7em]"
                  ></span
                  >هيكل رواتب ومزايا معاير
                </li>
                <li
                  className="flex items-start gap-3 hd-small leading-[var(--leading-normal)] text-on-dark-muted"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-pill bg-on-dark mt-[0.7em]"
                  ></span
                  >مدير حساب مخصص
                </li>
              </ul>
              <button
                type="button"
                className="hd-focus inline-flex items-center justify-center gap-2 font-body font-bold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap bg-background text-foreground shadow-card hover:-translate-y-0.5 hover:shadow-raised active:translate-y-0 active:shadow-card text-[length:var(--text-body)] px-8 py-4 rounded-control mt-6 w-full"
              >
                ابدأ الآن
              </button>
            </article>
            <article
              className="flex flex-col rounded-surface p-6 sm:p-8 border border-border bg-background"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="hd-h3">المؤسسية</h3>
              </div>
              <p
                className="mt-2 text-[length:var(--text-caption)] leading-[var(--leading-relaxed)] text-muted"
              >
                لمجموعات الشركات ذات الفروع والكيانات المتعددة.
              </p>
              <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span
                  className="font-display font-extrabold leading-none text-[clamp(2rem,6vw,2.25rem)] text-primary"
                  ><span dir="ltr" className="hd-num inline-block"
                    >حسب الطلب</span
                  ></span
                >
              </div>
              <ul
                className="mt-6 grid flex-1 grid-cols-1 gap-3 border-t pt-6 border-border"
              >
                <li
                  className="flex items-start gap-3 hd-small leading-[var(--leading-normal)] text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-pill bg-primary mt-[0.7em]"
                  ></span
                  >كل مزايا باقة النمو
                </li>
                <li
                  className="flex items-start gap-3 hd-small leading-[var(--leading-normal)] text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-pill bg-primary mt-[0.7em]"
                  ></span
                  >استشارات تنفيذية وبحث قيادي
                </li>
                <li
                  className="flex items-start gap-3 hd-small leading-[var(--leading-normal)] text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-pill bg-primary mt-[0.7em]"
                  ></span
                  >مواءمة متعددة الكيانات
                </li>
                <li
                  className="flex items-start gap-3 hd-small leading-[var(--leading-normal)] text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-pill bg-primary mt-[0.7em]"
                  ></span
                  >لوحة مؤشرات ودعم على مدار الأسبوع
                </li>
              </ul>
              <button
                type="button"
                className="hd-focus inline-flex items-center justify-center gap-2 font-body font-bold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap border-2 border-border text-foreground hover:border-primary hover:text-primary hover:bg-surface active:bg-surface-2 text-[length:var(--text-body)] px-8 py-4 rounded-control mt-6 w-full"
              >
                ابدأ الآن
              </button>
            </article>
          </div>
        </section>
  );
}
