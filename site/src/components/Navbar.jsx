import React, { useContext } from 'react'
import { MyContext } from '../MyContext'

const Navbar = () => {
    const {isLogin} = useContext(MyContext);
    return (
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                
            {
                (isLogin == true) ? <li><a href="/logout">Log Out</a></li> : ( <><li><a href="/login">Log In</a></li> <li><a href="/signup">Sign Up</a></li></>)
            }
                
                
                
                <li><a href="/dashboard">Dashboard</a></li>
            </ul>
        </div>
    )
}

export default Navbar