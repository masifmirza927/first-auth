import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const CheckAuth = (props) => {
    const navigator = useNavigate();
    
    useEffect(() => {
        if (props.isLogin === false) {
            navigator("/login")
        }
    }, []);

    if (props.isLogin === true) {
        return (
            <>{props.children}</>
        )
    }

}

export default CheckAuth