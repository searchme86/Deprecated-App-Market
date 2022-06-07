import React from 'react';
import NavList from './NavList';

function SubNav({ submenus, isDown, depthLevel }) {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';

  return (
    <ul className={`dropdown ${dropdownClass} ${isDown ? 'show' : ''}`}>
      {submenus.map((submenu, index) => (
        <NavList ListItems={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
}

export default SubNav;
