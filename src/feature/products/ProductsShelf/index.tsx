import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useProducts } from '../../../hooks/useProducts';
import { ProductCard } from '../ProductCard';
import { ProductModal } from '../ProductModal';
import type { Product } from '../types';
import styles from './ProductShelf.module.scss';
import { ShelfCategory } from './ShelfCategory';
import './swiper-custom.scss';

interface ProductShelfProps {
  hasCategory: boolean;
}

export const ProductShelf = ({ hasCategory = false }: ProductShelfProps) => {
  const { data, isLoading, isError } = useProducts();
  const products = data?.products || [];
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (isLoading) {
    return <div>Carregando Produtos ...</div>;
  }
  if (isError) {
    return <div>Erro ao carregar Produtos</div>;
  }


  return (
    <>
      <section className={styles.shelf}>
        <div className={styles.shelf__header}>
          <h2 className={styles.shelf__title}>Produtos relacionados</h2>
          {hasCategory ? <ShelfCategory /> : <a href="/" className={styles.shelf__link}>Ver Todos</a>}
        </div>

        <div className={styles.shelf__list}>
          <button className="swiper-button-prev shelf-nav-prev" aria-label="Previous slide"></button>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.shelf-nav-prev',
              nextEl: '.shelf-nav-next',
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard 
                  product={product} 
                  onOpenModal={() => setSelectedProduct(product)} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-next shelf-nav-next" aria-label="Next slide"></button>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          isOpen={!!selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </>
  );
};
