import React, { Fragment } from 'react'
import Modal from '../UI/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import classes from './Order.module.css'

export default function Order(props) {
  return (
    <Fragment>
        <Modal>
            <h3>ORDERED SUCCESSFULLY</h3>
            <span className={classes.icon}>
                <FontAwesomeIcon icon={faXmark} onClick={props.onClosee}/>
            </span>
        </Modal>
    </Fragment>
  )
}
