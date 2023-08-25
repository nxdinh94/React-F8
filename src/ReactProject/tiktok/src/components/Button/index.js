import styles from './Button.module.css'
import clsx from 'clsx';
function Button ({ primary}){
    const classes = clsx(styles.btn,{[styles.primary]: primary,
                                        'd-flex': false});
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