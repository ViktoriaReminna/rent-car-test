import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Favorite = lazy(() => import('./pages/Favorite/Favorite'));
const Cars = lazy(() => import('./pages/Cars/Cars'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog/*" element={<Cars />} />
        <Route path="favorites/*" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
