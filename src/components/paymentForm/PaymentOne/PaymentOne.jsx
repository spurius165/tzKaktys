import style from './PaymentOne.module.scss'

const PaymentOne = (props) => {
  let active = () => {
    props.up(true)
  }
  return (
    <div>
      <div className="wallet">wallet</div>
      <div className="amount"></div>
      <div className="iban"></div>
      <div className="bankName"></div>
      <div className="bankAdres"></div>
      <div className="benCode">benCode</div>
      <button className={style.buttonW} onClick={active}>
        WITHDRAW
      </button>
    </div>
  )
}

export default PaymentOne
