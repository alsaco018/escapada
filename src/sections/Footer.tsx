'use client';

import { trip } from '@/data/trip';

const Footer = () => (
  <footer className="border-t border-[var(--color-olive)]/15 px-5 py-12 md:px-8">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-display text-2xl text-[var(--color-olive-deep)]">{trip.brand}</p>
        <p className="text-sm text-[var(--color-ink-soft)]/70">
          {trip.title} · {trip.startDate} – {trip.endDate}
        </p>
      </div>
      <p className="max-w-md text-xs leading-relaxed text-[var(--color-ink-soft)]/55">
        Horarios, tiempos de carretera y aperturas son orientativos. Confirmad la información
        actualizada para las fechas exactas del viaje.
      </p>
    </div>
  </footer>
);

export default Footer;
