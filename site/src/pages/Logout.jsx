import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../MyContext';

const Logout = () => {
    const navigator = useNavigate();
    const {isLogin, setIsLogin} = useContext(MyContext);
   
    useEffect(() => {
        localStorage.removeItem("token");
        setIsLogin(false)
       navigator("/login")
      }, [])

}

export default Logout