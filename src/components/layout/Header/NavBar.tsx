import { useState } from 'react';
import Crown from '@/assets/CrownSimple.svg?react';
import styles from './Header.module.scss';

interface NavItem {
  label: string;
  href: string;
  isHighlight?: boolean;
  hasIcon?: boolean;
}

const navItems: NavItem[] = [
  { label: 'TODAS CATEGORIAS', href: '#' },
  { label: 'SUPERMERCADO', href: '#' },
  { label: 'LIVROS', href: '#' },
  { label: 'MODA', href: '#' },
  { label: 'LANÇAMENTOS', href: '#' },
  { label: 'OFERTAS DO DIA', href: '#', isHighlight: true },
  { label: 'ASSINATURA', href: '#', hasIcon: true },
];

export const NavBar = () => {
  const [activeItem, setActiveItem] = useState('OFERTAS DO DIA');

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {navItems.map((item) => (
          <li key={item.label} className={styles.navbar__item}>
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(item.label);
              }}
              className={`
                ${styles.navbar__link}
                ${item.isHighlight ? styles['navbar__link--highlight'] : ''}
                ${activeItem === item.label ? styles['navbar__link--active'] : ''}
              `}
            >
              {item.hasIcon && <Crown />}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
