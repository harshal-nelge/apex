import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (

    <div className='h-screen w-1/5 bg-gray-200 flex flex-col items-center justify-center space-y-3'>
     
      <NavLink
        to="/departmentDashBoard/addWork"
        className={( {isActive}) =>
        
        `block px-4 py-2 rounded-md text-gray-800 bg-gray-300 w-3/4 text-xl font-semibold text-center 
        ${isActive?"bg-gray-400":"bg-slate-200"}`}
      >
        Add Your Work
      </NavLink>
      <NavLink
        to="/departmentDashBoard"
        className={( {isActive}) =>
        
        `block px-4 py-2 rounded-md text-gray-800 bg-gray-300 w-3/4 text-xl font-semibold text-center 
        ${isActive?"bg-gray-400":"bg-gray-200"}`}
      >
        Pending Work
      </NavLink>
    </div>
  );
}

export default Sidebar;
