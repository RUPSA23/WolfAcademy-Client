import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import app from '../../firebase.init';
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigate('/');
}
    return (
        <div className="navbar bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-white rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/allCourses">All Courses</Link></li>
              <li><Link to="/aboutUs">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">Faq</Link></li>
              <li>{user ? <button onClick={logout}>Sign Out</button> : <Link to="/login">Login</Link>}
              </li>
            {/* <li><Link to="/register">Register</Link></li> */}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-white">Wolf Academy</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/allCourses">All Courses</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">Faq</Link></li>
          </ul>
        </div>
        <div className="navbar-end text-white ">
        <ul className='menu menu-horizontal px-0 invisible lg:visible md:visible'>
        <li>{user ? <button onClick={logout}>Sign Out</button> : <Link to="/login">Login</Link>}
              </li>
            {/* <li><Link to="/register">Register</Link></li> */}
        </ul>
        </div>
      </div>
    );
};

export default Navbar;