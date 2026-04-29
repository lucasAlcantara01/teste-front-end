import { useState } from 'react';
import styles from './ProductShelf.module.scss';

const categories = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
];

export const ShelfCategory = () => {
  const [activeCategory, setActiveCategory] = useState('CELULAR');

  return (
    <div className={styles.shelf__category_container}>
      <ul className={styles.shelf__category_list}>
        {categories.map((category) => (
          <li
            key={category}
            className={`${styles.shelf__category_item} ${
              activeCategory === category ? styles['shelf__category_item--active'] : ''
            }`}
          >
            <button
              onClick={() => setActiveCategory(category)}
              className={styles.shelf__category_btn}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
