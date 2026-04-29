import parceirosImg from '../../../assets/parceiros.png';
import { PartnerCard } from './PartnerCard';
import styles from './Partners.module.scss';

export const Partners = () => {
  const partnersData = [
    {
      id: 1,
      title: "Parceiros",
      description: "Lorem ipsum dolor sit amet, consectetur",
      buttonText: "Confira",
      image: parceirosImg
    },
    {
      id: 2,
      title: "Parceiros",
      description: "Lorem ipsum dolor sit amet, consectetur",
      buttonText: "Confira",
      image: parceirosImg
    }
  ];

  return (
    <section className={styles.partners}>
      {partnersData.map(partner => (
        <PartnerCard key={partner.id} {...partner} />
      ))}
    </section>
  );
};