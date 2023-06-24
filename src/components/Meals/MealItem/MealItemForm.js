import React, { Fragment ,useRef, useState} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

function MealItemForm(props) {
    // const [amount, setAmount] =useState(1)
    // const handleButtonClick =(e) =>{
    //     e.preventDefault();
    //     setAmount(amount + 1)
    //     console.log(amount)
    // }
    const [amountIsValid , setAmountIsValid] = useState(true)
    const amountInputRef = useRef();

    const submitHandler =(e) =>{
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber= +enteredAmount;

        if( enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber)
    }
    return (
        <Fragment>
            <form className={classes.form} onSubmit={submitHandler}>
                {/* <h3>{amount}</h3> */}
                <Input ref={amountInputRef} label="Amount"  input={{ id: 'amount_' + props.id, type: 'number', min: '1', max: '5', steps: '1', defaultValue: '1', }} />
                <button >+ Add</button>
                {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
            </form>
        </Fragment>
    )
}
export default MealItemForm;
