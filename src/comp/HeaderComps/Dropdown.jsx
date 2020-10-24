import React, { useState, useEffect, useRef } from 'react';
import DropdownItem from './DropdownItem'
import { CSSTransition } from 'react-transition-group';
import { useStateValue } from '../../StateProvider'
import '../../ess/css/nav.css';
import { ReactComponent as ArrowIcon } from '../../ess/icons/arrow.svg';
import { ReactComponent as CogIcon } from '../../ess/icons/cog.svg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import HelpIcon from '@material-ui/icons/Help';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import MoveToInboxRoundedIcon from '@material-ui/icons/MoveToInboxRounded';
import ReportRoundedIcon from '@material-ui/icons/ReportRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import HttpsTwoToneIcon from '@material-ui/icons/HttpsTwoTone';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LanguageIcon from '@material-ui/icons/Language';

function Dropdown() {
  const [{user}, dispatch] = useStateValue()
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem setActiveMenu={setActiveMenu} avatar={user.photoURL} >
            <div>
              <h3>{user.displayName}</h3>
              <small>See your profile</small>
            </div>
          </DropdownItem>

          <DropdownItem setActiveMenu={setActiveMenu}
            leftIcon={<CogIcon />}
            rightIcon={<ArrowForwardIosIcon />}
            goToMenu="settings">
            Settings & Privacy 
          </DropdownItem>

          <DropdownItem setActiveMenu={setActiveMenu}
            leftIcon={<HelpIcon />}
            rightIcon={<ArrowForwardIosIcon />}
            goToMenu="animals">
            Help & Support
          </DropdownItem>

          <DropdownItem
            setActiveMenu={setActiveMenu}
            leftIcon={<Brightness4Icon />}
            rightIcon={<ArrowForwardIosIcon />} 
            goToMenu="preferences">
              Display Preferences
          </DropdownItem>

          <DropdownItem setActiveMenu={setActiveMenu} leftIcon={<ExitToAppIcon />}>Log Out</DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem setActiveMenu={setActiveMenu} goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Settings & Privacy</h2>
          </DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon={<SettingsRoundedIcon />}>Settings</DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon={<LockRoundedIcon />}>Privacy Checkup</DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon={<HttpsTwoToneIcon />}>Privacy Shortcuts</DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon={<FormatListBulletedIcon />}>Activity Log</DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon='📰'>News Feed Preferences</DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon={<LanguageIcon />}>Language</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem setActiveMenu={setActiveMenu} goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Help & Support</h2>
          </DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon={<HelpIcon />}>Help Center</DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon={<LiveHelpIcon />}>Help Community</DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon={<MoveToInboxRoundedIcon />}>Support Inbox</DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon={<ReportRoundedIcon />}>Report a problem</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'preferences'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem setActiveMenu={setActiveMenu} goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Display Preferences</h2>
          </DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon={<Brightness4Icon />}>Dark Mode</DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon="✔️">Compact Mode</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Dropdown