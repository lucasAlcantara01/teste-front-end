import esportes from '@/assets/corrida_1.webp';
import ferramentas from '@/assets/ferramentas.webp';
import moda from '@/assets/moda_1.webp';
import saude from '@/assets/saude.webp';
import supermercado from '@/assets/supermercados_1.webp';
import tecnologia from '@/assets/tecnologia.webp';
import bebidas from '@/assets/whiskey.webp';
import styles from './CategoryGrid.module.scss';

import { CategoryItem } from './CategoryItem';

const categories = [
  { id: 1, title: 'Tecnologia', isActive: true, icon: tecnologia },
  { id: 2, title: 'Supermercado', icon: supermercado },
  { id: 3, title: 'Bebidas', icon: bebidas },
  { id: 4, title: 'Ferramentas', icon: ferramentas },
  { id: 5, title: 'Saúde', icon: saude },
  { id: 6, title: 'Esportes e Fitness', icon: esportes },
  { id: 7, title: 'Moda', icon: moda },
];

export const CategoryGrid = () => {
  return (
    <section className={styles.categoryGrid}>
      <div className={styles.categoryGrid__container}>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            title={category.title}
            icon={category.icon}
            isActive={category.isActive}
          />
        ))}
      </div>
    </section>
  );
};
