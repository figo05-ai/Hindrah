

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="grid gap-8 lg:gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <span
                  className="hd-eyebrow inline-flex items-center gap-2.5 border-s-2 px-3 py-1 border-primary text-muted"
                  ><span
                    aria-hidden="true"
                    className="size-1.5 rounded-pill bg-primary"
                  ></span
                  >الأسئلة المتكررة</span
                >
                <h2 className="mt-4 hd-h1 sm:mt-6">ما يسأل عنه العملاء عادة</h2>
              </div>
              <dl
                className="divide-y divide-border border-y border-border md:col-span-8"
              >
                <div className="py-7">
                  <dt className="flex items-start gap-3 hd-h3">
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rounded-pill bg-primary mt-[0.7em]"
                    ></span
                    >هل تعملون مع المنشآت الصغيرة؟
                  </dt>
                  <dd className="mt-3 ps-6 hd-small text-muted">
                    نعم. الباقة الأساسية مصمّمة تحديداً للمنشآت التي تبني أول
                    منظومة موارد بشرية لها، وتتوسع معها لاحقاً دون إعادة بناء.
                  </dd>
                </div>
                <div className="py-7">
                  <dt className="flex items-start gap-3 hd-h3">
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rounded-pill bg-primary mt-[0.7em]"
                    ></span
                    >كم يستغرق أول أثر ملموس؟
                  </dt>
                  <dd className="mt-3 ps-6 hd-small text-muted">
                    تقرير الفجوات يصدر خلال أسبوعين من انطلاق التشخيص، وأول
                    تطبيق تشغيلي يبدأ عادة في الأسبوع الخامس.
                  </dd>
                </div>
                <div className="py-7">
                  <dt className="flex items-start gap-3 hd-h3">
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rounded-pill bg-primary mt-[0.7em]"
                    ></span
                    >هل تلتزمون بأنظمة العمل السعودية؟
                  </dt>
                  <dd className="mt-3 ps-6 hd-small text-muted">
                    كل مخرجاتنا — عقود وسياسات ولوائح — تُراجع وفق نظام العمل
                    السعودي ومتطلبات السعودة والتأمينات الاجتماعية.
                  </dd>
                </div>
                <div className="py-7">
                  <dt className="flex items-start gap-3 hd-h3">
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rounded-pill bg-primary mt-[0.7em]"
                    ></span
                    >هل تديرون التوظيف نيابة عنا؟
                  </dt>
                  <dd className="mt-3 ps-6 hd-small text-muted">
                    نعم، ابتداءً من تعريف الدور وحتى إدارة العرض والانضمام، مع
                    تسليم كامل للتوثيق لفريقكم الداخلي.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
  );
}
