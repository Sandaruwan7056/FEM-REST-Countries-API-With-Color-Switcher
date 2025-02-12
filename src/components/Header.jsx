import React from "react";
import {FaMoon} from 'react-icons/fa'
import { Link } from "react-router";

const Header = ({setdarkMode,darkMode}) => {
const darkModeToggle=()=>{
  setdarkMode((prev)=>!prev)
}

  return (
    <header
      className=" bg-white dark:bg-dark-blue shadow-md "
      role="navigation"
      aria-label=" header"
    >
      <div className="flex justify-between items-center py-4 wrapper">
        <Link to="/" className="text-Homepage max-md:text-lg md:text-xl font-bold text-very-dark-blue-lm-text dark:text-white">
          Where in the world?
        </Link>
        <button className="text-Detailpage md:text-md font-semibold text-very-dark-blue-lm-text cursor-pointer transition-all delay-200 ease-in-out flex items-center gap-2 dark:text-white "
        onClick={darkModeToggle}>
         <FaMoon/> {darkMode ? "Light Mode" :" Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
