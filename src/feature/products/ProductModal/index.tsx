import Button from '@/components/common/Button/Button';
import { formatCurrency } from '../../../utils/formatCurrency';
import type { Product } from '../types';
import styles from './ProductModal.module.scss';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!isOpen) return null;

  return (
    <section className={styles.modal__overlay} onClick={onClose}>
      <article className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.modal__close} onClick={onClose} aria-label="Fechar modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="#3F3F40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className={styles.modal__content}>
          <div className={styles.modal__image}>
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className={styles.modal__info}>
            <h2 className={styles.modal__title}>{product.productName}</h2>
            <div className={styles.modal__price}>{formatCurrency(product.price)}</div>
            <p className={styles.modal__desc}>
              {product.descriptionShort}
            </p>
            <a href="#" className={styles.modal__link}>
              Veja mais detalhes do produto &gt;
            </a>

            <div className={styles.modal__actions}>
              <div className={styles.modal__counter}>
                <button className={styles.modal__counterBtn}>
                  <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H11" stroke="#041E50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <span className={styles.modal__counterVal}>02</span>
                <button className={styles.modal__counterBtn}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1V11M1 6H11" stroke="#041E50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <Button variant="primary">COMPRAR</Button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}