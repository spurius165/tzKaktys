import './App.scss'
import Deposit from './components/deposit/Deposit'

const App = (props) => {
  return (
    <div>
      <Deposit listContent={props.state} />
    </div>
  )
}

export default App
