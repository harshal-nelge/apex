import store from '@/utlis/store';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Sidebar = () => {
  const user = useSelector(store => store.user)
  const userName = user.userName
  const department = user.department
 
  console.log(userName);
  return (

    <div className=' w-1/5 bg-gray-200 flex flex-col items-center space-y-3 '>
     <div className=' flex space-x-3  my-8'>
     <AccountCircleIcon color='primary' fontSize='large' />
    <div className=' flex flex-col '>
    <h1 className=' text-black text-xl font-bold'>{userName}</h1>
    <h4>{department}</h4>
    </div>

     </div>
      <div className=' space-y-6 mt-24 w-full flex flex-col items-center '><NavLink
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
      </NavLink></div>
    </div>
  );
}

export default Sidebar;
