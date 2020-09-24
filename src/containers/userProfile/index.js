import React from 'react'
import UserData from '../../components/userDisplay.js'
import NavigationBar from '../../components/NavigationBar'

const UserProfile = () => {
  return(
    <div>
      <NavigationBar />
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
