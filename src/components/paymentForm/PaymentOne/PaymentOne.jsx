import style from './PaymentOne.module.scss'
import React, { useState } from 'react'

const PaymentOne = (props) => {
  let newAmount = React.createRef()
  let newIban = React.createRef()
  let newBankName = React.createRef()
  let newBankAddress = React.createRef()
  let newBenCode = React.createRef()
  let newCheck = React.createRef()
  let newF = React.createRef()
  let [activeSelest, setActiveSelect] = useState({
    account: 'Account 3578',
    code: 'USD',
    value: '1000000',
  })
  let [show, setShow] = useState(false)
  let [amou, setAmou] = useState(true)
  let [ban, setBan] = useState(true)
  let [banName, setBanName] = useState(true)
  let [banAddress, setAddress] = useState(true)
  let [ben, setBen] = useState(true)
  let active = () => {
    let flag = true
    let amount = newAmount.current.value
    let iban = newIban.current.value
    let bankName = newBankName.current.value
    let bankAddress = newBankAddress.current.value
    let benCode = newBenCode.current.value
    newAmount.current.checkValidity() === false ? setAmou(false) : setAmou(true)
    newBenCode.current.checkValidity() === false ? setBen(false) : setBen(true)
    newBankAddress.current.checkValidity() === false
      ? setAddress(false)
      : setAddress(true)
    newIban.current.checkValidity() === false ? setBan(false) : setBan(true)
    newBankName.current.checkValidity() === false
      ? setBanName(false)
      : setBanName(true)
    flag =
      newCheck.current.checked && ban && banAddress && banName && ben && amou
    console.log(newCheck.current.checked)
    let sumObject = {
      id: '1',
      wallet: activeSelest.code,
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
      <div className="wallet">
        <div>WALLET</div>
        <div className={show ? style.selectInputActiv : style.selectInput}>
          <div className={style.selectOptions} onClick={openSelect}>
            <p>{activeSelest.account}</p>
            <span className={style.activeSelect}>
              {activeSelest.code + ' ' + activeSelest.value}
            </span>
            <span className={style.arrow}>▼</span>
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
      <div className="iban">
        <div>IBAN/BANC ACCOUNT</div>
        <input
          type="text"
          ref={newIban}
          placeholder="Your banc IBAN"
          required
          className={ban ? style.i : style.error}
        />
      </div>
      <div className="bankName">
        <div>BANK NAME</div>
        <input
          type="text"
          ref={newBankName}
          placeholder="Full bank name"
          required
          className={banName ? style.i : style.error}
        />
      </div>
      <div className="bankAdres">
        <div>BANK ADDRESS</div>
        <input
          type="text"
          ref={newBankAddress}
          placeholder="City, street"
          required
          className={banAddress ? style.i : style.error}
        />
      </div>
      <div className="benCode">
        <div>BENEFICIARY'S BANC SWIFT CODE</div>
        <input
          type="text"
          ref={newBenCode}
          placeholder="SABRUMMAC1"
          required
          className={ben ? style.i : style.error}
        />
      </div>
      <input
        type="checkbox"
        className={style.checkB}
        name="checkB"
        ref={newCheck}
        required
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

export default PaymentOne
