import React, {Fragment} from 'react'
import classes from './Header.module.css'
import mealimg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

function Header() {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Foodie</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealimg} alt="Food Image" />
        </div>
    </Fragment>
  )
}
export default Header;
