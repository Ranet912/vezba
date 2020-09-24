import React from 'react'
import '../styles/components/userDisplay.css'


const User = (props) => {
        return (
            <div className="userDisplay">
                <p>Age: {props.age}</p>
                <p>Name: {props.name}</p>
                <p>Car: {props.car}</p>
            </div>
        )
    }


export default User;
