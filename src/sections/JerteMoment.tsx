'use client';

import ScrollExpand from '@/components/ScrollExpand';
import { hikingRoutes } from '@/data/trip';

const JerteMoment = () => (
  <section id="jerte-moment" aria-label="Senderismo en el Valle del Jerte" className="relative">
    <ScrollExpand
      src="/images/pilones.jpg"
      mediaType="image"
      alt="Pozas de granito en Los Pilones, Garganta de los Infiernos"
      title="Senderismo"
      scrollHint="Desplázate"
      startWidth={44}
      startHeight={56}
      startRadius={28}
      endRadius={0}
      scrollDistance={1.15}
      holdDistance={0.45}
      useWindowScroll
      overlayScrim={0.72}
      className="bg-[var(--color-olive-deep)]"
    >
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-black/60 px-5 py-6 text-left text-[var(--color-cream)] shadow-2xl backdrop-blur-md md:px-8 md:py-8">
        <p className="mb-2 text-sm uppercase tracking-[0.24em] text-[var(--color-gold)]">
          Senderismo
        </p>
        <h2 className="font-display mb-3 text-2xl md:text-4xl">¿Pilones o Nogaleas?</h2>
        <p className="mb-6 text-sm leading-relaxed text-white/80 md:text-base">
          El sábado toca decidir: pozas de granito en la Garganta de los Infiernos, o cascadas por
          Navaconcejo. Ambas son circulares y caben en la mañana; mirad el tiempo y las ganas de
          desnivel.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {hikingRoutes.map((route) => (
            <article
              key={route.name}
              className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm"
            >
              <h3 className="font-display text-lg text-white md:text-xl">{route.name}</h3>
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
                {route.tagline}
              </p>
              <dl className="mb-3 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-white/75">
                <div>
                  <dt className="opacity-60">Distancia</dt>
                  <dd className="font-medium text-white">{route.distance}</dd>
                </div>
                <div>
                  <dt className="opacity-60">Desnivel</dt>
                  <dd className="font-medium text-white">{route.elevation}</dd>
                </div>
                <div>
                  <dt className="opacity-60">Tiempo</dt>
                  <dd className="font-medium text-white">{route.duration}</dd>
                </div>
                <div>
                  <dt className="opacity-60">Dificultad</dt>
                  <dd className="font-medium text-white">{route.difficulty}</dd>
                </div>
              </dl>
              <p className="mb-3 text-sm leading-relaxed text-white/80">{route.highlights}</p>
              <a
                href={route.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-sm font-medium text-[var(--color-gold)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
                tabIndex={0}
                aria-label={`Ver ruta ${route.name} en Wikiloc`}
              >
                Ver en Wikiloc ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </ScrollExpand>
  </section>
);

export default JerteMoment;
