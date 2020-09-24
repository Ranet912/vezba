import React, { useState } from 'react'
import './MoveTheBox.css'
import NavigationBar from '../../components/NavigationBar'

const MoveTheBox = () => {

  const [offSetTop, setOffSetTop] = useState(350)

  function moveBoxUp() {
    setOffSetTop(offSetTop - 50)
  }

  function moveBoxDown() {
    setOffSetTop(offSetTop + 50)
  }

  const boxStyles = {
      transform:`translateY(${offSetTop}px)`
  }

  return(
    <div>
      <NavigationBar />

      <div className="boxHeader">
        <h1>Move the box!</h1>
      </div>

      <div className="boxDiv">
        <div className="box" style={boxStyles} />
      </div>

      <div className="boxButton">
        <button onClick={moveBoxUp}>Move the box up</button>
      </div>

      <div className="boxButton">
        <button onClick={moveBoxDown}>Move the box down</button>
      </div>

    </div>
  )
}

export default MoveTheBox
