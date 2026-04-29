import bgHero from '../../../assets/bg-hero.webp';
import Button from '../../common/Button/Button';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={bgHero} alt="" className={styles.hero__bg} />
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            Venha conhecer nossas <br />
            <span>promoções exclusivas</span>
          </h1>
          <p className={styles.hero__subtitle}>
            <span>50%</span> de desconto nos produtos
          </p>
          <Button variant='primary'>Ver produto</Button>
        </div>
      </div>
    </section>
  );
};
