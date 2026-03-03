import styles from './ShareButton.module.css';


const ShareButton=({children}) => {
    return (
        <button className={styles.button}>
            {children}
        </button>
    );
}

export default ShareButton;
