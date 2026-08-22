export default function Articles() {
  const articles = [
    {
      day: "20",
      month: "أغسطس",
      title: "كيف تبني هيكل تنظيمي مرن لشركتك الناشئة؟",
      excerpt: "تعرف على أهم الخطوات العملية لبناء هيكل تنظيمي يواكب التغيرات السريعة في سوق العمل ويحافظ على كفاءة الفريق.",
      tags: ["هيكلة", "إدارة"]
    },
    {
      day: "15",
      month: "أغسطس",
      title: "أهم التحديثات في نظام العمل السعودي 2024",
      excerpt: "دليلك الشامل لفهم التعديلات الأخيرة في نظام العمل وكيفية تطبيقها في منشأتك لتجنب المخالفات والحفاظ على الامتثال.",
      tags: ["نظام العمل", "قانوني"]
    },
    {
      day: "05",
      month: "أغسطس",
      title: "استراتيجيات الاحتفاظ بالمواهب في بيئة تنافسية",
      excerpt: "لماذا يغادر الموظفون الأكفاء؟ وكيف تبني بيئة عمل جاذبة تحافظ على أفضل المواهب وتزيد من ولائهم وانتاجيتهم.",
      tags: ["استقطاب", "بيئة عمل"]
    }
  ];

  return (
    <section id="articles" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="hd-eyebrow inline-flex items-center gap-2.5 border-s-2 px-3 py-1 border-primary text-muted">
              <span aria-hidden="true" className="size-1.5 rounded-pill bg-primary"></span>
              المدونة
            </span>
            <h2 className="mt-4 hd-h1 sm:mt-6">أحدث المقالات والرؤى</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-pill font-body font-semibold bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/20 text-sm px-5 py-2.5 transition-colors"
          >
            عرض جميع المقالات
            <span aria-hidden="true">&larr;</span>
          </a>
        </div>
        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 hd-no-scrollbar sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-px sm:overflow-visible sm:border sm:border-border sm:bg-border sm:px-0 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article key={index} className="group relative w-[86%] shrink-0 snap-start rounded-surface border border-border bg-background p-6 transition-colors duration-300 sm:w-auto sm:shrink sm:rounded-none sm:border-0 sm:p-8 sm:hover:bg-surface flex flex-col h-full">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center justify-center shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg border border-primary/20">
                  <span className="font-display text-xl font-extrabold leading-none">{article.day}</span>
                  <span className="text-[10px] font-semibold">{article.month}</span>
                </div>
                <h3 className="hd-h3 text-lg leading-tight group-hover:text-primary transition-colors cursor-pointer">{article.title}</h3>
              </div>
              <p className="mt-4 hd-small text-muted flex-grow">
                {article.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border pt-5">
                {article.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1.5 font-body text-[11px] text-muted bg-surface px-2 py-1 rounded-md border border-border">
                    {tag}
                  </span>
                ))}
                <a href="#" className="mr-auto font-body text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                  اقرأ المزيد 
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
