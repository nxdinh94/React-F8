import styles from './Button.module.scss'
import clsx from 'clsx';
function Button ({ primary, disabled}){
    const classes = clsx(styles.btn,{
        [styles.primary]: primary,
        'd-flex': false,
        [styles.disabled]: disabled
    });
    return (
        <>
            {/* <button className={clsx(styles.btn, styles.active)}>Click me</button>
            <button className={clsx( {[styles.btn]:true,
                [styles.active]: true
            })}>Click me</button> */}
            
            <button className={classes}>Click me</button>
        </>
        
    )
}
export default Button;