import '../../ess/css/nav.css';
import React from 'react';
import NavItem from './NavItem'
import Dropdown from './Dropdown'
import { ReactComponent as BellIcon } from '../../ess/icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../ess/icons/messenger.svg';
import AddIcon from '@material-ui/icons/Add'
import { ReactComponent as CaretIcon } from '../../ess/icons/caret.svg';

function HeaderRightItem() {
  return (
    <>
      <NavItem icon={<AddIcon />} />
      <NavItem icon={<MessengerIcon />} >
        <Dropdown item='message' />
      </NavItem>
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<CaretIcon />} >
        <Dropdown item='cork' />
      </NavItem>
    </>
  );
}

// function Navbar(props) {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-nav">{props.children}</ul>
//     </nav>
//   );
// }





export default HeaderRightItem;