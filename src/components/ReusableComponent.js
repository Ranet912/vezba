import React from 'react'
import '../styles/components/ReusableComponent.css'

const ReusableComponent = (props) => {
  return(
    <div className="item">
      <div className="itemLabel">
        {props.label}
      </div>
      <div className="itemIcon">
        kaze: {props.icon}
      </div>
      <div className="itemNumber">
        stanje: {props.number}
      </div>
    </div>
  )
}

export default ReusableComponent
