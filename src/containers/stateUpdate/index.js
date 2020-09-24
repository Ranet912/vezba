import React, { useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import '../../styles/containers/stateUpdate/stateUpdate.css'

const UpdateState = () => {

  const [name, setName] = useState('Dzoni')
  const [age, setAge] = useState(1)

  return(

    <div>
      <NavigationBar />

      <div className="inputBox">
        <div className="nameInput">
          <label> Name: {name} </label>
          <div>
            <input
              type="text"
              value={ name }
              onChange={event => setName(event.target.value)}
            />
          </div>
        </div>

        <div className="ageInput">
          <label> Age: {age}</label>
          <div>
            <input
              type="number"
              onChange={event => setAge(+event.target.value)}
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default UpdateState
