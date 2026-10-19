'use client';

import FadeContent from '@/components/FadeContent';
import { stay } from '@/data/trip';

const Base = () => (
  <section
    id="base"
    className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24"
    aria-label="Nuestra base de operaciones"
  >
    <FadeContent effect="fade" duration={0.9} once>
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-moss)]">
        Alojamiento
      </p>
      <h2 className="font-display mb-4 text-3xl text-[var(--color-ink)] md:text-5xl text-balance">
        Nuestra base de operaciones
      </h2>
      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
        {stay.summary}
      </p>

      <div className="mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {stay.images.map((image, index) => (
            <figure
              key={image.src}
              className={`overflow-hidden rounded-2xl ${index === 0 ? 'col-span-2 aspect-[16/10] sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:h-full sm:min-h-[280px]' : 'aspect-[4/3]'}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        <aside className="rounded-2xl border border-[var(--color-olive)]/10 bg-white/55 p-6 backdrop-blur-sm md:p-7">
          <p className="mb-1 text-sm uppercase tracking-[0.18em] text-[var(--color-moss)]">
            {stay.type}
          </p>
          <h3 className="font-display mb-2 text-2xl text-[var(--color-ink)] md:text-3xl">
            {stay.name}
          </h3>
          <p className="mb-4 text-[var(--color-ink-soft)]">
            {stay.address}
            <br />
            {stay.city}
          </p>

          <div className="mb-5 flex items-baseline gap-3">
            <span className="rounded-lg bg-[var(--color-olive-deep)] px-3 py-1.5 text-lg font-semibold text-[var(--color-cream)]">
              {stay.rating}
            </span>
            <div>
              <p className="font-semibold text-[var(--color-ink)]">{stay.ratingLabel}</p>
              <p className="text-sm text-[var(--color-ink-soft)]/70">{stay.reviews}</p>
            </div>
          </div>

          <ul className="mb-6 flex flex-col gap-2">
            {stay.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm leading-relaxed text-[var(--color-ink-soft)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3">
            <a
              href={stay.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-olive-deep)] px-5 py-3 text-sm font-semibold text-[var(--color-cream)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-olive-deep)]"
              tabIndex={0}
              aria-label="Abrir ubicación de Bailén 3 en Google Maps"
            >
              Ver en Google Maps
            </a>
            <a
              href={stay.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-olive)]/25 bg-white/70 px-5 py-3 text-sm font-medium text-[var(--color-ink)] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-olive)]"
              tabIndex={0}
              aria-label="Ver Bailén 3 en Booking.com"
            >
              Ficha en Booking ↗
            </a>
          </div>
        </aside>
      </div>
    </FadeContent>
  </section>
);

export default Base;
