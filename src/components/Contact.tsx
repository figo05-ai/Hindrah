

export default function Contact() {
  return (
    <section
          id="contact"
          className="relative overflow-hidden bg-gradient-section text-on-dark"
        >
          <div
            className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:gap-8 sm:px-6 sm:py-16 md:grid-cols-12 md:gap-10 lg:gap-14 lg:py-24"
          >
            <div className="md:col-span-5 md:pt-2">
              <span
                className="hd-eyebrow inline-flex items-center gap-2.5 border-s-2 border-on-dark px-3 py-1 text-on-dark-muted"
                ><span
                  aria-hidden="true"
                  className="size-1.5 rounded-pill bg-on-dark"
                ></span
                >طلب عرض سعر</span
              >
              <h2 className="mt-6 hd-h1 text-on-dark">اطلب عرضاً مخصصاً لمنشأتك</h2>
              <p className="mt-4 max-w-md hd-lead sm:mt-5 text-on-dark-muted">
                أربعة حقول فقط تكفي لنعرف احتياجك، ويعود إليك مستشار هندرة بعرض
                واضح يشمل النطاق والمدة والكلفة.
              </p>
              <ul className="mt-5 space-y-2 sm:mt-9 sm:space-y-3">
                <li
                  className="flex items-start gap-3 rounded-surface border border-on-dark-border bg-on-dark-surface px-3.5 py-2.5 sm:gap-3.5 sm:px-4 sm:py-3.5"
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
                    className="lucide lucide-clock mt-0.5 size-4 shrink-0 sm:size-5 text-on-dark"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path></svg
                  ><span className="hd-small text-on-dark-muted"
                    >رد خلال يوم عمل واحد، وعرض مكتوب خلال ثلاثة أيام.</span
                  >
                </li>
                <li
                  className="flex items-start gap-3 rounded-surface border border-on-dark-border bg-on-dark-surface px-3.5 py-2.5 sm:gap-3.5 sm:px-4 sm:py-3.5"
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
                    className="lucide lucide-shield-check mt-0.5 size-4 shrink-0 sm:size-5 text-on-dark"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                    <path d="m9 12 2 2 4-4"></path></svg
                  ><span className="hd-small text-on-dark-muted"
                    >بياناتك تُستخدم لهذا الطلب فقط ولا تُشارك مع أي جهة.</span
                  >
                </li>
              </ul>
              <div
                className="mt-5 grid grid-cols-2 gap-2 border-t border-on-dark-border pt-4 sm:mt-8 sm:gap-3 sm:pt-7 lg:grid-cols-1"
              >
                <a
                  href="mailto:sales@hindara.sa"
                  aria-label="راسلنا على البريد الإلكتروني sales@hindara.sa"
                  className="hd-focus-on-dark hd-interactive flex min-h-11 items-center gap-3 rounded-control px-1 text-on-dark"
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
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect></svg
                  ><span dir="ltr" className="hd-small text-start"
                    >sales@hindara.sa</span
                  ></a
                ><a
                  href="tel:+966110000000"
                  aria-label="اتصل بنا على الرقم +966 11 000 0000"
                  className="hd-focus-on-dark hd-interactive flex min-h-11 items-center gap-3 rounded-control px-1 text-on-dark"
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
                  ><span dir="ltr" className="hd-num hd-small text-start"
                    >+966 11 000 0000</span
                  ></a
                >
              </div>
            </div>
            <div className="md:col-span-7">
              <form
                noValidate
                className="rounded-surface border border-border bg-background p-4 shadow-raised sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute -z-10 h-0 w-0 overflow-hidden opacity-0"
                >
                  <label htmlFor="company_website">لا تملأ هذا الحقل</label
                  ><input
                    id="company_website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    name="company_website"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div>
                    <label
                      htmlFor="lead-name"
                      className="hd-small font-semibold text-foreground"
                      >الاسم الكامل</label
                    ><input
                      id="lead-name"
                      type="text"
                      maxLength={100}
                      autoComplete="name"
                      placeholder="مثال: سارة العتيبي"
                      className="hd-focus mt-2 w-full rounded-field border border-border bg-background px-4 py-3 hd-small text-foreground placeholder:text-muted transition-colors hover:border-primary/40 focus:border-primary"
                      name="name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lead-email"
                      className="hd-small font-semibold text-foreground"
                      >البريد الإلكتروني للعمل</label
                    ><input
                      id="lead-email"
                      type="email"
                      dir="ltr"
                      maxLength={255}
                      autoComplete="email"
                      placeholder="name@company.sa"
                      className="hd-focus mt-2 w-full rounded-field border border-border bg-background px-4 py-3 hd-small text-foreground placeholder:text-muted transition-colors hover:border-primary/40 focus:border-primary text-start"
                      name="email"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <fieldset data-group="size">
                      <legend className="hd-small font-semibold text-foreground">
                        حجم المنشأة (عدد الموظفين)
                      </legend>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <button
                          type="button"
                          aria-pressed="false"
                          dir="ltr"
                          className="hd-focus hd-interactive min-h-11 rounded-pill border px-4 py-2 font-body text-[length:var(--text-caption)] font-semibold hd-num border-border bg-background text-muted hover:text-foreground"
                        >
                          1–50</button
                        ><button
                          type="button"
                          aria-pressed="false"
                          dir="ltr"
                          className="hd-focus hd-interactive min-h-11 rounded-pill border px-4 py-2 font-body text-[length:var(--text-caption)] font-semibold hd-num border-border bg-background text-muted hover:text-foreground"
                        >
                          51–200</button
                        ><button
                          type="button"
                          aria-pressed="false"
                          dir="ltr"
                          className="hd-focus hd-interactive min-h-11 rounded-pill border px-4 py-2 font-body text-[length:var(--text-caption)] font-semibold hd-num border-border bg-background text-muted hover:text-foreground"
                        >
                          201–1,000</button
                        ><button
                          type="button"
                          aria-pressed="false"
                          dir="ltr"
                          className="hd-focus hd-interactive min-h-11 rounded-pill border px-4 py-2 font-body text-[length:var(--text-caption)] font-semibold hd-num border-border bg-background text-muted hover:text-foreground"
                        >
                          1,000+
                        </button>
                      </div>
                      <input type="hidden" name="size" value="" />
                    </fieldset>
                  </div>
                  <div className="sm:col-span-2">
                    <fieldset data-group="interest">
                      <legend className="hd-small font-semibold text-foreground">
                        الخدمة المطلوبة
                      </legend>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <button
                          type="button"
                          aria-pressed="false"
                          className="hd-focus hd-interactive min-h-11 rounded-pill border px-4 py-2 font-body text-[length:var(--text-caption)] font-semibold border-border bg-background text-muted hover:text-foreground"
                        >
                          الهيكلة التنظيمية</button
                        ><button
                          type="button"
                          aria-pressed="false"
                          className="hd-focus hd-interactive min-h-11 rounded-pill border px-4 py-2 font-body text-[length:var(--text-caption)] font-semibold border-border bg-background text-muted hover:text-foreground"
                        >
                          الاستقطاب والتوظيف</button
                        ><button
                          type="button"
                          aria-pressed="false"
                          className="hd-focus hd-interactive min-h-11 rounded-pill border px-4 py-2 font-body text-[length:var(--text-caption)] font-semibold border-border bg-background text-muted hover:text-foreground"
                        >
                          الالتزام النظامي</button
                        ><button
                          type="button"
                          aria-pressed="false"
                          className="hd-focus hd-interactive min-h-11 rounded-pill border px-4 py-2 font-body text-[length:var(--text-caption)] font-semibold border-border bg-background text-muted hover:text-foreground"
                        >
                          إدارة الأداء</button
                        ><button
                          type="button"
                          aria-pressed="false"
                          className="hd-focus hd-interactive min-h-11 rounded-pill border px-4 py-2 font-body text-[length:var(--text-caption)] font-semibold border-border bg-background text-muted hover:text-foreground"
                        >
                          الرواتب والمزايا
                        </button>
                      </div>
                      <input type="hidden" name="interest" value="" />
                    </fieldset>
                  </div>
                  <div className="sm:col-span-2">
                    <div>
                      <label
                        htmlFor="lead-message"
                        className="hd-small font-semibold text-foreground"
                        >تفاصيل إضافية (اختياري)</label
                      ><textarea
                        id="lead-message"
                        name="message"
                        rows={2}
                        maxLength={1000}
                        className="hd-focus mt-2 w-full rounded-field border border-border bg-background px-4 py-3 hd-small text-foreground placeholder:text-muted transition-colors hover:border-primary/40 focus:border-primary resize-y"
                        placeholder="صف التحدي الحالي والجدول الزمني…"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div aria-live="polite" className="mt-4 empty:mt-0 sm:mt-6"></div>
                <div
                  className="mt-5 flex flex-col gap-4 border-t border-border pt-5 sm:mt-8 sm:gap-5 sm:pt-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p
                    className="hd-small max-w-sm text-[length:var(--text-caption)] text-muted"
                  >
                    بالإرسال أنت توافق على معالجة بياناتك وفق
                    <a
                      href="/privacy"
                      className="hd-focus rounded-control font-semibold text-primary underline underline-offset-4"
                      >سياسة الخصوصية</a
                    >.
                  </p>
                  <button
                    type="submit"
                    className="hd-focus inline-flex items-center justify-center gap-2 font-body font-bold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap bg-gradient-mark text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:shadow-raised active:translate-y-0 active:shadow-card text-[length:var(--text-body)] px-8 py-4 rounded-control w-full sm:w-auto"
                    aria-busy="false"
                  >
                    أرسل الطلب<svg
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
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
  );
}
