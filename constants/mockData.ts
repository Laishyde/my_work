export interface Event {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  city: string;
  description: string;
  category: 'shows' | 'festivals' | 'teatro' | 'standup' | 'esportes' | 'tech';
  price: number;
  availableTickets: number;
  rating: number;
  isFeatured: boolean;
  isPopular: boolean;
}

export interface Ticket {
  id: string;
  eventId: string;
  eventTitle: string;
  eventImage: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  seat: string;
  price: number;
  qrCode: string;
  status: 'valid' | 'used' | 'expired';
  purchaseDate: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  favoriteEvents: string[];
  tickets: Ticket[];
  purchaseHistory: Ticket[];
}

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Rock in Rio 2026',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800',
    date: '2026-09-15',
    time: '16:00',
    location: 'Olympic Park',
    venue: 'Cidade do Rock',
    city: 'Rio de Janeiro',
    description: 'O maior festival de rock do mundo retorna com shows épicos de bandas internacionais e nacionais. Prepare-se para 7 dias de música inesquecível.',
    category: 'festivals',
    price: 450,
    availableTickets: 50000,
    rating: 4.9,
    isFeatured: true,
    isPopular: true,
  },
  {
    id: '2',
    title: 'Coldplay - Music of the Spheres',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
    date: '2026-03-20',
    time: '20:00',
    location: 'Maracanã',
    venue: 'Estádio do Maracanã',
    city: 'Rio de Janeiro',
    description: 'A banda britânica traz sua turnê mundial mais espetacular ao Brasil. Um show visual e musical imperdível.',
    category: 'shows',
    price: 380,
    availableTickets: 75000,
    rating: 4.8,
    isFeatured: true,
    isPopular: true,
  },
  {
    id: '3',
    title: 'Taylor Swift - Eras Tour',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    date: '2026-11-10',
    time: '19:30',
    location: 'Allianz Parque',
    venue: 'Allianz Parque',
    city: 'São Paulo',
    description: 'A turnê mais aguardada da década chega ao Brasil. Taylor Swift apresenta todos os seus álbuns em um show épico.',
    category: 'shows',
    price: 520,
    availableTickets: 45000,
    rating: 5.0,
    isFeatured: true,
    isPopular: true,
  },
  {
    id: '4',
    title: 'Festa do Peão de Boiadeiro',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800',
    date: '2026-07-15',
    time: '14:00',
    location: 'Barretos',
    venue: 'Parque de Exposições',
    city: 'Barretos',
    description: 'A maior festa do interior paulista com rodeio, shows sertanejos e muita tradição brasileira.',
    category: 'festivals',
    price: 150,
    availableTickets: 100000,
    rating: 4.6,
    isFeatured: false,
    isPopular: true,
  },
  {
    id: '5',
    title: 'O Fantasma da Ópera',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800',
    date: '2026-05-10',
    time: '20:00',
    location: 'Teatro Santander',
    venue: 'Teatro Santander',
    city: 'São Paulo',
    description: 'O musical mais famoso da Broadway chega ao Brasil em uma produção espetacular com cenários de tirar o fôlego.',
    category: 'teatro',
    price: 280,
    availableTickets: 2000,
    rating: 4.9,
    isFeatured: true,
    isPopular: false,
  },
  {
    id: '6',
    title: 'Whindersson Nunes - Ao Vivo',
    image: 'https://images.unsplash.com/photo-1527224538127-2104bb71c51b?w=800',
    date: '2026-04-25',
    time: '21:00',
    location: 'Villa Country',
    venue: 'Villa Country',
    city: 'São Paulo',
    description: 'O maior comediante do Brasil traz seu show mais recente com piadas inéditas e muita risada.',
    category: 'standup',
    price: 120,
    availableTickets: 5000,
    rating: 4.7,
    isFeatured: false,
    isPopular: true,
  },
  {
    id: '7',
    title: 'Web Summit Rio',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    date: '2026-05-15',
    time: '09:00',
    location: 'Riocentro',
    venue: 'Riocentro',
    city: 'Rio de Janeiro',
    description: 'O maior evento de tecnologia e inovação do mundo traz palestrantes globais e networking incrível.',
    category: 'tech',
    price: 890,
    availableTickets: 15000,
    rating: 4.8,
    isFeatured: true,
    isPopular: false,
  },
  {
    id: '8',
    title: 'Brasil vs Argentina',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    date: '2026-06-20',
    time: '16:00',
    location: 'Maracanã',
    venue: 'Estádio do Maracanã',
    city: 'Rio de Janeiro',
    description: 'O clássico sul-americano em uma partida decisiva pelas eliminatórias. Emoção garantida!',
    category: 'esportes',
    price: 350,
    availableTickets: 80000,
    rating: 4.9,
    isFeatured: true,
    isPopular: true,
  },
  {
    id: '9',
    title: 'Lollapalooza Brasil',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800',
    date: '2026-03-28',
    time: '13:00',
    location: 'Autódromo',
    venue: 'Autódromo de Interlagos',
    city: 'São Paulo',
    description: 'O festival de música mais icônico do mundo com 3 dias de shows, arte e cultura.',
    category: 'festivals',
    price: 420,
    availableTickets: 80000,
    rating: 4.7,
    isFeatured: true,
    isPopular: true,
  },
  {
    id: '10',
    title: 'Musical Hamilton',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800',
    date: '2026-08-20',
    time: '20:00',
    location: 'Teatro Renault',
    venue: 'Teatro Renault',
    city: 'São Paulo',
    description: 'O musical revolucionário que conquistou o mundo chega ao Brasil com elenco brasileiro.',
    category: 'teatro',
    price: 320,
    availableTickets: 2500,
    rating: 4.8,
    isFeatured: false,
    isPopular: true,
  },
  {
    id: '11',
    title: 'Tech Conference 2026',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800',
    date: '2026-10-05',
    time: '08:00',
    location: 'WTC',
    venue: 'World Trade Center',
    city: 'São Paulo',
    description: 'Conferência de tecnologia com foco em IA, blockchain e desenvolvimento de software.',
    category: 'tech',
    price: 650,
    availableTickets: 3000,
    rating: 4.5,
    isFeatured: false,
    isPopular: false,
  },
  {
    id: '12',
    title: 'Final da Copa do Brasil',
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800',
    date: '2026-11-25',
    time: '16:00',
    location: 'Maracanã',
    venue: 'Estádio do Maracanã',
    city: 'Rio de Janeiro',
    description: 'A grande final da Copa do Brasil com os melhores times do país em disputa.',
    category: 'esportes',
    price: 400,
    availableTickets: 75000,
    rating: 4.8,
    isFeatured: true,
    isPopular: true,
  },
];

export const mockUser: User = {
  id: '1',
  name: 'João Silva',
  email: 'joao.silva@email.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
  favoriteEvents: ['1', '2', '8'],
  tickets: [
    {
      id: 't1',
      eventId: '2',
      eventTitle: 'Coldplay - Music of the Spheres',
      eventImage: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
      date: '2026-03-20',
      time: '20:00',
      location: 'Maracanã',
      venue: 'Estádio do Maracanã',
      seat: 'Setor L, Fileira 15, Assento 42',
      price: 380,
      qrCode: 'CP-2026-03-20-L15-42',
      status: 'valid',
      purchaseDate: '2026-01-15',
    },
    {
      id: 't2',
      eventId: '5',
      eventTitle: 'O Fantasma da Ópera',
      eventImage: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800',
      date: '2026-05-10',
      time: '20:00',
      location: 'Teatro Santander',
      venue: 'Teatro Santander',
      seat: 'Plateia A, Assento 12',
      price: 280,
      qrCode: 'FO-2026-05-10-PA-12',
      status: 'valid',
      purchaseDate: '2026-01-20',
    },
  ],
  purchaseHistory: [
    {
      id: 't3',
      eventId: '1',
      eventTitle: 'Rock in Rio 2025',
      eventImage: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800',
      date: '2025-09-15',
      time: '16:00',
      location: 'Olympic Park',
      venue: 'Cidade do Rock',
      seat: 'Setor C, Fileira 20, Assento 8',
      price: 420,
      qrCode: 'RIR-2025-09-15-C20-8',
      status: 'used',
      purchaseDate: '2025-06-10',
    },
  ],
};

export const categories = [
  { id: 'shows', name: 'Shows', icon: 'music.note', color: '#FF6B6B' },
  { id: 'festivals', name: 'Festivais', icon: 'sparkles', color: '#4ECDC4' },
  { id: 'teatro', name: 'Teatro', icon: 'theatermasks', color: '#9B59B6' },
  { id: 'standup', name: 'Stand-up', icon: 'face.smiling', color: '#F39C12' },
  { id: 'esportes', name: 'Esportes', icon: 'sportscourt', color: '#E74C3C' },
  { id: 'tech', name: 'Eventos Tech', icon: 'cpu', color: '#3498DB' },
];

export const cities = [
  'Rio de Janeiro',
  'São Paulo',
  'Barretos',
  'Todas as cidades',
];
