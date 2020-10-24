import React,{useState} from 'react'
import '../../ess/css/nav.css';

function NavItem({icon, children}) {
  const [open, setOpen] = useState(false);
  const CLASSNAME = open ? 'activeDropdownItem' : ''
  return (
    <li className="nav-item">
      <span className={`icon-button ${CLASSNAME}`} onClick={() => setOpen(!open)}>
        {icon}
      </span>

      {open && children}
    </li>
  );
}

export default NavItem