export type DayId = 'viernes' | 'sabado' | 'domingo' | 'lunes';

export interface ScheduleItem {
  time: string;
  activity: string;
  notes?: string;
}

export interface TripDay {
  id: DayId;
  date: string;
  title: string;
  place: string;
  summary: string;
  drive: string;
  schedule: ScheduleItem[];
  food?: string;
  note?: string;
  accent: string;
}

export interface Destination {
  id: string;
  label: string;
  image: string;
  alt: string;
  href: string;
}

export interface TipItem {
  id: string;
  text: string;
}

export interface ChecklistGroup {
  id: string;
  title: string;
  description: string;
  items: TipItem[];
}

export interface UsefulLink {
  label: string;
  href: string;
}

export const trip = {
  brand: 'Escapada de cumpleaños',
  title: 'Extremadura',
  subtitle: 'Casco medieval, gargantas de granito y patrimonio romano en cuatro días.',
  origin: 'Jerez de la Frontera',
  base: 'Cáceres',
  startDate: '30 OCT',
  endDate: '02 NOV',
  startLabel: '30 de octubre',
  endLabel: '2 de noviembre',
  daysCount: 4,
  driveHours: 12,
  idea: 'Una escapada equilibrada que combina el casco medieval de Cáceres, la naturaleza del Valle del Jerte, la historia de Trujillo y el patrimonio romano de Mérida. El viernes salís de Jerez a partir de las 16:00: ese día queda para el viaje, la cena y el descanso.',
  companyHeading: '¡Disfrutando de la mejor compañía que hay!',
  companyImage: '/images/compania.jpg',
  companyImageAlt: 'La mejor compañía del viaje',
} as const;

export interface StayInfo {
  name: string;
  type: string;
  address: string;
  city: string;
  rating: string;
  ratingLabel: string;
  reviews: string;
  summary: string;
  highlights: string[];
  checkIn: string;
  checkOut: string;
  bookingUrl: string;
  mapsUrl: string;
  images: { src: string; alt: string }[];
}

export const stay: StayInfo = {
  name: 'Bailén 3',
  type: 'Apartamento entero',
  address: 'Calle Bailén 3',
  city: '10004 Cáceres',
  rating: '9,6',
  ratingLabel: 'Excepcional',
  reviews: '97 comentarios',
  summary:
    'Apartamento nuevo (2024) a unos minutos a pie de la Plaza Mayor y el casco monumental. Ideal como base para las excursiones del sábado, domingo y lunes.',
  highlights: [
    '2 dormitorios · 1 baño · cocina equipada',
    'Wi‑Fi, aire acondicionado y patio',
    'A ~400 m de la Plaza Mayor',
    'Entrada 15:00 · Salida 11:00',
  ],
  checkIn: '15:00',
  checkOut: '11:00',
  bookingUrl: 'https://www.booking.com/hotel/es/bailen-3.es.html',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+Bail%C3%A9n+3,+10004+C%C3%A1ceres',
  images: [
    { src: '/images/bailen/bailen-1.jpg', alt: 'Dormitorio principal de Bailén 3' },
    { src: '/images/bailen/bailen-2.jpg', alt: 'Detalle del dormitorio en Bailén 3' },
    { src: '/images/bailen/bailen-3.jpg', alt: 'Interior del apartamento Bailén 3' },
    { src: '/images/bailen/bailen-4.jpg', alt: 'Espacio del apartamento Bailén 3' },
    { src: '/images/bailen/bailen-5.jpg', alt: 'Zona de estar de Bailén 3' },
    { src: '/images/bailen/bailen-6.jpg', alt: 'Otra vista del apartamento Bailén 3' },
  ],
};

export const destinations: Destination[] = [
  {
    id: 'caceres',
    label: 'Cáceres',
    image: '/images/caceres.jpg',
    alt: 'Casco histórico de Cáceres',
    href: '#viernes',
  },
  {
    id: 'jerte',
    label: 'Valle del Jerte',
    image: '/images/jerte.jpg',
    alt: 'Paisaje del Valle del Jerte',
    href: '#sabado',
  },
  {
    id: 'trujillo',
    label: 'Trujillo',
    image: '/images/trujillo.jpg',
    alt: 'Plaza y castillo de Trujillo',
    href: '#domingo',
  },
  {
    id: 'merida',
    label: 'Mérida',
    image: '/images/merida.jpg',
    alt: 'Teatro romano de Mérida',
    href: '#lunes',
  },
];

export const days: TripDay[] = [
  {
    id: 'viernes',
    date: '30 oct',
    title: 'Llegada a Cáceres',
    place: 'Cáceres',
    summary:
      'Llegar sin prisas y disfrutar de una primera cena extremeña. Al salir de Jerez desde las 16:00 (trayecto de 3 a 4 h), no planifiquéis una visita larga al llegar.',
    drive: 'Jerez → Cáceres: aprox. 3–4 h',
    schedule: [
      {
        time: '16:00',
        activity: 'Salida de Jerez',
        notes: 'Calculad 3–4 h de conducción, según paradas.',
      },
      {
        time: '19:30–20:30',
        activity: 'Alojamiento y aparcamiento',
        notes: 'Según tráfico y paradas.',
      },
      {
        time: '20:30',
        activity: 'Paseo breve',
        notes: 'Plaza Mayor y Arco de la Estrella si queda energía.',
      },
      {
        time: '21:30',
        activity: 'Cena de tapas',
        notes: 'Centro histórico y descanso.',
      },
    ],
    food: 'Torta del Casar, jamón ibérico, patatera, migas extremeñas o cerdo ibérico. Mejor compartir tapas.',
    accent: '#3d5a40',
  },
  {
    id: 'sabado',
    date: '31 oct',
    title: 'Valle del Jerte',
    place: 'Senderismo',
    summary:
      'Elegid ruta: Los Pilones (pozas de granito) o Nogaleas (cascadas desde Navaconcejo). Después, comida en el valle y paseo.',
    drive: 'Cáceres → Jerte / Navaconcejo: aprox. 1 h 25–1 h 40 min por trayecto',
    schedule: [
      {
        time: '08:00',
        activity: 'Salida de Cáceres',
      },
      {
        time: '09:45–13:30',
        activity: 'Opción A · Los Pilones',
        notes: '≈ 7,8 km · +235 m · fácil · 2 h 30–3 h 30. Marmitas de gigante.',
      },
      {
        time: '09:45–13:30',
        activity: 'Opción B · Nogaleas',
        notes: '≈ 5,5 km · +350 m · moderada · 2–2 h 30. Cascadas; subida más exigente.',
      },
      {
        time: '14:00–15:30',
        activity: 'Comida en el valle',
        notes: 'Jerte, Cabezuela o Navaconcejo. Reservad en fin de semana.',
      },
      {
        time: '15:30–16:45',
        activity: 'Cabezuela del Valle',
        notes: 'Paseo por el casco antiguo y café.',
      },
      {
        time: '17:30',
        activity: 'Vuelta a Cáceres',
      },
    ],
    note: 'Con lluvia o sendero resbaladizo: evitad la caminata y dedicad el día a Jerte, Cabezuela y miradores. Calzado con agarre en ambas rutas.',
    accent: '#2f6f6a',
  },
  {
    id: 'domingo',
    date: '01 nov',
    title: 'Trujillo',
    place: 'Plaza Mayor',
    summary: 'Plaza Mayor, castillo, murallas y casco histórico. Dejad la tarde tranquila tras el día de naturaleza.',
    drive: 'Cáceres → Trujillo: aprox. 45–50 min por trayecto',
    schedule: [
      { time: '09:30', activity: 'Salida de Cáceres' },
      { time: '10:15', activity: 'Plaza Mayor y palacios' },
      { time: '11:00', activity: 'Castillo y murallas', notes: 'Vistas de la localidad y la dehesa.' },
      { time: '12:30', activity: 'Santa María la Mayor', notes: 'Callejuelas históricas según horarios.' },
      { time: '14:00', activity: 'Comida en el centro' },
      { time: '15:30–16:30', activity: 'Paseo, café y fotos' },
      { time: '16:30–17:30', activity: 'Regreso a Cáceres' },
    ],
    food: 'Compartid entrantes y probad recetas tradicionales o carne ibérica. Reservad si el fin de semana está concurrido.',
    accent: '#6b4f2d',
  },
  {
    id: 'lunes',
    date: '02 nov',
    title: 'Mérida y regreso',
    place: 'Teatro romano',
    summary: 'Priorizad el teatro y anfiteatro por la mañana.',
    drive: 'Cáceres → Mérida 55–65 min · Mérida → Jerez 2 h 50–3 h 10',
    schedule: [
      { time: '08:15', activity: 'Salida de Cáceres' },
      {
        time: '09:30–12:00',
        activity: 'Teatro y anfiteatro',
        notes: 'Revisad horario y entradas del lunes concreto.',
      },
      { time: '12:00–13:00', activity: 'Templo de Diana y paseo' },
      { time: '14:00', activity: 'Comida en Mérida' },
      { time: '15:30', activity: 'Salida hacia Jerez', notes: 'Parada breve si hace falta.' },
    ],
    note: 'Horarios: Consorcio de la Ciudad Monumental de Mérida.',
    accent: '#4a5568',
  },
];

export const checklistGroups: ChecklistGroup[] = [
  {
    id: 'preparar',
    title: 'Para preparar el viaje',
    description: 'Antes de salir de Jerez.',
    items: [
      { id: 'prevision', text: 'Revisar previsión, estado de rutas y aparcamientos' },
      { id: 'horarios', text: 'Comprobar horarios de Trujillo y monumentos de Mérida' },
      { id: 'reservas', text: 'Reservar restaurante el sábado y domingo' },
      { id: 'calzado', text: 'Preparar calzado con agarre y agua para el Jerte' },
      { id: 'capas', text: 'Ropa por capas para mañanas frescas' },
    ],
  },
  {
    id: 'alli',
    title: 'Cosas por hacer allí',
    description: 'Durante la escapada.',
    items: [
      { id: 'tapas', text: 'Cena de tapas en el casco histórico de Cáceres' },
      { id: 'senderismo', text: 'Decidir la ruta de senderismo' },
      { id: 'trujillo', text: 'Plaza Mayor, castillo y murallas de Trujillo' },
      { id: 'merida', text: 'Teatro y anfiteatro romanos de Mérida' },
      { id: 'regreso', text: 'Dejar margen en el regreso y hacer una pausa' },
    ],
  },
];

export interface HikingRoute {
  name: string;
  tagline: string;
  distance: string;
  elevation: string;
  duration: string;
  difficulty: string;
  highlights: string;
  href: string;
}

export const hikingRoutes: HikingRoute[] = [
  {
    name: 'Los Pilones',
    tagline: 'Garganta de los Infiernos',
    distance: '≈ 7,8 km',
    elevation: '+235 m',
    duration: '2 h 30–3 h 30',
    difficulty: 'Fácil',
    highlights: 'Marmitas de gigante, pozas de granito y la ruta más icónica del valle.',
    href: 'https://es.wikiloc.com/rutas-senderismo/los-pilones-de-la-garganta-del-infierno-valle-del-jerte-241241444',
  },
  {
    name: 'Nogaleas',
    tagline: 'Ruta de las cascadas',
    distance: '≈ 5,5 km',
    elevation: '+350 m',
    duration: '2–2 h 30',
    difficulty: 'Moderada',
    highlights: 'Varias cascadas desde Navaconcejo. Subida más exigente, con escalones de piedra.',
    href: 'https://es.wikiloc.com/rutas-senderismo/ruta-circular-de-las-nogaleas-o-nogaledas-desde-navaconcejo-valle-del-jerte-ruta-de-las-cascadas-228050007',
  },
];

export const links: UsefulLink[] = [
  {
    label: 'Consorcio Ciudad Monumental de Mérida',
    href: 'https://www.consorciomerida.org/',
  },
  {
    label: 'Guía del Valle del Jerte',
    href: 'https://www.turismovalledeljerte.com/',
  },
  {
    label: 'Wikiloc · Los Pilones',
    href: 'https://es.wikiloc.com/rutas-senderismo/los-pilones-de-la-garganta-del-infierno-valle-del-jerte-241241444',
  },
  {
    label: 'Wikiloc · Nogaleas',
    href: 'https://es.wikiloc.com/rutas-senderismo/ruta-circular-de-las-nogaleas-o-nogaledas-desde-navaconcejo-valle-del-jerte-ruta-de-las-cascadas-228050007',
  },
];

export const rotatingPlaces = ['Cáceres', 'Valle del Jerte', 'Trujillo', 'Mérida'];

export const splitFlapWords = ['CACERES', 'JERTE', 'TRUJILLO', 'MERIDA'];
