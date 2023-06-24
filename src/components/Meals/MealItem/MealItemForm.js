import React, { Fragment } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

function MealItemForm(props) {
    return (
        <Fragment>
            <form className={classes.form}>
                <Input label="Amount" input={{ id: 'amount_' + props.id, type: 'number', min: '1', max: '5', steps: '1', defaultValue: '1', }} />
                <button>+ Add</button>
            </form>
        </Fragment>
    )
}
export default MealItemForm;
