// src/lib/api.ts
// Centralized API client and data transformer for Looca ID Astro website

export interface BackendProduct {
  id: number;
  slug?: string;
  name: string;
  category_id: number;
  images: string[];
  description: string;
  action_link: string;
  action_label: string;
  total_click?: number;
}

export interface BackendCategory {
  id: number;
  slug: string;
  categories_name: string;
}

export interface BackendWorkshop {
  id: number;
  title: string;
  sub_title?: string;
  description: string;
  thumbnail?: string;
  video?: string | null;
  total_play?: number;
}

export interface ProductItem {
  id: number;
  slug?: string;
  category: string;
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

export const getPublicApiUrl = (): string => {
  const url = import.meta.env.PUBLIC_API_URL || 'https://backend.looca-id.com';
  return url.replace(/\/$/, '');
};

export const getFetchApiUrl = (): string => {
  const internal = import.meta.env.INTERNAL_API_URL;
  if (internal && internal.trim() !== '') {
    return internal.trim().replace(/\/$/, '');
  }
  return getPublicApiUrl();
};

export const getApiUrl = getPublicApiUrl;

export const getMediaUrl = (path?: string | null): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const apiUrl = getPublicApiUrl();
  return `${apiUrl}${path.startsWith('/') ? path : '/' + path}`;
};


// Fallback badges for cute e-commerce styling
const getProductBadge = (name: string, categorySlug: string, idx: number) => {
  const lower = name.toLowerCase();
  if (lower.includes('custom') || lower.includes('tailor') || lower.includes('attire')) {
    return { badge: 'Custom Made', badgeColor: 'bg-pink-deep text-white' };
  }
  if (lower.includes('bracelet') || lower.includes('initial')) {
    return { badge: 'Best Seller', badgeColor: 'bg-pink-deep text-white' };
  }
  if (lower.includes('scraft') || lower.includes('hat') || lower.includes('trending')) {
    return { badge: 'Trending', badgeColor: 'bg-yellow text-text-dark' };
  }
  if (lower.includes('souvenir') || lower.includes('wedding')) {
    return { badge: 'Handcrafted', badgeColor: 'bg-[#5DADE2] text-white' };
  }
  if (lower.includes('merch') || lower.includes('concert')) {
    return { badge: 'Special Edition', badgeColor: 'bg-pink-deep text-white' };
  }
  if (categorySlug === 'bagcharm') {
    return { badge: 'Flower Charm', badgeColor: 'bg-yellow text-text-dark' };
  }
  return idx % 2 === 0
    ? { badge: 'Popular', badgeColor: 'bg-pink-deep text-white' }
    : { badge: 'Handmade', badgeColor: 'bg-yellow text-text-dark' };
};

export async function fetchCategories(): Promise<BackendCategory[]> {
  try {
    const res = await fetch(`${getFetchApiUrl()}/api/public/categories`, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(3000),
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) return data;
    }
  } catch (err) {
    console.warn('[API] Warning fetching categories at build time (using defaults):', err);
  }
  return [
    { id: 1, slug: 'fashion', categories_name: 'Fashion' },
    { id: 2, slug: 'accessories', categories_name: 'Accessories' },
    { id: 3, slug: 'bagcharm', categories_name: 'Bagcharm' },
    { id: 4, slug: 'souvenir', categories_name: 'Souvenir' },
    { id: 5, slug: 'merchandise', categories_name: 'Merchandise' },
  ];
}

export async function fetchProducts(): Promise<ProductItem[]> {
  try {
    const [rawProducts, rawCategories] = await Promise.all([
      fetch(`${getFetchApiUrl()}/api/public/products`, {
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(3000),
      })
        .then((r) => (r.ok ? r.json() : []))
        .catch(() => []),
      fetchCategories(),
    ]);

    const catMap = new Map<number, { slug: string; name: string }>();
    rawCategories.forEach((c) => catMap.set(c.id, { slug: c.slug, name: c.categories_name }));

    if (Array.isArray(rawProducts) && rawProducts.length > 0) {
      return rawProducts.map((p: BackendProduct, idx: number) => {
        const catInfo = catMap.get(p.category_id) || { slug: 'accessories', name: 'Accessories' };
        const { badge, badgeColor } = getProductBadge(p.name, catInfo.slug, idx);
        const images = (p.images || []).map((img) => getMediaUrl(img));

        return {
          id: p.id,
          slug: p.slug,
          category: catInfo.slug,
          categoryLabel: catInfo.name,
          title: p.name,
          description: p.description,
          images: images.length > 0 ? images : ['/images/products/fashion1.jpeg'],
          badge,
          badgeColor,
          rating: (4.9 + (idx % 2 === 0 ? 0.1 : 0)).toFixed(1),
          sales: idx % 2 === 0 ? 'Best Seller' : 'Custom Order',
          actionText: p.action_label || 'Shop Now',
          actionLink: p.action_link || 'https://instagram.com/looca_id',
        };
      });
    }
  } catch (err) {
    console.warn('[API] Warning fetching products at build time (using fallbacks):', err);
  }

  // Fallback if backend API is unreachable
  return [];
}

export async function fetchWorkshops(): Promise<DiyWorkshopItem[]> {
  try {
    const res = await fetch(`${getFetchApiUrl()}/api/public/workshops`, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(3000),
    });
    if (res.ok) {
      const rawWorkshops = await res.json();
      if (Array.isArray(rawWorkshops) && rawWorkshops.length > 0) {
        return rawWorkshops.map((w: BackendWorkshop, idx: number) => {
          const hasVideo = Boolean(w.video && w.video.trim() !== '');
          const badge = hasVideo
            ? idx % 2 === 0
              ? 'Popular Class'
              : 'Trending Craft'
            : 'Video Coming Soon';
          const badgeColor = hasVideo
            ? idx % 2 === 0
              ? 'bg-pink-deep text-white'
              : 'bg-yellow text-text-dark'
            : 'bg-yellow-dark text-white';

          return {
            id: w.id,
            title: w.title,
            category: w.sub_title || 'Creative Class',
            description: w.description,
            thumbnail: getMediaUrl(w.thumbnail) || '/images/products/diy1.jpeg',
            video: w.video ? getMediaUrl(w.video) : '',
            badge,
            badgeColor,
            duration: '0:15',
            hasVideo,
            actionLink: `https://wa.me/6281215312939?text=${encodeURIComponent(
              `Hello Looca ID, I am interested in joining or ordering the workshop DIY: ${w.title}`
            )}`,
          };
        });
      }
    }
  } catch (err) {
    console.warn('[API] Warning fetching workshops at build time (using fallbacks):', err);
  }

  // Fallback
  return [];
}
