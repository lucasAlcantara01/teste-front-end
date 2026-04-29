import Button from '../../../components/common/Button/Button';
import { formatCurrency } from '../../../utils/formatCurrency';
import type { Product } from '../types';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  onOpenModal: () => void;
}

export const ProductCard = ({ product, onOpenModal }: ProductCardProps) => {

  return (
    <div className={styles.card}>
      <img
        src={product.photo}
        alt={product.productName}
        className={styles.card__image}
      />

      <div className={styles.card__info}>
        <h3 className={styles.card__name}>{product.productName}</h3>

        <div className={styles.card__prices}>
          <span className={styles.card__oldPrice}>
            {formatCurrency(product.price * 1.1)}
          </span>
          <span className={styles.card__price}>
            {formatCurrency(product.price)}
          </span>
        </div>

        <p className={styles.card__installments}>
          ou 10x de {formatCurrency(product.price / 10)} sem juros
        </p>

        <p className={styles.card__shipping}>Frete grátis</p>
        <Button variant="secondary" onClick={onOpenModal}>Comprar</Button>
      </div>
    </div>
  );
};
