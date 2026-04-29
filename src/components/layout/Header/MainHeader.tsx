import Group from '@/assets/group.svg?react';
import Heart from '@/assets/heart.svg?react';
import Logo from '@/assets/Logo.svg?react';
import MagnifyingGlass from '@/assets/MagnifyingGlass.svg?react';
import ShoppingCart from '@/assets/ShoppingCart.svg?react';
import UserCircle from '@/assets/UserCircle.svg?react';

import styles from './Header.module.scss';

export const MainHeader = () => {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.mainHeader__logo}>
        <Logo />
      </div>
      <div className={styles.mainHeader__search}>
        <input type="text" placeholder="O que você está buscando?" />
        <button type="submit" aria-label="Buscar">
          <MagnifyingGlass />
        </button>
      </div>
      <div className={styles.mainHeader__actions}>
        <button aria-label="Meus Pedidos">
          <Group />
        </button>
        <button aria-label="Favoritos">
          <Heart />
        </button>
        <button aria-label="Minha Conta">
          <UserCircle />
        </button>
        <button aria-label="Carrinho de Compras">
          <ShoppingCart />
        </button>
      </div>
    </div>
  );
};
