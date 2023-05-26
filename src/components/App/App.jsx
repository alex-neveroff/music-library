import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';

const Authorization = lazy(() => import('../../pages/Authorization'));
const ArtistDetails = lazy(() => import('../../pages/ArtistDetails'));
const Collection = lazy(() => import('../../pages/Collection'));
const Home = lazy(() => import('../../pages/Home'));
const Artists = lazy(() => import('../../pages/Artists'));
const NotFound = lazy(() => import('../../pages/NotFound'));
const Listened = lazy(() => import('../../pages/Listened'));
const Pending = lazy(() => import('../../pages/Pending'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:artistId" element={<ArtistDetails />}></Route>
        <Route path="/collection" element={<Collection />} />
        <Route path="/listened" element={<Listened />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default App;
