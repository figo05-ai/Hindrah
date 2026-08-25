

export default function Testimonials() {
  return (
    <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              <span
                className="hd-eyebrow inline-flex items-center gap-2.5 border-s-2 px-3 py-1 border-primary text-muted"
                ><span
                  aria-hidden="true"
                  className="size-1.5 rounded-pill bg-primary"
                ></span
                >شهادات العملاء</span
              >
              <h2 className="mt-4 hd-h1 sm:mt-6">
                نتائج يلمسها الفريق قبل الإدارة
              </h2>
            </div>
            <div
              className="mt-8 sm:mt-12 grid gap-px border border-border bg-border md:grid-cols-3"
            >
              <figure className="flex flex-col bg-background p-8">
                <span aria-hidden="true" className="h-px w-8 bg-primary"></span>
                <blockquote className="mt-6 flex-1 hd-body text-foreground">
                  خلال أربعة أشهر أصبح لدينا هيكل واضح ووصف وظيفي لكل دور. لأول
                  مرة نعرف من المسؤول عن ماذا.
                </blockquote>
                <figcaption
                  className="mt-8 flex items-center gap-4 border-t border-border pt-5"
                >
                  <img
                    src="/assets/portrait-1-DY7NZ3-T.jpg"
                    alt="م. سارة العتيبي"
                    width="816"
                    height="816"
                    loading="lazy"
                    className="size-14 shrink-0 object-cover"
                  />
                  <div>
                    <div
                      className="font-body text-[length:var(--text-small)] font-bold"
                    >
                      م. سارة العتيبي
                    </div>
                    <div
                      className="mt-1 font-body text-[length:var(--text-caption)] text-muted"
                    >
                      الرئيس التنفيذي — شركة تقنية، الرياض
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col bg-background p-8">
                <span aria-hidden="true" className="h-px w-8 bg-primary"></span>
                <blockquote className="mt-6 flex-1 hd-body text-foreground">
                  جودة المرشحين اختلفت تماماً. هندرة ترشّح أشخاصاً يناسبون
                  ثقافتنا، لا مجرد سِيَر ذاتية جيدة.
                </blockquote>
                <figcaption
                  className="mt-8 flex items-center gap-4 border-t border-border pt-5"
                >
                  <img
                    src="/assets/portrait-3-DnSz9kA-.jpg"
                    alt="عبدالله الشمري"
                    width="816"
                    height="816"
                    loading="lazy"
                    className="size-14 shrink-0 object-cover"
                  />
                  <div>
                    <div
                      className="font-body text-[length:var(--text-small)] font-bold"
                    >
                      عبدالله الشمري
                    </div>
                    <div
                      className="mt-1 font-body text-[length:var(--text-caption)] text-muted"
                    >
                      مدير العمليات — مجموعة لوجستية، جدة
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col bg-background p-8">
                <span aria-hidden="true" className="h-px w-8 bg-primary"></span>
                <blockquote className="mt-6 flex-1 hd-body text-foreground">
                  اجتزنا مراجعة الالتزام دون أي ملاحظة. الملفات والسياسات كانت
                  جاهزة ومنظمة بالكامل.
                </blockquote>
                <figcaption
                  className="mt-8 flex items-center gap-4 border-t border-border pt-5"
                >
                  <img
                    src="/assets/portrait-2-DTjkJLqQ.jpg"
                    alt="نورة القحطاني"
                    width="816"
                    height="816"
                    loading="lazy"
                    className="size-14 shrink-0 object-cover"
                  />
                  <div>
                    <div
                      className="font-body text-[length:var(--text-small)] font-bold"
                    >
                      نورة القحطاني
                    </div>
                    <div
                      className="mt-1 font-body text-[length:var(--text-caption)] text-muted"
                    >
                      مديرة الموارد البشرية — قطاع تجزئة، الدمام
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
  );
}
