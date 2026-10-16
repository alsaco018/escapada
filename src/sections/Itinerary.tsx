'use client';

import { useEffect, useState } from 'react';
import FadeContent from '@/components/FadeContent';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import { days, type TripDay } from '@/data/trip';

const DayCard = ({ day }: { day: TripDay }) => (
  <article id={day.id} className="flex flex-col gap-3 scroll-mt-28 sm:gap-4">
    <header className="flex flex-wrap items-end justify-between gap-3 border-b border-[var(--color-olive)]/15 pb-3 sm:pb-4">
      <div>
        <p
          className="mb-1 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: day.accent }}
        >
          {day.date}
        </p>
        <h3 className="font-display text-xl sm:text-2xl md:text-3xl">{day.title}</h3>
        <p className="text-sm text-[var(--color-ink-soft)]/70">{day.place}</p>
      </div>
      <p className="max-w-[14rem] text-left text-xs leading-snug text-[var(--color-ink-soft)]/65 sm:text-right">
        {day.drive}
      </p>
    </header>

    <p className="text-sm leading-relaxed text-[var(--color-ink-soft)] md:text-base">{day.summary}</p>

    <ul className="grid gap-2 sm:grid-cols-2">
      {day.schedule.map((item) => (
        <li
          key={`${day.id}-${item.time}-${item.activity}`}
          className="rounded-xl bg-[var(--color-olive-deep)]/5 px-3 py-2"
        >
          <span className="block text-xs font-semibold text-[var(--color-moss)]">{item.time}</span>
          <span className="text-sm font-medium">{item.activity}</span>
          {item.notes ? (
            <span className="mt-0.5 block text-xs text-[var(--color-ink-soft)]/65">{item.notes}</span>
          ) : null}
        </li>
      ))}
    </ul>

    {day.food ? (
      <p className="text-sm text-[var(--color-ink-soft)]">
        <span className="font-semibold text-[var(--color-olive)]">Gastronomía · </span>
        {day.food}
      </p>
    ) : null}

    {day.note ? (
      <p className="rounded-xl border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 px-3 py-2 text-xs leading-relaxed text-[var(--color-ink-soft)]">
        {day.note}
      </p>
    ) : null}
  </article>
);

const Itinerary = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const sync = () => setIsDesktop(media.matches);
    sync();
    setReady(true);
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  return (
    <section id="itinerario" className="relative py-16 md:py-24" aria-label="Itinerario">
      <div className="mx-auto mb-10 max-w-6xl px-5 md:mb-14 md:px-8">
        <FadeContent effect="fade" duration={0.9} once>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-moss)]">
            Itinerario
          </p>
          <h2 className="font-display text-3xl text-[var(--color-ink)] md:text-5xl">
            Viernes a lunes
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--color-ink-soft)]/80">
            {isDesktop
              ? 'Desplázate para apilar cada jornada. Horarios orientativos: revisad tráfico, meteorología y aperturas en fechas concretas.'
              : 'Cuatro jornadas, una debajo de otra. Horarios orientativos: revisad tráfico, meteorología y aperturas en fechas concretas.'}
          </p>
        </FadeContent>
      </div>

      {!ready ? (
        <div className="mx-auto h-64 max-w-3xl animate-pulse rounded-3xl bg-[var(--color-olive)]/10 px-5" />
      ) : isDesktop ? (
        <ScrollStack
          useWindowScroll
          itemDistance={120}
          itemStackDistance={28}
          stackPosition="18%"
          baseScale={0.88}
          itemScale={0.04}
          dimAmount={0.35}
          className="mx-auto max-w-3xl px-5 md:px-8"
        >
          {days.map((day) => (
            <ScrollStackItem
              key={day.id}
              itemClassName="!h-auto !min-h-[22rem] bg-[var(--color-cream)] text-[var(--color-ink)]"
              style={{ height: 'auto', minHeight: '22rem' }}
            >
              <DayCard day={day} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      ) : (
        <div className="mx-auto flex max-w-3xl flex-col gap-5 px-5">
          {days.map((day) => (
            <div
              key={day.id}
              className="rounded-[28px] bg-[var(--color-cream)] p-5 text-[var(--color-ink)] shadow-[0_0_0_1px_rgb(0_0_0_/0.06),0_16px_40px_-20px_rgb(0_0_0_/0.2)]"
            >
              <DayCard day={day} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Itinerary;
