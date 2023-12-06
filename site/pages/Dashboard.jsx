import React, { useEffect } from 'react'
import { checkLogin } from '../helpers'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigator = useNavigate();


  useEffect(() => {
    if (checkLogin() === false) {
      navigator("/login")
    }
  }, [])

  if (checkLogin() === true) {
    return (
      <div>Dashboard</div>
    )
  }

}

export default Dashboard