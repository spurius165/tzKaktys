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
        <div className={style.Heder}>Deposit</div>
        <div className={style.Main}>
          <PaymentList
            LilistContent={props.listContent.paymentList}
            upDate={setActiveForm}
          />
          <PaymentForm
            ative={activeForm}
            up={check}
            wallet={props.listContent.wallet}
          />
        </div>
      </div>
    )
  else return <div>Вы восхительны</div>
}

export default Deposit
