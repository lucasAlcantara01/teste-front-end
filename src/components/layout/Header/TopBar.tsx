import creditCard from '../../../assets/CreditCard.svg';
import shieldCheck from '../../../assets/ShieldCheck.svg';
import truck from '../../../assets/Truck.svg';
import styles from './Header.module.scss';

export const TopBar = () => {
  return (
    <section className={styles.topBar}>
      <div className={styles.topBar__container}>
        <div className={styles.topBar__item}>
          <img src={shieldCheck} alt="" />
          <p>
            Compra <span>100% segura</span>
          </p>
        </div>
        <div className={styles.topBar__item}>
          <img src={truck} alt="" />
          <p>
            <span>Frete grátis</span> acima de R$ 200
          </p>
        </div>
        <div className={styles.topBar__item}>
          <img src={creditCard} alt="" />
          <p>
            <span>Parcele</span> suas compras
          </p>
        </div>
      </div>
    </section>
  );
};
