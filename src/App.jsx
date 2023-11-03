import { useSelector } from "react-redux"

const getCounterSelector = state => state.value; // Selector нам нужен чтобы в себя принимать state и из этого state возвращать value (данные)



const App = () => {
  const counter = useSelector(getCounterSelector); // useSelector() позволяет нам получить информацию из store, но внутри него нам нужно передать функцию getCounterSelector


  return (
    <div>
      <p>
        {counter}
      </p>
      <div></div>
    </div>
  )
}

export default App
