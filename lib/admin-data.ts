export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
};

export const ADMIN_PASSWORD = 'smphotography';
export const ADMIN_LOGIN_KEY = 'sm_admin_logged_in';
export const ADMIN_GALLERY_KEY = 'sm_admin_gallery_items';

export const galleryCategories = ['all', 'wedding', 'prewedding', 'engagement', 'maternity', 'candid', 'modeling'];

export const defaultGalleryItems: GalleryItem[] = [
  { id: 'wedding-1', title: 'Elegant Wedding', category: 'wedding', image: '/images/IMG_2887.JPG', description: 'Timeless wedding frames with warmth and emotion.' },
  { id: 'wedding-2', title: 'Togetherness', category: 'wedding', image: '/images/IMG_2974.JPG', description: 'Family laughter, rituals and unforgettable vows.' },
  { id: 'wedding-3', title: 'Forever Begins Here', category: 'wedding', image: '/images/IMG_5206_WED (1).JPG', description: 'Celebrating love with cinematic storytelling.' },
  { id: 'prewedding-1', title: 'Love in the Air', category: 'prewedding', image: '/images/Prewedding (21).jpg', description: 'Soft, romantic portraits in meaningful locations.' },
  { id: 'prewedding-2', title: 'Golden Hour Romance', category: 'prewedding', image: '/images/Prewedding (26).jpg', description: 'Natural poses and glowing memories.' },
  { id: 'prewedding-3', title: 'Moments Before the Vows', category: 'prewedding', image: '/images/Prewedding (23).jpg', description: 'Quiet, intimate love-story magic.' },
  { id: 'engagement-1', title: 'Engagement Bliss', category: 'engagement', image: '/images/Engg (10).JPG', description: 'Graceful portraits for a joyful new beginning.' },
  { id: 'engagement-2', title: 'Promise of Forever', category: 'engagement', image: '/images/Engg (1).jpeg', description: 'A promise framed with elegance and light.' },
  { id: 'engagement-3', title: 'Celebrate the Journey', category: 'engagement', image: '/images/ENG.JPG', description: 'Bold celebration moments and warm emotions.' },
  { id: 'maternity-1', title: 'Glow Within', category: 'maternity', image: '/images/Maternity (21).jpg', description: 'Portraits celebrating the beauty of motherhood.' },
  { id: 'maternity-2', title: 'Motherhood Begins', category: 'maternity', image: '/images/Maternity (30).jpg', description: 'Gentle light and treasured anticipation.' },
  { id: 'maternity-3', title: 'Miracle of Life', category: 'maternity', image: '/images/Maternity (37).jpg', description: 'A soft and luminous chapter in family life.' },
  { id: 'candid-1', title: 'Joy Unfiltered', category: 'candid', image: '/images/Candid (1).jpeg', description: 'Honest moments that hold the heart of the day.' },
  { id: 'candid-2', title: 'Laughter in Motion', category: 'candid', image: '/images/Candid (10).jpg', description: 'Pure emotion and spontaneous celebration.' },
  { id: 'candid-3', title: 'Life’s Little Wonders', category: 'candid', image: '/images/Candid (8).jpeg', description: 'Real smiles, real love, real memories.' },
  { id: 'modeling-1', title: 'Fashion Forward', category: 'modeling', image: '/images/Modeling (5).jpg', description: 'Editorial confidence with a polished visual identity.' },
  { id: 'modeling-2', title: 'Style & Grace', category: 'modeling', image: '/images/Modeling (6).jpg', description: 'Bold, refined imagery for standout portfolios.' },
  { id: 'modeling-3', title: 'Captivating Presence', category: 'modeling', image: '/images/Modeling (8).jpg', description: 'Clean composition with confident energy.' },
];

export function isAdminLoggedIn(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(ADMIN_LOGIN_KEY) === 'true';
}

export function setAdminLoggedIn(value: boolean): void {
  if (typeof window === 'undefined') return;
  if (value) {
    window.localStorage.setItem(ADMIN_LOGIN_KEY, 'true');
    return;
  }

  window.localStorage.removeItem(ADMIN_LOGIN_KEY);
}

export function getCustomGalleryItems(): GalleryItem[] {
  if (typeof window === 'undefined') return [];

  try {
    const saved = window.localStorage.getItem(ADMIN_GALLERY_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved) as GalleryItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function getAllGalleryItems(): GalleryItem[] {
  return [...defaultGalleryItems, ...getCustomGalleryItems()];
}

export function saveCustomGalleryItems(items: GalleryItem[]): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(ADMIN_GALLERY_KEY, JSON.stringify(items));
}
