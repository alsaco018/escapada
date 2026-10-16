'use client';

import CardNav from '@/components/CardNav';

const items = [
  {
    label: 'Viaje',
    description: 'Idea y destinos',
    bgColor: '#243528',
    textColor: '#f2efe8',
    links: [
      { label: 'La idea', href: '#idea', ariaLabel: 'Ir a la idea del viaje' },
      { label: 'Destinos', href: '#destinos', ariaLabel: 'Ir a destinos' },
    ],
  },
  {
    label: 'Itinerario',
    description: 'Día a día',
    bgColor: '#2f6f6a',
    textColor: '#f2efe8',
    links: [
      { label: 'Viernes', href: '#viernes', ariaLabel: 'Ir al viernes' },
      { label: 'Sábado', href: '#sabado', ariaLabel: 'Ir al sábado' },
      { label: 'Domingo', href: '#domingo', ariaLabel: 'Ir al domingo' },
      { label: 'Lunes', href: '#lunes', ariaLabel: 'Ir al lunes' },
    ],
  },
  {
    label: 'Práctico',
    description: 'Consejos',
    bgColor: '#6b4f2d',
    textColor: '#f2efe8',
    links: [
      { label: 'Tips', href: '#tips', ariaLabel: 'Ir a tips' },
      { label: 'Enlaces', href: '#tips', ariaLabel: 'Ir a enlaces útiles' },
    ],
  },
];

const SiteNav = () => (
  <div className="fixed top-0 inset-x-0 z-50 px-3 pt-3 md:px-6">
    <CardNav
      logo={
        <span className="font-display text-sm tracking-tight text-[var(--cn-text)] sm:text-base md:text-lg">
          Escapada de cumpleaños
        </span>
      }
      logoHref="#top"
      items={items}
      theme="dark"
      surface="glass"
      accentColor="#c4a35a"
      maxWidth={1100}
      ariaLabel="Navegación del viaje"
    />
  </div>
);

export default SiteNav;
