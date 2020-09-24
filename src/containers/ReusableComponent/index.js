import React from 'react'
import ReusableComponent from '../../components/ReusableComponent.js'
import NavigationBar from '../../components/NavigationBar'

const DisplayReusableComponent = (props) => {
  return(
    <div>
      <NavigationBar />
      <ReusableComponent
        label="Kokoske"
        icon="kuku"
        number="55"
      />
      <ReusableComponent
        label="Krave"
        icon="muuu"
        number="33"
      />
      <ReusableComponent
        label="Foke"
        icon="????"
        number="111"
      />
    </div>
  )
}

export default DisplayReusableComponent
