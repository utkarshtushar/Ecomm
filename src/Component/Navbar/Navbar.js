import React from "react";
import "./Navbar.scss";
import logo from "../../image/baby-logo.png";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {totalQuantities}= useSelector(state=> state.CartReducer)
  return (
    <div>
      <header className="lg:px-16 px-6 flex flex-wrap   bg-gray-300 bg-opacity-75 items-center lg:py-0 py-2 shadow-lg">
        <div className="flex-1  flex justify-between items-center">
            <Link to="/home">
              <img className="h-20 w-36" src={logo} alt="" />
            </Link>
        </div>

        <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
          <svg
            className="fill-current text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden lg:flex  lg:w-auto w-full" id="menu">
          <nav>
            <Link to="/cart">
              <ul className="flex">
                <BsFillBagFill className="text-2xl shopping-icon" />
                <span className="w-7 h-7 rounded-full bg-black text-white text-center -ml-2 -mt-2">
                  {totalQuantities}
                </span>
              </ul>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
