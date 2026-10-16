'use client';

import { useEffect, useState } from 'react';
import AccordionGallery from '@/components/AccordionGallery';
import FadeContent from '@/components/FadeContent';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import { destinations } from '@/data/trip';

const Destinations = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const sync = () => setIsMobile(media.matches);
    sync();
    setReady(true);
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  return (
    <section
      id="destinos"
      className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24"
      aria-label="Destinos"
    >
      <FadeContent effect="fade" duration={0.9} once className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-moss)]">
          Destinos
        </p>
        <h2 className="font-display text-3xl text-[var(--color-ink)] md:text-4xl">
          Cuatro paradas, un mismo latido
        </h2>
      </FadeContent>

      {!ready ? (
        <div className="h-80 w-full animate-pulse rounded-2xl bg-[var(--color-olive)]/10" aria-hidden="true" />
      ) : isMobile ? (
        <ScrollStack
          useWindowScroll
          itemDistance={100}
          itemStackDistance={24}
          stackPosition="16%"
          baseScale={0.88}
          itemScale={0.04}
          dimAmount={0.3}
          className="mx-auto max-w-md"
        >
          {destinations.map((destination) => (
            <ScrollStackItem
              key={destination.id}
              itemClassName="!h-80 !p-0 overflow-hidden bg-[var(--color-olive-deep)] text-[var(--color-cream)]"
              style={{ height: '20rem', padding: 0 }}
            >
              <a
                href={destination.href}
                className="relative block h-full w-full outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2"
                tabIndex={0}
                aria-label={`Ir a ${destination.label}`}
              >
                <img
                  src={destination.image}
                  alt={destination.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <span className="absolute bottom-0 left-0 p-5">
                  <span className="mb-1 block h-0.5 w-6 bg-[var(--color-gold)]" aria-hidden="true" />
                  <span className="font-display text-2xl font-semibold text-white">
                    {destination.label}
                  </span>
                </span>
              </a>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      ) : (
        <AccordionGallery
          items={destinations.map((d) => ({
            image: d.image,
            label: d.label,
            link: d.href,
            alt: d.alt,
          }))}
          defaultIndex={1}
          height={480}
          gap={12}
          radius={20}
          accentColor="#c4a35a"
          overlayColor="#1a2218"
          textColor="#f2efe8"
          grayscale={false}
          expandRatio={0.48}
          trigger="hover"
          className="w-full"
        />
      )}
    </section>
  );
};

export default Destinations;
