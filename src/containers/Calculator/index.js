import React, { useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import '../../styles/containers/Calculator/Calculator.css'

const Calculator = () => {

  const [number1, setNumber1] = useState(34)
  const [number2, setNumber2] = useState(0)
  const [total, setTotal] = useState(number1 + number2)

  function addThemTogether() {
    setTotal(number1 + number2)
  }

  return(
    <div>
    <NavigationBar />

    <div className="calculatorBox">

      <div className="number1">
        <input
          type="number"
          value={number1}
          onChange={event => setNumber1(+event.target.value)}
        />
      </div>

      <div className="number2">
        <input
          type="number"
          value={number2}
          onChange={event => setNumber2(+event.target.value)}
        />
      </div>

      <div className="numberButton">
        <button onClick={addThemTogether}> Add them! </button>
      </div>

      <div className="numberTotal">
        <h2>{total}</h2>
      </div>

    </div>

    </div>
  )
}

export default Calculator
