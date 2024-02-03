import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import Loader from './Loader/Loader';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Cars = lazy(() => import('../pages/Cars/Cars'));
const Favorite = lazy(() => import('../pages/Favorites/Favorites'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Cars />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
