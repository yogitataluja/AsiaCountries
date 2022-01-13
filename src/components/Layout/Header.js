import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Header = () => {
    return (
        <header className="header">
        <div className="header_left">
        <h1 >
            Countries of Asia
            </h1>
        </div>
           <div className="header_right">
<DarkModeIcon fontSize="small" style={{marginRight:"5px"}} /> Dark Mode
           </div> 

        </header>
    )
}

export default Header
