import logo from '@/assets/Logo.svg';
import styles from './Brands.module.scss';

const brands = [
  { id: 1, name: 'Marca 1', logo },
  { id: 2, name: 'Marca 2', logo },
  { id: 3, name: 'Marca 3', logo },
  { id: 4, name: 'Marca 4', logo },
  { id: 5, name: 'Marca 5', logo },
];

export const Brands = () => {
  return (
    <section className={styles.brands}>
      <h2 className={styles.brands__title}>Navegue por marcas</h2>
      <ul className={styles.brands__list}>
        {brands.map((brand) => (
          <li key={brand.id} className={styles.brands__item}>
            <img 
              src={brand.logo} 
              alt={`Logo da marca ${brand.name}`} 
              className={styles.brands__logo}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};