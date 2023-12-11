import React, { useEffect, useState } from 'react'
import { checkLogin } from '../helpers'
import { Outlet, useNavigate } from 'react-router-dom';
import MyModal from '../components/MyModal';
import Login from './Login';
import Signup from './Signup';
import Box from '../components/Box';

const Dashboard = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(null);



  // useEffect(() => {
  //   if (checkLogin() === false) {
  //     navigator("/login")
  //   }
  // }, []);


  // if (checkLogin() === true) {
    return (
      <div>
        <Box />
        <Outlet />
        <button onClick={ () => {
            setIsOpen(true);
            setIsOpenForm("login");
        } }>Login</button>

        <button onClick={ () => {
            setIsOpen(true);
            setIsOpenForm("signup");
        } }>Signup</button>

        {
          (isOpenForm == "login") ? <MyModal isOpen={isOpen} setIsOpen={setIsOpen}>Login</MyModal> : <MyModal isOpen={isOpen} setIsOpen={setIsOpen}>Signup</MyModal>
        }
        
        
     
      </div>
    )
  // }

}

export default Dashboard