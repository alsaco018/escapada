'use client';

import MaskedHeading from '@/components/MaskedHeading';
import RotatingText from '@/components/RotatingText';
import { rotatingPlaces, trip } from '@/data/trip';

const Hero = () => (
  <section
    id="top"
    className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    aria-label="Inicio"
  >
    <div className="absolute inset-0">
      <img
        src="/images/hero.jpg"
        alt=""
        className="h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-olive-deep)] via-[var(--color-olive-deep)]/55 to-black/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgb(26_34_24/0.45)_100%)]" />
    </div>

    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 pb-16 pt-32 md:px-8 md:pb-24">
      <p className="font-display text-sm uppercase tracking-[0.28em] text-[var(--color-gold)] md:text-base">
        {trip.brand}
      </p>

      <MaskedHeading
        text={trip.title}
        tag="h1"
        src="/images/landscape.jpg"
        mediaType="image"
        align="left"
        weight={700}
        textScale={0.16}
        reveal="rise"
        trigger="mount"
        drift={14}
        parallax={20}
        outline
        outlineColor="rgba(242, 239, 232, 0.55)"
        outlineWidth={1.25}
        brightness={1.15}
        saturation={1.1}
        className="min-h-[4.5rem] max-w-4xl md:min-h-[7rem]"
        style={{ color: 'var(--color-cream)' }}
      />

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 text-lg text-[var(--color-stone-light)] md:text-2xl">
        <span className="font-light opacity-90">Cuatro días entre</span>
        <RotatingText
          texts={[...rotatingPlaces]}
          rotationInterval={2600}
          staggerDuration={0.03}
          staggerFrom="first"
          splitBy="characters"
          mainClassName="overflow-hidden rounded-md bg-white/10 px-3 py-1 font-display font-semibold text-[var(--color-cream)] backdrop-blur-sm"
          elementLevelClassName="inline-block"
          transition={{ type: 'spring', damping: 22, stiffness: 280 }}
        />
      </div>

      <p className="max-w-xl text-base leading-relaxed text-[var(--color-stone)] md:text-lg">
        {trip.subtitle}
      </p>
    </div>
  </section>
);

export default Hero;
