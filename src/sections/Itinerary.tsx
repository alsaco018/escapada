'use client';

import FadeContent from '@/components/FadeContent';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import { days } from '@/data/trip';

const Itinerary = () => (
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
          Desplázate para apilar cada jornada. Horarios orientativos: revisad tráfico, meteorología y
          aperturas en fechas concretas.
        </p>
      </FadeContent>
    </div>

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
          <article id={day.id} className="flex h-full flex-col gap-4 scroll-mt-28">
            <header className="flex flex-wrap items-end justify-between gap-3 border-b border-[var(--color-olive)]/15 pb-4">
              <div>
                <p
                  className="mb-1 text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: day.accent }}
                >
                  {day.date}
                </p>
                <h3 className="font-display text-2xl md:text-3xl">{day.title}</h3>
                <p className="text-sm text-[var(--color-ink-soft)]/70">{day.place}</p>
              </div>
              <p className="max-w-[14rem] text-right text-xs leading-snug text-[var(--color-ink-soft)]/65">
                {day.drive}
              </p>
            </header>

            <p className="text-sm leading-relaxed text-[var(--color-ink-soft)] md:text-base">
              {day.summary}
            </p>

            <ul className="grid gap-2 sm:grid-cols-2">
              {day.schedule.map((item) => (
                <li
                  key={`${day.id}-${item.time}-${item.activity}`}
                  className="rounded-xl bg-[var(--color-olive-deep)]/5 px-3 py-2"
                >
                  <span className="block text-xs font-semibold text-[var(--color-moss)]">
                    {item.time}
                  </span>
                  <span className="text-sm font-medium">{item.activity}</span>
                  {item.notes ? (
                    <span className="mt-0.5 block text-xs text-[var(--color-ink-soft)]/65">
                      {item.notes}
                    </span>
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
        </ScrollStackItem>
      ))}
    </ScrollStack>
  </section>
);

export default Itinerary;
