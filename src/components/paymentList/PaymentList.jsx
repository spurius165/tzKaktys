import PaymentPlate from '../paymentPlate/PaymentPlate'
import style from './PaymentList.module.scss'

const PaymentList = (props) => {
  let PaymentPlates = props.LilistContent.map((p) => (
    <PaymentPlate
      key={p.name}
      id={p.id}
      name={p.name}
      url={p.url}
      upDate={props.upDate}
    />
  ))
  return (
    <div className={style.list}>
      <div className={style.title}>PAYMENT METHOD</div>
      <div className={style.titleElements}>{PaymentPlates}</div>
      {/* {props.img.paymentList[1].url} */}
    </div>
  )
}

export default PaymentList
