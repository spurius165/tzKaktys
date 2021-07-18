import style from './PaymentPlate.module.scss'

const PaymentPlate = (props) => {
  let active = () => {
    props.upDate(props.id)
  }
  console.log(props.active)
  return (
    <div className={style.item}>
      <button
        onClick={active}
        className={props.active == props.id ? style.on : style.off}
      >
        <img src={props.url} alt={props.name} />
      </button>
    </div>
  )
  // {props.img.paymentList[1].url}
}

export default PaymentPlate
