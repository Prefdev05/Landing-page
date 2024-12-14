import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product, isOffer = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${styles.productCard} ${isOffer ? styles.offerCard : ''} animate-fade-in`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isOffer && <div className={styles.offerBadge}>OFERTA</div>}
      <div className={styles.productImageContainer}>
        <Image 
          src={product.imageUrl} 
          alt={product.name} 
          layout="fill"
          objectFit="cover"
          className={`${styles.productImage} ${isHovered ? styles.imageHover : ''}`}
        />
      </div>
      <div className={styles.productDetails}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className={styles.productFooter}>
          <div className={styles.priceContainer}>
            {isOffer && (
              <span className={styles.originalPrice}>
           ${(product.price * 1.2).toFixed(3)}
              </span>
            )}
            <span className={styles.price}>
          ${product.price.toFixed(3)}
            </span>
          </div>
          <button 
            className={styles.buyButton}
            onMouseEnter={(e) => e.target.classList.add('animate-pulse')}
            onMouseLeave={(e) => e.target.classList.remove('animate-pulse')}
          >
            ¡Comprar!
          </button>
        </div>
        <div className={styles.productMeta}>
          <span>{product.brand}</span>
          <span className={product.inStock ? styles.inStock : styles.outOfStock}>
            {product.inStock ? 'Disponible' : 'Agotado'}
          </span>
        </div>
      </div>
    </div>
  );
}
