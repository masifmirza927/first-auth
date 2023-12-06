import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigator = useNavigate();
   
    useEffect(() => {
        localStorage.removeItem("token");
       navigator("/login")
      }, [])

}

export default Logout