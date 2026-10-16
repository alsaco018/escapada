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
          Desplázate para apilar cada jornada. En móvil, si la card es más alta que la pantalla,
          puedes hacer scroll dentro de ella. Horarios orientativos.
        </p>
      </FadeContent>
    </div>

    <ScrollStack
      useWindowScroll
      itemDistance={100}
      itemStackDistance={24}
      stackPosition="12%"
      baseScale={0.9}
      itemScale={0.03}
      dimAmount={0.35}
      className="mx-auto max-w-3xl px-3 sm:px-5 md:px-8"
    >
      {days.map((day) => (
        <ScrollStackItem
          key={day.id}
          itemClassName="!h-auto !min-h-0 !max-h-[calc(100svh-6.5rem)] !overflow-hidden !p-0 bg-[var(--color-cream)] text-[var(--color-ink)]"
          style={{
            height: 'auto',
            minHeight: 0,
            maxHeight: 'calc(100svh - 6.5rem)',
            padding: 0,
            overflow: 'hidden',
          }}
        >
          <article
            id={day.id}
            className="flex max-h-[calc(100svh-6.5rem)] flex-col gap-3 overflow-y-auto overscroll-contain scroll-mt-28 p-4 sm:gap-4 sm:p-6 md:p-8 [-webkit-overflow-scrolling:touch]"
          >
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
