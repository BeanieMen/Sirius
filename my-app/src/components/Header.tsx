import React from "react";
import "./Header.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header=()=>{
  return (
    <div className="Header">
        <div className="Left_Side">
        <ArrowBackIcon/>
        <AccountCircleIcon className="Avatar"/>
        </div>
    </div>
  )
}
export default Header