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
            className="inline-flex items-center gap-2 rounded-pill font-body font-semibold bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/20 text-sm px-6 py-3 transition-colors shadow-sm"
          >
            عرض جميع المقالات
            <span aria-hidden="true">&larr;</span>
          </a>
        </div>
        
        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 hd-no-scrollbar sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article key={index} className="group relative w-[86%] shrink-0 snap-start rounded-2xl border border-border/60 bg-background p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:w-auto sm:shrink flex flex-col h-full">
              
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2 font-body text-sm text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  <span>{article.day} {article.month}</span>
                </div>
                
                <span className="inline-flex items-center gap-1.5 font-body text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                  {article.tags[0]}
                </span>
              </div>
              
              <h3 className="hd-h3 text-xl leading-snug group-hover:text-primary transition-colors cursor-pointer mb-4">
                {article.title}
              </h3>
              
              <p className="hd-small text-muted flex-grow leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="mt-8 pt-5 border-t border-border/50">
                <a href="#" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  اقرأ المقال بالكامل
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
