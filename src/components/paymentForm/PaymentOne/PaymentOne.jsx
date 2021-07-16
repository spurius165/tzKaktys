import style from './PaymentOne.module.scss'
import React, { useState } from 'react'

const PaymentOne = (props) => {
  let newAmount = React.createRef()
  let newIban = React.createRef()
  let newBankName = React.createRef()
  let newBankAddress = React.createRef()
  let newBenCode = React.createRef()
  let newF = React.createRef()
  let [activeSelest, setActiveSelect] = useState('Выберите валюту')
  let [show, setShow] = useState(false)
  let active = () => {
    let flag = true
    let amount = newAmount.current.value
    let iban = newIban.current.value
    let bankName = newBankName.current.value
    let bankAddress = newBankAddress.current.value
    let benCode = newBenCode.current.value
    flag =
      newBenCode.current.checkValidity() &&
      newAmount.current.checkValidity() &&
      newBankAddress.current.checkValidity() &&
      newBankAddress.current.checkValidity() &&
      newIban.current.checkValidity() + newBankName.current.checkValidity()
    let sumObject = {
      id: '1',
      wallet: activeSelest,
      amount: amount,
      iban: iban,
      bankName: bankName,
      bankAddress: bankAddress,
      benCode: benCode,
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
      <div className="iban">
        <div>IBAN/BANC ACCOUNT</div>
        <input
          type="text"
          ref={newIban}
          placeholder="Your banc IBAN"
          required
        />
      </div>
      <div className="bankName">
        <div>BANK NAME</div>
        <input
          type="text"
          ref={newBankName}
          placeholder="Full bank name"
          required
        />
      </div>
      <div className="bankAdres">
        <div>BANK ADDRESS</div>
        <input
          type="text"
          ref={newBankAddress}
          placeholder="City, street"
          required
        />
      </div>
      <div className="benCode">
        <div>BENEFICIARY'S BANC SWIFT CODE</div>
        <input type="text" ref={newBenCode} placeholder="SABRUMMAC1" required />
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

export default PaymentOne
