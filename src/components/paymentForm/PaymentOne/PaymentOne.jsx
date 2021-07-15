import style from './PaymentOne.module.scss'
import React, { useState } from 'react'

const PaymentOne = (props) => {
  let newAmount = React.createRef()
  let newIban = React.createRef()
  let newBankName = React.createRef()
  let newBankAdres = React.createRef()
  let newBenCode = React.createRef()
  let active = () => {
    let amount = newAmount.current.value
    let iban = newIban.current.value
    let bankName = newBankName.current.value
    let bankAdres = newBankAdres.current.value
    let benCode = newBenCode.current.value
    let sumObject = {
      id: '1',
      wallet: '',
      amount: amount,
      iban: iban,
      bankName: bankName,
      bankAdres: bankAdres,
      benCode: benCode,
    }
    console.log(sumObject)
    props.up(true)
  }
  let [activeSelest, setActiveSelect] = useState('Выберите валюту')
  let [show, setShow] = useState(false)
  let openSelect = () => {
    setShow(!show)
  }
  let options = props.wallet.map((p) => {
    return (
      <li key={p.name} onClick={() => setActiveSelect(p.cod + ' ' + p.value)}>
        <p>{p.cod}</p>
        <span>{p.value}</span>
      </li>
    )
  })
  return (
    <div>
      <div className="wallet">
        WALLET
        <div className={style.selectInput}>
          <div className={style.selectOptions} onClick={openSelect}>
            <p>{activeSelest}</p>
            <span className={style.arrow}>▼</span>
          </div>
          {show && <ul className={style.optionList}>{options}</ul>}
        </div>
      </div>
      <div className="amount">
        AMOUNT
        <input type="text" ref={newAmount} />
      </div>
      <div className="iban">
        IBAN/BANC ACCOUNT
        <input type="text" ref={newIban} />
      </div>
      <div className="bankName">
        BANK NAME
        <input type="text" ref={newBankName} />
      </div>
      <div className="bankAdres">
        BANK ADDRESS
        <input type="text" ref={newBankAdres} />
      </div>
      <div className="benCode">
        BENEFICIARY'S BANC SWIFT CODE
        <input type="text" ref={newBenCode} />
      </div>
      <button className={style.buttonW} onClick={active}>
        WITHDRAW
      </button>
    </div>
  )
}

export default PaymentOne
