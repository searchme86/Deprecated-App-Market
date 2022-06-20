import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageContainer } from '../Assets/Styles/Layout.style';
import Header from '../Components/Header';
import { ToastContainer } from 'react-toastify';
// import Navbar from '../Components/Header/Nav/Navbar';
// import SearchBox from '../Components/SeachBar/SearchBox';
// import Slider from '../Components/Slider/Slider';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
  return (
    // <div className="App">
    //   {/* <SearchBox />
    //   <Navbar />
    //   <Slider autoPlay={2} /> */}
    //   <main>
    //     <Outlet />
    //   </main>
    // </div>
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <footer>여기푸터</footer>
      <ToastContainer />
    </>
  );
}

export default Layout;
