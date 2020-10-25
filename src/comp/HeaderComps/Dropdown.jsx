import React, { useState, useEffect, useRef } from 'react';
import Message from './Message'
import Cork from './Cork'
import '../../ess/css/nav.css';

function Dropdown({item}) {
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  if(item === 'message') {
    return(
      <div className="dropdown chatMessage__dropdown" >
        <Message />
      </div>)
  }

  else if(item === 'cork'){
    return(
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
        <Cork dropdownRef={dropdownRef} calcHeight={calcHeight} setMenuHeight={setMenuHeight} />
      </div>
    )
  }

}

export default Dropdown