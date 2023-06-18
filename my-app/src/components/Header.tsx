import React from "react";
import "./Header.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header=()=>{
  return (
    <div className="Header">
        <div className="Left_Side">
        <ArrowBackIcon id="back arrow" />
        <AccountCircleIcon id="Avatar"/>
        <h2>Gary</h2>        
        </div>
    </div>
  )
}
export default Header