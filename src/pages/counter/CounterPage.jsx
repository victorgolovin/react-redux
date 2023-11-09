import { useDispatch, useSelector } from "react-redux"
import {
  increment,
  decrement
} from './actions'
import { getCounter } from "./selectors";
import { CounterWidget } from "../../components/CounterWidget/CounterWidget";


const CounterPage = () => { // умный компонент который все связывает
  const counter = useSelector(getCounter); // useSelector() позволяет нам получить информацию из store, но внутри него нам нужно передать функцию getCounterSelector
  const dispath = useDispatch(); // хук useDispatch() позволяет нам сгенерировать action

  const handleIncrementBtnClick = () => {
    dispath(increment());
  }

  const handleDecrementBtnClick = () => {
    dispath(decrement());
  }

  return (
    <div>
        <CounterWidget // глупый компонент, котопый умеет принимать в себя counter и обработчики событий
        counter={counter}
        onIncrementBtnClick={handleIncrementBtnClick}
        onDecrementBtnClick={handleDecrementBtnClick} />
    </div>
  )
  
}

export default CounterPage
