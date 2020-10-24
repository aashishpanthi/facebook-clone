import React from 'react'
import { Avatar } from '@material-ui/core'
import '../../ess/css/nav.css';

function DropdownItem({setActiveMenu, children, rightIcon, leftIcon, goToMenu, avatar}) {
    return (
      <span className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
      	{avatar ? 
      		(<Avatar className='dropdown__avatar' src={avatar} />):
        	(<span className="icon-button">{leftIcon}</span>)}
        {children}
        <span className="icon-right">{rightIcon}</span>
      </span>
    );
 }

 export default DropdownItem