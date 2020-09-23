import React from 'react'

const UserData = (props) => {
  return(
    <div>

      <div>
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
