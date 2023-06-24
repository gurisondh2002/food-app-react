import React , {Fragment} from 'react'
import classes from './HeaderCartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function HeaderCartButton() {
  return (
    <Fragment>
        <button className={classes.button}>
            <span className={classes.icon}>
                <FontAwesomeIcon icon={faShoppingCart}/>
            </span>
            <span>Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    </Fragment>
  )
}
export default HeaderCartButton;
