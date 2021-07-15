import style from './PaymentTwo.module.scss'

const PaymentTwo = (props) => {
  let active = () => {
    props.up(true)
  }
  return (
    <div>
      <div className="wallet">wallet</div>
      <div className="amount"></div>
      <div className="email"></div>
      <div className="ruotName"></div>
      <button className={style.buttonW} onClick={active}>
        WITHDRAW
      </button>
    </div>
  )
  // { walet: '' }, { amount: '' }, { email: '' }, { routNum: '' }
}

export default PaymentTwo
