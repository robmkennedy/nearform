import { errorIcon, successIcon } from '@assets/images/icons';
import styles from './StatusIcon.module.css';

type CardStatusProps = {
    status: 'success' | 'error';
};

export function StatusIcon({ status }: CardStatusProps) {
    return <div className={`${styles.statusIcon} ${status}`}>{status === 'success' ? successIcon : errorIcon}</div>;
}
