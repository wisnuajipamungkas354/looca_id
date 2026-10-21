export interface ProductItem {
  id: number;
  category: 'fashion' | 'accessories' | 'souvenir';
  categoryLabel: string;
  title: string;
  description: string;
  images: string[];
  badge: string;
  badgeColor: string;
  rating: string;
  sales: string;
  actionText: string;
  actionLink: string;
}

export interface DiyWorkshopItem {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  video: string;
  badge: string;
  badgeColor: string;
  duration: string;
  hasVideo: boolean;
  actionLink: string;
}

export const diyWorkshops: DiyWorkshopItem[] = [
  {
    id: 1,
    title: 'Princess Birthday Crown',
    category: 'Princess Craft',
    description: 'Create magical, sparkling princess crowns adorned with crystals, beads, and custom charms.',
    thumbnail: '/images/products/diy1.jpeg',
    video: '/images/products/crown.mp4',
    badge: 'Popular Class',
    badgeColor: 'bg-pink-deep text-white',
    duration: '0:15',
    hasVideo: true,
    actionLink: 'https://wa.me/6281215312939?text=Halo%20Looca%20ID,%20saya%20tertarik%20mengikuti/order%20DIY%20Birthday%20Crown',
  },
  {
    id: 2,
    title: 'Orchid Flower Bagcharm',
    category: 'Botanical Craft',
    description: 'Learn the delicate art of assembling realistic beaded orchid blooms with durable stainless wire.',
    thumbnail: '/images/products/diy2.jpeg',
    video: '/images/products/orchid.mp4',
    badge: 'Floral Special',
    badgeColor: 'bg-yellow text-text-dark',
    duration: '0:15',
    hasVideo: true,
    actionLink: 'https://wa.me/6281215312939?text=Halo%20Looca%20ID,%20saya%20tertarik%20mengikuti/order%20DIY%20Orchid%20Bagcharm',
  },
  {
    id: 3,
    title: 'Painting Canvas Totebag',
    category: 'Painting Class',
    description: 'Express yourself by painting artistic custom patterns on organic cotton canvas totebags.',
    thumbnail: '/images/products/diy3.jpeg',
    video: '/images/products/painting-totebag.mp4',
    badge: 'Relaxing Session',
    badgeColor: 'bg-[#5DADE2] text-white',
    duration: '0:15',
    hasVideo: true,
    actionLink: 'https://wa.me/6281215312939?text=Halo%20Looca%20ID,%20saya%20tertarik%20mengikuti/order%20DIY%20Painting%20Totebag',
  },
  {
    id: 4,
    title: 'Paracord Bagcharm Craft',
    category: 'Weaving & Cord',
    description: 'Knotting and styling colorful outdoor-grade paracords into aesthetic daily bag accessories.',
    thumbnail: '/images/products/diy4.jpeg',
    video: '/images/products/paracord-bagcharm.mp4',
    badge: 'Trending Craft',
    badgeColor: 'bg-pink-deep text-white',
    duration: '0:20',
    hasVideo: true,
    actionLink: 'https://wa.me/6281215312939?text=Halo%20Looca%20ID,%20saya%20tertarik%20mengikuti/order%20DIY%20Paracord%20Bagcharm',
  },
  {
    id: 5,
    title: 'Fluffy Moru Doll DIY',
    category: 'Plush & Wire',
    description: 'Bend, twist, and fluff wire plush chenille stems into super cute portable companion dolls.',
    thumbnail: '/images/products/diy5.jpeg',
    video: '', // Coming soon
    badge: 'Video Coming Soon',
    badgeColor: 'bg-yellow-dark text-white',
    duration: 'Workshop',
    hasVideo: false,
    actionLink: 'https://wa.me/6281215312939?text=Halo%20Looca%20ID,%20saya%20tertarik%20mengikuti/order%20DIY%20Moru%20Doll',
  },
  {
    id: 6,
    title: 'Artisan Beads Watch Strap',
    category: 'Jewelry & Timepiece',
    description: 'Combine functional timepieces with artistic colorful beads, pearls, and custom elastic cords.',
    thumbnail: '/images/products/diy6.jpeg',
    video: '', // Coming soon
    badge: 'Video Coming Soon',
    badgeColor: 'bg-yellow-dark text-white',
    duration: 'Workshop',
    hasVideo: false,
    actionLink: 'https://wa.me/6281215312939?text=Halo%20Looca%20ID,%20saya%20tertarik%20mengikuti/order%20DIY%20Beads%20Watch',
  },
];

export const categories = [
  { 
    id: 'all', 
    label: 'All Products', 
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`
  }, 
  { 
    id: 'fashion', 
    label: 'Fashion', 
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/></svg>`
  }, 
  { 
    id: 'accessories', 
    label: 'Accessories & Bagcharms', 
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3L8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>`
  }, 
  { 
    id: 'souvenir', 
    label: 'Souvenir & Custom Merchandise', 
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>`
  }, 
];

export const products: ProductItem[] = [
  // Fashion
  {
    id: 1,
    category: 'fashion',
    categoryLabel: 'Fashion',
    title: 'Polca-Looca Scraft Hat',
    description: '2 in 1 scraft and hat that avail for 2 size small and medium.',
    images: ['/images/products/fashion2.jpeg', '/images/products/fashion3.jpeg'],
    badge: 'Trending',
    badgeColor: 'bg-yellow text-text-dark',
    rating: '4.9',
    sales: 'New Collection',
    actionText: 'Shop Now',
    actionLink: 'https://id.shp.ee/AUnMoub8',
  },
  {
    id: 2,
    category: 'fashion',
    categoryLabel: 'Fashion',
    title: 'Custom Attire',
    description: 'Custom-made kebaya, family outfits, bridesmaid dresses, and more. Tailored to your design, measurements, and style.',
    images: ['/images/products/fashion1.jpeg', '/images/products/fashion.jpeg'],
    badge: 'Custom Made',
    badgeColor: 'bg-pink-deep text-white',
    rating: '5.0',
    sales: 'Custom Order',
    actionText: 'Request Custom',
    actionLink: 'https://www.instagram.com/looca_tailor',
  },

  // Accessories & Bagcharms
  {
    id: 4,
    category: 'accessories',
    categoryLabel: 'Accessories',
    title: 'Initial Bracelet',
    description: 'Stainless steel bracelet, locally handmade by skilled crafters. Durable, timeless, and made to last.',
    images: ['/images/about1.jpeg', '/images/about2.jpeg'],
    badge: 'Best Seller',
    badgeColor: 'bg-pink-deep text-white',
    rating: '5.0',
    sales: 'Custom Initial',
    actionText: 'Shop Now',
    actionLink: 'https://id.shp.ee/HYVGmweV',
  },
  {
    id: 5,
    category: 'accessories',
    categoryLabel: 'Bagcharm',
    title: 'Orchid Bagcharm',
    description: 'Handmade orchid charm with delicate bead details',
    images: ['/images/about3.jpeg'],
    badge: 'Flower Bagcharm',
    badgeColor: 'bg-yellow text-text-dark',
    rating: '4.9',
    sales: 'Orchid',
    actionText: 'Shop Now',
    actionLink: 'https://id.shp.ee/Egy3nwWV',
  },
  {
    id: 6,
    category: 'accessories',
    categoryLabel: 'Accessories',
    title: '2 in 1 Tasbeeh bracelet',
    description: 'A versatile bracelet & tasbih in one',
    images: ['/images/about4.jpeg', '/images/about6.jpeg'],
    badge: 'Themed Bracelet',
    badgeColor: 'bg-[#5DADE2] text-white',
    rating: '5.0',
    sales: 'Ramadhan Edition',
    actionText: 'Shop Now',
    actionLink: 'https://id.shp.ee/yndBxeAL',
  },
  {
    id: 7,
    category: 'accessories',
    categoryLabel: 'Accessories',
    title: 'K-pop bracelet – Haechan',
    description: 'Haechan-inspired bracelet with 2 designs: Bear & Sunflower.',
    images: ['/images/products/acc-kpop-bracelet.jpg'],
    badge: 'Themed Bracelet',
    badgeColor: 'bg-pink-deep text-white',
    rating: '4.9',
    sales: 'K-pop Edition',
    actionText: 'Shop Now',
    actionLink: 'https://id.shp.ee/D5oPDkBV',
  },
  {
    id: 15,
    category: 'accessories',
    categoryLabel: 'Accessories',
    title: 'Artisan Bead Collection',
    description: 'Vibrant handcrafted bracelets and accessories made with selected premium components.',
    images: ['/images/about5.jpeg', '/images/about7.jpeg'],
    badge: 'Artisan Pick',
    badgeColor: 'bg-pink-deep text-white',
    rating: '5.0',
    sales: 'Artisan Made',
    actionText: 'Shop Now',
    actionLink: 'https://id.shp.ee/HYVGmweV',
  },

  // Souvenir & Custom Merchandise
  {
    id: 8,
    category: 'souvenir',
    categoryLabel: 'Merchandise',
    title: 'Coorporate/Brand Merch',
    description: 'Custom designs with adjustable budget & quantity. Available products: keychains, stickers, mirrors, pouches, and more.',
    images: ['/images/products/souvenir-institution-brand.jpeg', '/images/products/souvenir-institution-brand-2.png'],
    badge: 'Sold 5K+',
    badgeColor: 'bg-yellow text-text-dark',
    rating: '5.0',
    sales: 'Corporate Merch',
    actionText: 'Inquire Bulk Order',
    actionLink: 'https://wa.me/6281215312939',
  },
  {
    id: 9,
    category: 'souvenir',
    categoryLabel: 'Souvenir',
    title: 'Wedding Souvenir',
    description: 'Custom-made souvenirs with personalized initials',
    images: ['/images/products/souvenir-wedding.jpeg', '/images/products/souvenir-wedding-2.jpeg'],
    badge: 'Sold 2k+',
    badgeColor: 'bg-pink-deep text-white',
    rating: '5.0',
    sales: 'Wedding Souvenir',
    actionText: 'Inquire Bulk Order',
    actionLink: 'https://wa.me/6281215312939',
  },
  {
    id: 10,
    category: 'souvenir',
    categoryLabel: 'Merchandise',
    title: 'Institution & Event Souvenir',
    description: 'Custom merchandise for campuses, government institutions, organizations, and more.',
    images: ['/images/products/merch-institution.jpeg', '/images/products/merch-institution-2.jpeg'],
    badge: 'Min. 100 pcs',
    badgeColor: 'bg-[#5DADE2] text-white',
    rating: '5.0',
    sales: 'Institution Merch',
    actionText: 'Inquire Bulk Order',
    actionLink: 'https://wa.me/6281215312939',
  },
  {
    id: 11,
    category: 'souvenir',
    categoryLabel: 'Merchandise',
    title: 'Concert & Fan Merch Edition',
    description: 'Custom concert freebies, lightstick straps, and fan gathering merchandise.',
    images: ['/images/products/merch-concert.jpeg', '/images/products/merch-concert-2.jpeg', '/images/products/merch-concert-3.jpeg'],
    badge: 'No Minimum order',
    badgeColor: 'bg-pink-deep text-white',
    rating: '5.0',
    sales: 'Fan Merch Ed.',
    actionText: 'Inquire Bulk Order',
    actionLink: 'https://wa.me/6281215312939',
  },
];
