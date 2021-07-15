import style from './PaymentPlate.module.scss'

const PaymentPlate = (props) => {
  let active = () => {
    props.upDate(props.id)
  }
  return (
    <div>
      <div className={style.item}>
        <button onClick={active}>
          <img src={props.url} alt={props.name} />
        </button>
      </div>
    </div>
  )
  // {props.img.paymentList[1].url}
}

export default PaymentPlate
