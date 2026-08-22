export default function Articles() {
  const articles = [
    {
      day: "20",
      title: "كيف تبني هيكل تنظيمي مرن لشركتك الناشئة؟",
      excerpt: "تعرف على أهم الخطوات العملية لبناء هيكل تنظيمي يواكب التغيرات السريعة في سوق العمل ويحافظ على كفاءة الفريق.",
      image: "/assets/consulting-Ci8i1JP5.jpg"
    },
    {
      day: "15",
      title: "أهم التحديثات في نظام العمل السعودي 2024",
      excerpt: "دليلك الشامل لفهم التعديلات الأخيرة في نظام العمل وكيفية تطبيقها في منشأتك لتجنب المخالفات والحفاظ على الامتثال.",
      image: "/assets/workplace-C6BAUsa9.jpg"
    },
    {
      day: "05",
      title: "استراتيجيات الاحتفاظ بالمواهب في بيئة تنافسية",
      excerpt: "لماذا يغادر الموظفون الأكفاء؟ وكيف تبني بيئة عمل جاذبة تحافظ على أفضل المواهب وتزيد من ولائهم وانتاجيتهم.",
      image: "/assets/team-meeting-CcIXcP2B.jpg"
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
          <span className="inline-flex items-center gap-2 rounded-pill font-body font-semibold bg-gradient-tint text-[color:var(--hd-navy-800)] border border-border text-[length:var(--text-caption)] px-3 py-1">
            <span aria-hidden="true" className="size-1.5 rounded-pill bg-gradient-mark"></span>
            عرض جميع المقالات
          </span>
        </div>
        
        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 hd-no-scrollbar sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-px sm:overflow-visible sm:border sm:border-border sm:bg-border sm:px-0 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article key={index} className="group relative w-[86%] shrink-0 snap-start rounded-surface border border-border bg-background p-6 transition-colors duration-300 sm:w-auto sm:shrink sm:rounded-none sm:border-0 sm:p-8 sm:hover:bg-surface flex flex-col">
              <div className="mb-6 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="flex items-baseline gap-4 mt-2">
                <span className="font-display text-[length:var(--text-h3)] font-extrabold text-primary">
                  <span dir="ltr" className="hd-num inline-block">{article.day}</span>
                </span>
                <h3 className="hd-h3">{article.title}</h3>
              </div>
              <p className="mt-4 hd-small text-muted flex-grow">
                {article.excerpt}
              </p>
              <div className="mt-5 border-t border-border pt-5">
                <a href="#" className="inline-flex items-center justify-center gap-2 w-full font-body font-semibold text-[length:var(--text-caption)] border border-primary text-primary hover:bg-primary hover:text-primary-foreground py-2 transition-colors">
                  اقرأ المقال الكامل
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
