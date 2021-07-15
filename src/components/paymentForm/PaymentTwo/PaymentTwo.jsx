import style from './PaymentTwo.module.scss'

const PaymentTwo = (props) => {
  let active = () => {
    props.up(true)
  }
  return (
    <div>
      <div className="wallet">
        WALLET
        <input type="text" />
      </div>
      <div className="amount">
        AMOUNT
        <input type="text" />
      </div>
      <div className="email">
        EMAIL
        <input type="text" />
      </div>
      <div className="ruotName">
        ROUTING NUMBER
        <input type="text" />
      </div>
      <button className={style.buttonW} onClick={active}>
        WITHDRAW
      </button>
    </div>
  )
  // { walet: '' }, { amount: '' }, { email: '' }, { routNum: '' }
}

export default PaymentTwo
