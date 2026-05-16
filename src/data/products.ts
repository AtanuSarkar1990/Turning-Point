export interface Product {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  description: string;
  image: string;
  sizes: string[];
  materials: string[];
}

export const products: Product[] = [
  {
    id: 'custom-tshirt',
    name: 'Turning Point Premium T-Shirt',
    category: 't-shirts',
    basePrice: 199,
    description: '100% Organic Cotton, tailored fit, durable print.',
    image: '/images/tshirt-mockup.png',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'Oversize'],
    materials: ['Cotton', 'Polyester Blend']
  },
  {
    id: 'printed-mug',
    name: 'Turning Point Custom Cup',
    category: 'mugs',
    basePrice: 299,
    description: 'High-quality ceramic cup, microwave and dishwasher safe.',
    image: '/images/mug-mockup.png',
    sizes: ['11oz', '15oz'],
    materials: ['Ceramic']
  },
  {
    id: 'magic-mug',
    name: 'Heat Reveal Magic Mug',
    category: 'mugs',
    basePrice: 449,
    description: 'Watch your design appear when you pour hot liquid.',
    image: '/images/magic-mug-mockup.png',
    sizes: ['11oz'],
    materials: ['Ceramic']
  },
  {
    id: 'canvas-print',
    name: 'Turning Point Premium Canvas',
    category: 'canvas',
    basePrice: 899,
    description: 'Museum-grade canvas with wooden frame.',
    image: '/images/canvas-mockup.png',
    sizes: ['8x10', '12x18', '18x24', '24x36'],
    materials: ['Matte Canvas', 'Glossy Canvas']
  }
];
