import React, {Fragment} from 'react'
import classes from './Header.module.css'
import mealimg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Foodie</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealimg} alt="Food Image" />
        </div>
    </Fragment>
  )
}
export default Header;
