import { useCountUp } from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2.5,
  decimals = 0,
  className
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const countUpRef = useRef<HTMLSpanElement>(null as any);

  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: end,
    duration: duration,
    decimals: decimals,
    prefix: prefix,
    suffix: suffix,
    separator: ',',
    startOnMount: false,
  });

  useEffect(() => {
    if (inView) {
      start();
    }
  }, [inView, start]);

  return (
    <span ref={ref} className={className}>
      <span ref={countUpRef}>{prefix}0{suffix}</span>
    </span>
  );
}
