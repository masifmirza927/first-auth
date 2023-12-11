import React, { useContext } from 'react'
import { MyContext } from '../MyContext'


const Box = () => {
    const { isLogin, setIsLogin } = useContext(MyContext);

    

    return (
    <div>
        {
           (isLogin == true) ? "welcome back" : "not logged in"
        }

{
    (isLogin == true) ? <button onClick={ () => alert('delete')}>Delete</button> : null
}
        
    
    </div>
  )
}

export default Box