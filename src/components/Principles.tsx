

export default function Principles() {
  return (
    <section
          id="principles"
          className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24"
        >
          <div className="grid gap-8 lg:gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <span
                className="hd-eyebrow inline-flex items-center gap-2.5 border-s-2 px-3 py-1 border-primary text-muted"
                ><span
                  aria-hidden="true"
                  className="size-1.5 rounded-pill bg-primary"
                ></span
                >المبادئ</span
              >
              <h2 className="mt-4 hd-h1 sm:mt-6">هندسة بشرية، لا أوراق إدارية</h2>
              <p className="mt-4 hd-lead sm:mt-5 text-muted">
                ثلاثة مبادئ تحكم كل ما نبنيه لعملائنا، ونقيس كل قرار عليها.
              </p>
              <img
                src="/assets/team-meeting-CcIXcP2B.jpg"
                alt="فريق سعودي يراجع خطة الموارد البشرية"
                width="1280"
                height="960"
                loading="lazy"
                className="mt-7 sm:mt-10 aspect-[4/3] w-full border border-border object-cover"
              />
            </div>
            <div
              className="grid content-start divide-y divide-border border-y border-border md:col-span-7"
            >
              <article className="group flex gap-6 py-8">
                <span className="hd-h2 text-gradient-brand"
                  ><span dir="ltr" className="hd-num inline-block">01</span></span
                >
                <div>
                  <span
                    className="font-body text-[length:var(--text-caption)] font-bold tracking-[0.2em] text-muted"
                    >PEOPLE</span
                  >
                  <h3 className="mt-3 hd-h3">الإنسان أولاً</h3>
                  <p className="mt-3 hd-small text-muted">
                    نبدأ من الأشخاص لا من الملفات. نقرأ ثقافة المنشأة وسلوك
                    فرقها قبل اقتراح أي هيكل أو سياسة، لأن النظام الذي لا يشبه
                    ناسه لا يُطبَّق.
                  </p>
                </div>
              </article>
              <article className="group flex gap-6 py-8">
                <span className="hd-h2 text-gradient-brand"
                  ><span dir="ltr" className="hd-num inline-block">02</span></span
                >
                <div>
                  <span
                    className="font-body text-[length:var(--text-caption)] font-bold tracking-[0.2em] text-muted"
                    >FIT</span
                  >
                  <h3 className="mt-3 hd-h3">الملاءمة الدقيقة</h3>
                  <p className="mt-3 hd-small text-muted">
                    لا نرشّح سِيَراً ذاتية، بل نرشّح ملاءمة: مهارة، وثقافة،
                    ومسار نمو يناسب الدور والمرحلة التي تمر بها المنشأة.
                  </p>
                </div>
              </article>
              <article className="group flex gap-6 py-8">
                <span className="hd-h2 text-gradient-brand"
                  ><span dir="ltr" className="hd-num inline-block">03</span></span
                >
                <div>
                  <span
                    className="font-body text-[length:var(--text-caption)] font-bold tracking-[0.2em] text-muted"
                    >STRUCTURE</span
                  >
                  <h3 className="mt-3 hd-h3">بنية واضحة</h3>
                  <p className="mt-3 hd-small text-muted">
                    هياكل ومسارات وأدلة عمل موثّقة، بحيث يعرف كل شخص موقعه
                    ومسؤولياته ومؤشرات نجاحه — بلا اجتهاد شخصي.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
  );
}
