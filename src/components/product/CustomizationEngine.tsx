'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { trendingDesigns, mugDesigns } from '@/data/designs';
import styles from './CustomizationEngine.module.css';

interface CustomizationEngineProps {
  productImage: string;
  productColor?: string;
  innerColor?: string;
  selectedSize?: string;
}

export default function CustomizationEngine({ 
  productImage, 
  productColor = '#000000', 
  innerColor,
  selectedSize
}: CustomizationEngineProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imagePos, setImagePos] = useState({ x: 50, y: 50 }); // percentages
  const [imageScale, setImageScale] = useState(0.5);
  const [isDragging, setIsDragging] = useState(false);
  const [resCheck, setResCheck] = useState<{ status: 'ideal' | 'good' | 'low', message: string } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        
        // Simulating resolution check
        const img = new window.Image();
        img.onload = () => {
          if (img.width < 1000) {
            setResCheck({ status: 'low', message: 'Low resolution. May appear blurry when printed.' });
          } else if (img.width < 2000) {
            setResCheck({ status: 'good', message: 'Good resolution. Suitable for standard prints.' });
          } else {
            setResCheck({ status: 'ideal', message: 'Ideal resolution. Perfect for high-quality printing!' });
          }
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      let clientX, clientY;

      if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;
      
      // Keep within bounds
      const clampedX = Math.max(0, Math.min(100, x));
      const clampedY = Math.max(0, Math.min(100, y));
      
      setImagePos({ x: clampedX, y: clampedY });
    }
  };

  const getAspectRatio = (size?: string) => {
    if (!size) return '1 / 1';
    if (size === '8x10') return '4 / 5';
    if (size === '12x18') return '2 / 3';
    if (size === '18x24') return '3 / 4';
    if (size === '24x36') return '2 / 3';
    return '1 / 1';
  };

  const aspectRatio = getAspectRatio(selectedSize);
  const isCanvas = selectedSize?.includes('x');

  return (
    <div className={styles.engine}>
      <div 
        className={`${styles.mockupContainer} ${isCanvas ? styles.canvasFrame : ''}`}
        style={{ aspectRatio: isCanvas ? aspectRatio : '1 / 1', height: 'auto' }}
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        <Image 
          src={productImage} 
          alt="Product Mockup" 
          fill
          style={{ 
            objectFit: 'contain',
            filter: productColor === '#FFFFFF' 
              ? 'none' 
              : productColor === '#000000' 
                ? 'invert(0.9) brightness(0.2)' 
                : `sepia(1) saturate(5) hue-rotate(${getHueRotate(productColor)}deg) brightness(0.8)`
          }}
          className={styles.mockupBase}
        />
        
        {innerColor && (
          <div 
            className={styles.innerColorIndicator} 
            style={{ backgroundColor: innerColor }}
            title={`Inside color: ${innerColor}`}
          />
        )}
        
        {uploadedImage && (
          <div 
            className={styles.overlay}
            style={{
              top: `${imagePos.y}%`,
              left: `${imagePos.x}%`,
              transform: `translate(-50%, -50%) scale(${imageScale})`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onMouseDown={handleMouseDown}
          >
            <img src={uploadedImage} alt="Uploaded Design" className={styles.designImage} />
          </div>
        )}
      </div>

      <div className={styles.controls}>
        {!productImage.includes('mug') && (
          <>
            <div className={styles.controlGroup}>
              <label className={styles.label}>Choose from Library (Trending)</label>
              <div className={styles.designLibrary}>
                {trendingDesigns.map((design) => (
                  <button 
                    key={design.id} 
                    className={`${styles.libraryItem} ${uploadedImage === design.image ? styles.activeLibraryItem : ''}`}
                    onClick={() => {
                      setUploadedImage(design.image);
                      setResCheck({ status: 'ideal', message: 'Premium library design selected!' });
                    }}
                  >
                    <div className={styles.libraryThumb}>
                      <Image src={design.image} alt={design.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <span>{design.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.divider}><span>OR</span></div>
          </>
        )}

        <div className={styles.controlGroup}>
          <label className={styles.label}>Upload Your Design</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileUpload} 
            className={styles.fileInput}
            id="design-upload"
          />
          <label htmlFor="design-upload" className={styles.uploadBtn}>
            {uploadedImage && !trendingDesigns.some(d => d.image === uploadedImage) ? 'Change Image' : 'Select Image'}
          </label>
        </div>

        {uploadedImage && (
          <>
            <div className={styles.controlGroup}>
              <label className={styles.label}>Adjust Scale</label>
              <input 
                type="range" 
                min="0.1" 
                max="1.5" 
                step="0.01" 
                value={imageScale} 
                onChange={(e) => setImageScale(parseFloat(e.target.value))}
                className={styles.rangeInput}
              />
            </div>

            {resCheck && (
              <div className={`${styles.resAlert} ${styles[resCheck.status]}`}>
                <span className={styles.resIcon}>
                  {resCheck.status === 'ideal' ? '✅' : resCheck.status === 'good' ? 'ℹ️' : '⚠️'}
                </span>
                <p>{resCheck.message}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function getHueRotate(hex: string): number {
  // Simple mapping for demo purposes
  const mapping: { [key: string]: number } = {
    '#000080': 200, // Navy
    '#FF0000': 0,   // Red
    '#4169E1': 190, // Royal Blue
  };
  return mapping[hex] || 0;
}
