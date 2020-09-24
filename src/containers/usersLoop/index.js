import React, { Component } from 'react'
import User from '../../components/users-array'
import NavigationBar from '../../components/NavigationBar'

class UserData extends Component {
  constructor(props){
    super(props);
    this.state = {
      usersArray: [
        {
          name: 'Sprda',
          age: '00',
          car: 'Buba',
          id: 1
        },
        {
          name: 'Krda',
          age: '0011',
          car: 'Fica',
          id: 2
        },
        {
          name: 'Stojko',
          age: '101',
          car: 'Stojadin',
          id: 3
        }
      ]
    }
  }
  render() {
    return(
      <div>
        <NavigationBar />
        {this.state.usersArray.map((item) =>
          <User
            name= {item.name}
            age= {item.age}
            car= {item.car}
          />
        )}
      </div>
    )
  }
}

export default UserData
