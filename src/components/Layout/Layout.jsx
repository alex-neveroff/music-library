import React, { Suspense } from 'react';
import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import NearestReleases from 'components/NearestReleases/NearestReleases';
import LastReleases from 'components/LastReleases/LastReleases';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <NearestReleases />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <LastReleases />
      </main>

      <Footer />
    </Container>
  );
};

export default Layout;
