import React from "react";
import { useState } from "react";
import { FaAngleDown , FaAngleUp } from "react-icons/fa";

const FilterByRegion = ({setRegion }) => {
  const [Open, setOpen] = useState(false)
  const handleOnClick =(e)=>{
    setRegion(e.target.textContent)
    setOpen(false)
  }
  


  return (
    <div  >
      <button className="bg-white dark:bg-dark-blue dark:text-white px-4 py-3 shadow-md rounded-sm w-[200px] max-w-[200px] cursor-pointer text-left
      list-none flex items-center justify-between " 
      onClick={()=>setOpen(!Open)}>
        Filter by Region <span>{!Open ? < FaAngleDown/> : <FaAngleUp/>}</span>
      </button>
    {Open && 
      <ul className={`absolute my-2 bg-white dark:bg-dark-blue dark:text-white  shadow-md px-4 py-2 rounded-sm w-[200px] max-w-[200px] *:cursor-pointer *:py-1
      ${Open ? "opacity-100 max-h-full" :"opacity-0 max-h-0 "  } transition-opacity duration-200 ease-in-out`}>
      {["Africa", "America", "Asia", "Antarctic", "Europe", "Oceania"].map((region)=>(
        <li key={region} className="" onClick={handleOnClick}>{region}</li>
      ))}
      </ul>
    }
    </div>
  );
};

export default FilterByRegion;
