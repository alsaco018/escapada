'use client';

import Counter from '@/components/Counter';
import SplitFlapText from '@/components/SplitFlapText';
import { splitFlapWords, trip } from '@/data/trip';

const TripMeta = () => (
  <section
    id="meta"
    className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24"
    aria-label="Datos del viaje"
  >
    <div className="mb-10 flex flex-col gap-3 md:mb-14">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-moss)]">
        Fechas
      </p>
      <h2 className="font-display text-3xl text-[var(--color-ink)] md:text-4xl">
        {trip.startLabel} → {trip.endLabel}
      </h2>
      <p className="max-w-2xl text-[var(--color-ink-soft)]/80">
        Base en {trip.base}. Salida y regreso desde {trip.origin}.
      </p>
    </div>

    <div className="mb-12 overflow-x-auto rounded-2xl border border-[var(--color-olive)]/15 bg-[var(--color-olive-deep)] p-4 shadow-xl shadow-[var(--color-olive-deep)]/20 md:p-8">
      <SplitFlapText
        words={[...splitFlapWords]}
        charset="alphanumeric"
        tileColor="#1a2218"
        textColor="#f2efe8"
        fontSize="clamp(1.4rem, 4vw, 2.6rem)"
        gap={6}
        tileRadius={6}
        align="center"
        loop
        cycleDelay={2.4}
        flipDuration={0.45}
        stagger={0.04}
        padTo={8}
        className="justify-center"
      />
    </div>

    <div className="grid gap-6 sm:grid-cols-3">
      <div className="rounded-2xl border border-[var(--color-olive)]/10 bg-white/50 p-6 backdrop-blur-sm">
        <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[var(--color-ink-soft)]/70">
          Días
        </p>
        <Counter
          value={trip.daysCount}
          fontSize="clamp(2.5rem, 6vw, 3.75rem)"
          fontWeight={600}
          textColor="var(--color-olive-deep)"
          duration={1.2}
          intro
          minDigits={1}
        />
      </div>

      <div className="flex flex-col justify-center rounded-2xl border border-[var(--color-olive)]/10 bg-white/50 p-6 backdrop-blur-sm">
        <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[var(--color-ink-soft)]/70">
          Por vivir
        </p>
        <p className="font-display text-2xl font-semibold leading-tight text-[var(--color-olive-deep)] md:text-3xl text-balance">
          Infinitas experiencias
        </p>
      </div>

      <div className="rounded-2xl border border-[var(--color-olive)]/10 bg-white/50 p-6 backdrop-blur-sm">
        <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[var(--color-ink-soft)]/70">
          Destinos
        </p>
        <Counter
          value={4}
          fontSize="clamp(2.5rem, 6vw, 3.75rem)"
          fontWeight={600}
          textColor="var(--color-olive-deep)"
          duration={1.2}
          intro
          minDigits={1}
        />
      </div>
    </div>
  </section>
);

export default TripMeta;
