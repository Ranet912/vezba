import React from 'react'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return(
    <div className="topnav">
      <Link to="/" > Home </Link>
      <Link to="/Users-data" > User Page </Link>
      <Link to="/Update-state"> State Update </Link>
      <Link to="/Alert-on-Input"> Alert on Input </Link>
      <Link to="/Calculator"> Calculator </Link>
      <Link to="/MoveTheBox"> Move div Up </Link>
      <Link to="/FetchApi"> Fetch GOT API </Link>
      <Link to="/ReusableComponent"> Reusable Component </Link>
    </div>
  )
}

export default NavigationBar
