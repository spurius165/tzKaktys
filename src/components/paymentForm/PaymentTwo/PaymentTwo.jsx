import style from './PaymentTwo.module.scss'
import React, { useEffect, useState } from 'react'

const PaymentTwo = (props) => {
  let newAmount = React.createRef()
  let newRoutingNumber = React.createRef()
  let newEmail = React.createRef()
  let newF = React.createRef()
  let newCheck = React.createRef()
  let [activeSelest, setActiveSelect] = useState({
    account: 'Account 3578',
    code: 'USD',
    value: '1000000',
  })
  let [show, setShow] = useState(false)
  let [amou, setAmou] = useState(true)
  let [mail, setMail] = useState(true)
  let [rout, setRout] = useState(true)
  let active = () => {
    let flag = true
    let amount = newAmount.current.value
    let email = newEmail.current.value
    let routingNumber = newRoutingNumber.current.value

    newAmount.current.checkValidity() === false ? setAmou(false) : setAmou(true)

    newRoutingNumber.current.checkValidity() === false
      ? setRout(false)
      : setRout(true)
    newEmail.current.checkValidity() === false ? setMail(false) : setMail(true)
    flag = amou && rout && mail && newCheck.current.checked
    let sumObject = {
      id: '2',
      wallet: activeSelest.code,
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
  let selectBlur = () => {
    setShow(false)
  }
  // useEffect(() => {
  //   console.log(show)
  // })
  let options = props.wallet.map((p) => {
    return (
      <li
        key={p.name}
        onClick={() => {
          setActiveSelect({
            account: 'Account 3578',
            code: p.code,
            value: p.value,
          })
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
      <div className="wallet" onMouseLeave={selectBlur}>
        <div>WALLET</div>
        <div className={show ? style.selectInputActiv : style.selectInput}>
          <div className={style.selectOptions} onClick={openSelect}>
            <p>{activeSelest.account}</p>
            <span className={style.activeSelect}>
              {activeSelest.code + ' ' + activeSelest.value}
            </span>
            <span className={style.arrow}>???</span>
          </div>
          {show && <ul className={style.optionList}>{options}</ul>}
        </div>
      </div>
      <div className="amount">
        <div>AMOUNT</div>
        <input
          type="number"
          ref={newAmount}
          placeholder="0"
          min="0"
          required
          className={amou ? style.i : style.error}
        />
      </div>
      <div className="email">
        <div>EMAIL</div>
        <input
          type="email"
          ref={newEmail}
          placeholder="Your email"
          required
          className={mail ? style.i : style.error}
        />
      </div>
      <div>
        <div>ROUTING NUMBER</div>
        <input
          type="NUMBER"
          ref={newRoutingNumber}
          placeholder="123124123"
          required
          className={rout ? style.i : style.error}
        />
      </div>
      <input
        type="checkbox"
        className={style.checkB}
        name="checkB"
        required
        ref={newCheck}
      />
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
