import React from 'react';
import { Outlet } from 'react-router-dom';
import { Page, PageContainer } from '../Assets/Styles/Layout.style';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Pages/Footer';
import Hheader from '../Components/Hheader';

function Layout() {
  return (
    <Page>
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
