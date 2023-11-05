import { useDispatch, useSelector } from "react-redux"

const getCounterSelector = state => state.value; // Selector нам нужен чтобы в себя принимать state и из этого state возвращать value (данные)



const App = () => {
  const counter = useSelector(getCounterSelector); // useSelector() позволяет нам получить информацию из store, но внутри него нам нужно передать функцию getCounterSelector
  const dispath = useDispatch(); // хук useDispatch() позволяет нам сгенерировать action

  const handleIncrementBtnClick = () => {
    dispath({
      type: 'counter/increment' // Важно чтобы type совпадал с action.type в Reducer иначе нечего не получится
    });
  }

  const handleDecrementBtnClick = () => {
    dispath({
      type: 'counter/decrement'
    });
  }

  return (
    <div>
        <p>{counter}</p>
        <button onClick={handleIncrementBtnClick}>+1</button>
        <button onClick={handleDecrementBtnClick}>-1</button>
    </div>
  )
}

export default App
