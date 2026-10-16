'use client';

import FadeContent from '@/components/FadeContent';
import { trip } from '@/data/trip';

const Idea = () => (
  <section
    id="idea"
    className="relative mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20"
    aria-label="La idea del viaje"
  >
    <FadeContent effect="focus" duration={1} blur={8} threshold={0.2} once>
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-moss)]">
        La idea
      </p>
      <h2 className="font-display mb-6 text-3xl text-[var(--color-ink)] md:text-5xl text-balance">
        Medieval, naturaleza y Roma
      </h2>
      <p className="mb-10 text-lg leading-relaxed text-[var(--color-ink-soft)] md:text-xl">
        {trip.idea}
      </p>

      <h3 className="font-display mb-6 text-center text-2xl text-[var(--color-ink)] md:text-3xl text-balance">
        {trip.companyHeading}
      </h3>
      <figure className="mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-lg shadow-[var(--color-olive-deep)]/15 md:max-w-lg">
        <img
          src={trip.companyImage}
          alt={trip.companyImageAlt}
          className="aspect-square w-full object-cover"
          loading="lazy"
        />
      </figure>
    </FadeContent>
  </section>
);

export default Idea;
