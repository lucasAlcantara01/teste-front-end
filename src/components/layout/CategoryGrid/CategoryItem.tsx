import styles from './CategoryGrid.module.scss';

interface CategoryItemProps {
  title: string;
  icon?: string;
  isActive?: boolean;
}

export const CategoryItem = ({
  title,
  icon,
  isActive = false,
}: CategoryItemProps) => {
  return (
    <div
      className={`${styles.categoryItem} ${isActive ? styles['categoryItem--active'] : ''}`}
    >
      <div className={styles.categoryItem__iconWrapper}>
        <img src={icon} alt={title} />
      </div>
      <span className={styles.categoryItem__title}>{title}</span>
    </div>
  );
};
