'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { products } from '@/data/products';
import Image from 'next/image';
import CustomizationEngine from '@/components/product/CustomizationEngine';
import { useCart } from '@/context/CartContext';
import styles from './product.module.css';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const product = products.find(p => p.id === params.id);
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedMaterial, setSelectedMaterial] = useState(product?.materials[0] || '');
  const [selectedColor, setSelectedColor] = useState({ name: 'White', hex: '#FFFFFF' });
  const [selectedMugType, setSelectedMugType] = useState('White Mug with Colour Printing');
  const [selectedTshirtType, setSelectedTshirtType] = useState('Round Neck');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const mugTypes = [
    'White Mug with Colour Printing',
    'White Mug with Red Inside',
    'White Mug with Blue Inside',
    'White Mug with Black Inside',
    'Black Mug with Red Inside',
    'Black Mug with White Inside',
    'Magic Mug with Colour Printing',
    '15oz Jumbo White Mug'
  ];

  const tshirtTypes = [
    'Round Neck',
    'V-Neck',
    'Polo',
    'Graphic T-Shirt',
    'Oversized'
  ];

  const colors = [
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Navy', hex: '#000080' },
    { name: 'Red', hex: '#FF0000' },
    { name: 'Royal Blue', hex: '#4169E1' },
  ];


  const availableColors = product?.category === 'mugs' 
    ? colors.filter(c => c.name === 'White' || c.name === 'Black')
    : (product?.category === 'canvas' || product?.category === 'posters')
      ? [] 
      : colors;

  if (!product) return <div className="container">Product not found</div>;

  const totalPrice = product.basePrice * quantity + (selectedSize === 'XL' || selectedSize === 'XXL' ? 50 : 0);

  const handleAddToCart = () => {
    addToCart({
      id: Math.random().toString(36).substr(2, 9),
      productId: product.id,
      name: product.name,
      price: totalPrice / quantity, // Base price + size adjustment
      quantity: quantity,
      size: selectedSize,
      material: selectedMaterial,
      image: product.image
    });
    router.push('/cart');
  };

  const mugGallery = [
    '/images/mug-designs/mug-2.webp',
    '/images/mug-designs/mug-3.webp',
    '/images/mug-designs/mug-4.webp',
    '/images/mug-designs/mug-5.webp',
    '/images/mug-designs/mug-6.webp',
    '/images/mug-designs/mug-7.webp',
    '/images/mug-designs/mug-8.webp',
    '/images/mug-designs/mug-9.webp',
    '/images/mug-designs/unnamed (1).webp',
    '/images/mug-designs/unnamed (4).webp',
  ];

  const tshirtGallery = [
    '/images/TShirt Design/2024-08-02 (1).webp',
    '/images/TShirt Design/2024-08-02.webp',
    '/images/TShirt Design/unnamed (2).webp',
    '/images/TShirt Design/unnamed (3).webp',
    '/images/TShirt Design/unnamed.webp',
  ];

  const activeGallery = product.category === 'mugs' ? mugGallery : (product.category === 't-shirts' ? tshirtGallery : null);

  const displayImage = selectedGalleryImage || (selectedMugType === 'Magic Mug with Colour Printing' 
    ? '/images/magic-mug-mockup.png' 
    : product.image);

  const getInnerColor = (type: string) => {
    if (type.includes('Red')) return '#FF0000';
    if (type.includes('Blue')) return '#4169E1';
    if (type.includes('Black')) return '#000000';
    if (type.includes('White')) return '#FFFFFF';
    return undefined;
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.visuals}>
            <CustomizationEngine 
              productImage={displayImage} 
              productColor={selectedColor.hex} 
              innerColor={getInnerColor(selectedMugType)}
              selectedSize={selectedSize}
            />

            {activeGallery && (
              <div className={styles.gallery}>
                {activeGallery.map((img, idx) => (
                  <button 
                    key={idx} 
                    className={`${styles.galleryThumb} ${displayImage === img ? styles.activeThumb : ''}`}
                    onClick={() => setSelectedGalleryImage(img)}
                  >
                    <Image src={img} alt={`Gallery ${idx}`} fill style={{ objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className={styles.details}>
            <span className={styles.category}>{product.category}</span>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.price}>₹{totalPrice}</p>
            <p className={styles.description}>{product.description}</p>

            <div className={styles.options}>
              {product.category === 't-shirts' && (
                <div className={styles.optionGroup}>
                  <label className={styles.label}>Type of T-Shirt</label>
                  <div className={styles.chips}>
                    {tshirtTypes.map(type => (
                      <button 
                        key={type} 
                        className={`${styles.chip} ${selectedTshirtType === type ? styles.activeChip : ''}`}
                        onClick={() => setSelectedTshirtType(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {availableColors.length > 0 ? (
                <div className={styles.optionGroup}>
                  <label className={styles.label}>Select Color: <span style={{ color: 'var(--secondary-text)', fontWeight: '400' }}>{selectedColor.name}</span></label>
                  <div className={styles.colorGrid}>
                    {availableColors.map(color => (
                      <button 
                        key={color.name}
                        className={`${styles.colorCircle} ${selectedColor.name === color.name ? styles.activeColor : ''}`}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => setSelectedColor(color)}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              ) : null}
              <div className={styles.optionGroup}>
                <label className={styles.label}>Select Size</label>
                <div className={styles.chips}>
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      className={`${styles.chip} ${selectedSize === size ? styles.activeChip : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.optionGroup}>
                <label className={styles.label}>Material</label>
                <select 
                  className={styles.select}
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                >
                  {product.materials.map(material => (
                    <option key={material} value={material}>{material}</option>
                  ))}
                </select>
              </div>

              <div className={styles.optionGroup}>
                <label className={styles.label}>Quantity</label>
                <div className={styles.quantityControls}>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className={styles.qtyBtn}>-</button>
                  <span className={styles.qtyValue}>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className={styles.qtyBtn}>+</button>
                </div>
              </div>
            </div>

            <button className={`btn-primary ${styles.addToCart}`} onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
