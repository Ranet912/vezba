import React from 'react'
import UserData from '../../components/userDisplay.js'

const UserProfile = () => {
  return(
    <div>
      <UserData
        name="Saban"
        age="99"
        gender="Smrda"
        twitterUsername="smrda_smrdic"
      />
    </div>
  )
}

export default UserProfile
