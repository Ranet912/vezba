import React, { useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import '../../styles/containers/AlertOnInput/AlertOnInput.css'

const AlertOnInput = () => {

  const [lozinka, setLozinku] = useState('')

  if (lozinka === '123') {
    alert("Dobrodosli!")
  }

  return(
    <div>
      <NavigationBar />
      <div className ="alertBox">

        <div className="alertHeader">
          <h2>Koja je lozinka?</h2>
        </div>
        <div className="alertInput">
          <input
            type="text"
            placeholder="super tajna lozinka"
            value={lozinka}
            onChange={event => setLozinku(event.target.value)}
          />
        </div>
        <div className="alertHint">
          <p>mozda je '123'</p>
        </div>
      </div>
    </div>
  )
}

export default AlertOnInput
