import AnimatedCounter from './AnimatedCounter';

export default function Stats() {
  return (
    <section
      aria-label="أرقام هندرة"
      className="bg-gradient-section text-on-dark"
    >
      <dl
        className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-on-dark-border/50 sm:grid-cols-4 sm:divide-y-0 [&>div]:border-0"
      >
        <div className="px-5 py-7 text-center sm:py-9">
          <dd
            className="hd-num font-display text-[clamp(1.7rem,3.4vw,2.5rem)] font-extrabold leading-none text-on-dark"
          >
            <AnimatedCounter end={120} suffix="+" className="hd-num inline-block" />
          </dd>
          <dt
            className="mt-2 font-body text-[length:var(--text-caption)] leading-[var(--leading-normal)] text-on-dark-muted"
          >
            منشأة شريكة
          </dt>
        </div>
        <div className="px-5 py-7 text-center sm:py-9">
          <dd
            className="hd-num font-display text-[clamp(1.7rem,3.4vw,2.5rem)] font-extrabold leading-none text-on-dark"
          >
            <AnimatedCounter end={3400} className="hd-num inline-block" />
          </dd>
          <dt
            className="mt-2 font-body text-[length:var(--text-caption)] leading-[var(--leading-normal)] text-on-dark-muted"
          >
            توظيف ناجح
          </dt>
        </div>
        <div className="px-5 py-7 text-center sm:py-9">
          <dd
            className="hd-num font-display text-[clamp(1.7rem,3.4vw,2.5rem)] font-extrabold leading-none text-on-dark"
          >
            <AnimatedCounter end={98} suffix="%" className="hd-num inline-block" />
          </dd>
          <dt
            className="mt-2 font-body text-[length:var(--text-caption)] leading-[var(--leading-normal)] text-on-dark-muted"
          >
            التزام نظامي
          </dt>
        </div>
        <div className="px-5 py-7 text-center sm:py-9">
          <dd
            className="hd-num font-display text-[clamp(1.7rem,3.4vw,2.5rem)] font-extrabold leading-none text-on-dark"
          >
            <AnimatedCounter end={30} suffix=" يوم" className="hd-num inline-block" />
          </dd>
          <dt
            className="mt-2 font-body text-[length:var(--text-caption)] leading-[var(--leading-normal)] text-on-dark-muted"
          >
            متوسط التنفيذ
          </dt>
        </div>
      </dl>
    </section>
  );
}
