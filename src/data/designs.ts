export interface TrendingDesign {
  id: string;
  name: string;
  image: string;
}

export const trendingDesigns: TrendingDesign[] = [
  { id: 'retro-vibe', name: 'Retro Sunset', image: '/images/designs/retro-sunset.png' },
  { id: 'minimal-nature', name: 'Minimal Mountain', image: '/images/designs/minimal-mountain.png' },
  { id: 'abstract-art', name: 'Abstract Splash', image: '/images/designs/abstract-splash.png' },
  { id: 'tech-line', name: 'Cyber Grid', image: '/images/designs/cyber-grid.png' },
];

export const mugDesigns: TrendingDesign[] = [
  { id: 'mug-design-1', name: 'Child Portrait', image: '/images/mug-designs/mug-1.png' },
  { id: 'mug-design-2', name: 'Family Moments', image: '/images/mug-designs/mug-2.png' },
  { id: 'mug-design-3', name: 'Handheld Memory', image: '/images/mug-designs/mug-3.png' },
  { id: 'mug-design-4', name: 'Birthday Collage', image: '/images/mug-designs/mug-4.png' },
  { id: 'mug-design-5', name: 'Birthday Table', image: '/images/mug-designs/mug-5.png' },
];