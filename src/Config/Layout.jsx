import React from 'react';
import { Outlet } from 'react-router-dom';
import { Page, PageContainer } from '../Assets/Styles/Layout.style';
import Header from '../Components/Header';
import { ToastContainer } from 'react-toastify';
// import Navbar from '../Components/Header/Nav/Navbar';
// import SearchBox from '../Components/SeachBar/SearchBox';
// import Slider from '../Components/Slider/Slider';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Pages/Footer';
import Hheader from '../Components/Hheader';

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
    <Page>
      <Header />
      <Hheader />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
      <ToastContainer />
    </Page>
  );
}

export default Layout;
