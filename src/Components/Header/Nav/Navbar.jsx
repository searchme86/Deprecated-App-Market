import React from 'react';
import { menuItems } from './MenuContents';
import NavList from './NavList';

function Navbar() {
  return (
    <nav>
      <ul className="Navlist">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <NavList key={index} ListItems={menu} depthLevel={depthLevel} />
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
