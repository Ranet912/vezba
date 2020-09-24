import React from 'react'
import '../../styles/containers/HomePage/HomePage.css'
import NavigationBar from '../../components/NavigationBar.js'

const HomePage = () => {
  return(
    <div>
      <NavigationBar />
      <div className="header">HOME PAGE</div>
      <div className="homeImage">
        <img src="https://i1.silvergames.com/j/b/trollface-quest.jpg"/>
      </div>
    </div>
  )
}

export default HomePage
