import style from './PaymentTwo.module.scss'
import React, { useState } from 'react'

const PaymentTwo = (props) => {
  let newAmount = React.createRef()
  let newRoutingNumber = React.createRef()
  let newEmail = React.createRef()
  let newF = React.createRef()
  let [activeSelest, setActiveSelect] = useState('Выберите валюту')
  let [show, setShow] = useState(false)
  let active = () => {
    let flag = true
    let amount = newAmount.current.value
    let email = newEmail.current.value
    let routingNumber = newRoutingNumber.current.value
    flag =
      routingNumber.current.checkValidity() &&
      newAmount.current.checkValidity() &&
      newEmail.current.checkValidity()
    let sumObject = {
      id: '2',
      wallet: activeSelest,
      amount: amount,
      email: email,
      routingNumber: routingNumber,
    }
    console.log(sumObject)
    flag && props.up(true)
  }
  let openSelect = () => {
    setShow(!show)
  }
  let options = props.wallet.map((p) => {
    return (
      <li
        key={p.name}
        onClick={() => {
          setActiveSelect(p.code + ' ' + p.value)
          setShow(!show)
        }}
      >
        <div className={style.accountName}>
          <p>{p.code}</p>
          <span>{p.value}</span>
        </div>
        <p className={style.des}>{p.des}</p>
      </li>
    )
  })
  return (
    <form className={style.all} ref={newF}>
      <div className="wallet">
        <div>WALLET</div>
        <div className={show ? style.selectInputActiv : style.selectInput}>
          <div className={style.selectOptions} onClick={openSelect}>
            <p>{activeSelest}</p>
            <span className={style.arrow}>▼</span>
          </div>
          {show && <ul className={style.optionList}>{options}</ul>}
        </div>
      </div>
      <div className="amount">
        <div>AMOUNT</div>
        <input type="number" ref={newAmount} placeholder="0" min="0" required />
      </div>
      <div className="email">
        <div>EMAIL</div>
        <input type="email" ref={newEmail} placeholder="Your email" required />
      </div>
      <div className="">
        <div>ROUTING NUMBER</div>
        <input
          type="NUMBER"
          ref={newRoutingNumber}
          placeholder="123124123"
          required
        />
      </div>
      <input type="checkbox" className={style.checkB} name="checkB" />
      <label for="checkB" className={style.label}>
        I accept the Mterms and conditions, terms of business and privacy policy
      </label>
      <button type="submit" className={style.buttonW} onClick={active}>
        WITHDRAW
      </button>
    </form>
  )
}

export default PaymentTwo
