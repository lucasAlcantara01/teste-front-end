import Button from '../../common/Button/Button';
import styles from './Partners.module.scss';

interface PartnerCardProps {
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

export const PartnerCard = ({title, description, buttonText, image }: PartnerCardProps) => {
  return (
    <div 
      className={styles.partnerCard} 
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${image})` }}
    >
      <div className={styles.partnerCard__content}>
        <h3 className={styles.partnerCard__title}>{title}</h3>
        <p className={styles.partnerCard__description}>{description}</p>
        <Button variant="primary" onClick={() => {}}>{buttonText}</Button>
      </div>
    </div>
  );
};