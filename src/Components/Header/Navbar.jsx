import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Photo/Loest logo.png';
import useAuth from '../../Provider/useAuth';

const Navbar = () => {
  const { User, LogOutUser } = useAuth();

  const links = (
    <div className="md:flex gap-7 font-bold">
      <NavLink>Home</NavLink>
      <NavLink>Find a Job</NavLink>
      <NavLink to="/addNewJob">Add Job</NavLink>
      <NavLink to="/myApplyJobs">My Apply Jobs</NavLink>
      <NavLink>Contact</NavLink>
    </div>
  );

  const handleLogOut = () => {
    LogOutUser()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="navbar bg-gradient-to-b from-[#A2C4C9] border to-[#ecf3f4] py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 flex flex-col gap-3 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <button className="btn btn-ghost text-xl">
            <img className="w-10" src={logo} alt="Logo" />
            <a className=" text-xl font-bold">Job Portal</a>
          </button>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {User ? (
          <button onClick={handleLogOut} className="btn">
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
