import styles from './Chip.module.scss';

export interface IChipProps {
  variant: 'positive' | 'critical';
  children: React.ReactNode;
}

const Chip: React.FC<IChipProps> = ({ children, variant }) => {
  return (
    <span className={`${styles.chip} ${styles[variant]}`}>
      <span className={`${styles.dot} ${styles[variant]}`}></span>
      {children}
    </span>
  );
}

export default Chip;