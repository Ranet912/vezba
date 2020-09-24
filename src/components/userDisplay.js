import React from 'react'
import '../styles/components/userDisplay.css'

const UserData = (props) => {
  return(
    <div className="userDisplay">

      <div className="userInfo">
        {props.name}
      </div>

      <div>
        {props.age}
      </div>

      <div>
        {props.gender}
      </div>

      <div>
        @{props.twitterUsername}
      </div>

    </div>
  )
}

export default UserData
