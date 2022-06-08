import React from 'react';
import { Outlet } from 'react-router-dom';
// import Navbar from '../Components/Header/Nav/Navbar';
// import SearchBox from '../Components/SeachBar/SearchBox';
// import Slider from '../Components/Slider/Slider';

function Layout() {
  return (
    <div className="App">
      {/* <SearchBox />
      <Navbar />
      <Slider autoPlay={2} /> */}
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
