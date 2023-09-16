import styles from './LoadingSpinner.module.scss'

const LoadingSpinner = (): JSX.Element => {
    return (
            <div className={styles.container} >
                <img src="/images/loadingSpinner.gif" alt="Loading..." />
            </div>
    );
}

export default LoadingSpinner;