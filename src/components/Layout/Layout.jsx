import React, { Suspense } from 'react';
import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </Container>
  );
};

export default Layout;
