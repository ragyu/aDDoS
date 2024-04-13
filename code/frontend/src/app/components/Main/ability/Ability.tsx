import styles from './Ability.module.css';
import Image from 'next/image';

interface AbilityProps {
  src: string;
  alt: string;
  description: string;
}

const Ability = ({ src, alt, description }: AbilityProps) => {
  return (
    <div className={styles.ability}>
      <div className={styles.image}>
        <Image src={src} alt={alt} width={500} height={330} priority />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Ability;
