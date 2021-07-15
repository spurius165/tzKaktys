import style from './PaymentForm.module.scss'
import PaymentOne from './PaymentOne/PaymentOne'
import PaymentTwo from './PaymentTwo/PaymentTwo'

const PaymentList = (props) => {
  if (props.ative == 1)
    return (
      <PaymentOne
        up={props.up}
        wallet={props.wallet}
        paymentId={props.active}
      />
    )
  else return <PaymentTwo up={props.up} wallet={props.wallet} />
}

export default PaymentList
