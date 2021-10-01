import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context';
import Button from './Buttons';

const Navbar = () => {
  const {setIsAuth} = React.useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div>
      <div>
          <Button onClick={logout} >Logout</Button>
        
        <Link to="/about">
          <Button>ABOUT</Button>
        </Link>
        <Link to="/tasks">
          <Button>TASKS</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
