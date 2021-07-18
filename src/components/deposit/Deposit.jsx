import PaymentList from '../paymentList/PaymentList'
import PaymentForm from '../paymentForm/PaymentForm'
import style from './Deposit.module.scss'
import { useState } from 'react'

const Deposit = (props) => {
  let [activeForm, setActiveForm] = useState(1)
  let [success, check] = useState(false)
  if (success == false)
    return (
      <div>
        <div className={style.Deposit}>
          Deposit
          <div className={style.Main}>
            <PaymentList
              LilistContent={props.listContent.paymentList}
              upDate={setActiveForm}
              active={activeForm}
            />
            <PaymentForm
              ative={activeForm}
              up={check}
              wallet={props.listContent.wallet}
            />
          </div>
        </div>
      </div>
    )
  else
    return (
      <div className={style.form}>
        <div className={style.checkMark}>
          <span>✓</span>
        </div>
        <div className={style.lable}>Success</div>
        <button className={style.buttonOff}>LAUNCH WEBTRADER</button>
      </div>
    )
}

export default Deposit
