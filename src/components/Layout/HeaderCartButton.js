import React , {Fragment , useContext} from 'react'
import classes from './HeaderCartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../store/cart-context'

function HeaderCartButton(props) {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
  return (
    <Fragment>
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <FontAwesomeIcon icon={faShoppingCart}/>
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    </Fragment>
  )
}
export default HeaderCartButton;
