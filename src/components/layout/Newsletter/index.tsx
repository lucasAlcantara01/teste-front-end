import styles from './Newsletter.module.scss';

export const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletter__container}>
        <div className={styles.newsletter__content}>
          <div className={styles.newsletter__text}>
            <h2>Inscreva-se na nossa newsletter</h2>
            <p>
              Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
            </p>
          </div>
          <div className={styles.newsletter__formSection}>
            <form className={styles.newsletter__form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.newsletter__inputs}>
                <input type="text" placeholder="Digite seu nome" className={styles.newsletter__input} />
                <input type="email" placeholder="Digite seu e-mail" className={styles.newsletter__input} />
                <button type="submit" className={styles.newsletter__button}>INSCREVER</button>
              </div>
              <label className={styles.newsletter__checkboxLabel}>
                <input type="checkbox" className={styles.newsletter__checkbox} />
                <span>Aceito os termos e condições</span>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
