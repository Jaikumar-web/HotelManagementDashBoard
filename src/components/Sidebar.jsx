import React from 'react';
import './Sidebar.css';
import HotelIcon from '../../src/imgs/HotelIcon.png';
import { SidebarData } from '../Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'


const Sidebar = () => {
    const [selected, setSelected] = useState(0);

  return (
    <div className='Sidebar'>
    {/* logo */}
    <div className='logo'>
    <img src={HotelIcon} alt='' />
    <span>
    Aas<span>hiy</span>ana
    </span>
    </div>
    <div className='menu'>
    {SidebarData.map((item,index) =>{
        return(
          <Link
          to={item.path} // Specify the target route using the 'to' prop
          key={index}
        >
            <div className={selected===index?'menuItem active':'menuItem'}
            key={index}
            onClick={() => {
              setSelected(index)
            } 
          }
            >
            <item.icon />
            <span>
            {item.heading}
            </span>
            </div>
            </Link>
        )
    })}
    <div className='menuItem'>
    <Button variant="contained" color='primary' endIcon={<UilSignOutAlt />}>
    LogOut
    </Button>
    </div>
    </div>
    </div>
  )
}

export default Sidebar
