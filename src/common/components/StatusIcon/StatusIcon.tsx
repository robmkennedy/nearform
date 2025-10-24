import { errorIcon, successIcon } from '@assets/images/icons';
import styles from './StatusIcon.module.css';

type CardStatusProps = {
    status: 'success' | 'error';
};

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function StatusIcon({ status }: CardStatusProps) {
    return <div className={`${styles.statusIcon} ${status}`}>{status === 'success' ? successIcon : errorIcon}</div>;
}
