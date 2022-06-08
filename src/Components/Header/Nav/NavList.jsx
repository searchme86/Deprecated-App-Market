import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SubNavbar from './SubNavbar';

function NavList({ ListItems, depthLevel }) {
  const [isDown, setIsDown] = useState(false);
  let listItemRef = useRef(null);

  const { SubMenu, Title, path } = ListItems;

  console.log('path', path);
  useEffect(() => {
    const checkIsDropdown = (event) => {
      if (
        isDown &&
        listItemRef.current &&
        !listItemRef.current.contains(event.target)
      ) {
        setIsDown(false);
      }
    };
    document.addEventListener('mousedown', checkIsDropdown);
    document.addEventListener('mouseenter', checkIsDropdown);
    document.addEventListener('touchstart', checkIsDropdown);

    return () => {
      document.removeEventListener('mousedown', checkIsDropdown);
      document.addEventListener('mouseenter', checkIsDropdown);
      document.removeEventListener('touchstart', checkIsDropdown);
    };
  }, [isDown]);

  const handleList = () => setIsDown((prev) => !prev);

  return (
    <li className="menu-items" ref={listItemRef} onMouseLeave={handleList}>
      {SubMenu ? (
        <>
          <Link to={path}>
            <span
              className="list-title"
              aria-haspopup="menu"
              aria-expanded={isDown ? 'true' : 'false'}
              onClick={handleList}
              onMouseEnter={handleList}
            >
              {Title}{' '}
              {depthLevel > 0 ? (
                <span>&raquo;</span>
              ) : (
                <span className="arrow" />
              )}
            </span>
          </Link>

          <SubNavbar
            depthLevel={depthLevel}
            submenus={SubMenu}
            isDown={isDown}
          />
        </>
      ) : (
        <span>{Title}</span>
      )}
    </li>
  );
}

export default NavList;
