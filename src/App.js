import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserProfile from './containers/userProfile'
import UserData from './containers/usersLoop'
import UpdateState from './containers/stateUpdate'
import AlertOnInput from './containers/AlertOnInput'
import Calculator from './containers/Calculator'
import MoveTheBox from './containers/MoveTheBox'
import FetchApi from './containers/FetchApi'
import DisplayReusableComponent from './containers/ReusableComponent'
import HomePage from './containers/HomePage'

class App extends React.Component {
  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Users-data" component={UserData} />
          <Route path="/Update-state" component={UpdateState} />
          <Route path="/Alert-on-Input" component={AlertOnInput} />
          <Route path="/Calculator" component={Calculator} />
          <Route path="/MoveTheBox" component={MoveTheBox} />
          <Route path="/FetchApi" component={FetchApi} />
          <Route path="/ReusableComponent" component={DisplayReusableComponent} />
        </Switch>
      </div>
    )
  }
}
export default App;
