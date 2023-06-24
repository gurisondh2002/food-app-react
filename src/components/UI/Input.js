import React, { Fragment } from 'react'
import classes from './Input.module.css'

function Input(props) {
  return (
    <Fragment>
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} /> 
        </div>
    </Fragment>
  )
}
export default Input;
