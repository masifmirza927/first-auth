import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = (props) => {
    const navigator = useNavigate();
   
    useEffect(() => {
        localStorage.removeItem("token");
        props.setIsLogin(false)
       navigator("/login")
      }, [])

}

export default Logout