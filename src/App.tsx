import { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';

import { PUBLIC_ROUTES } from './config/routes';

import { Provider } from './Provider';
import { Home } from './pages/home';
import { NotFoundPage } from './pages/404';
import { Token } from './pages/token';

import { Team } from './pages/team';
import { Layout } from 'src/layouts/layout';

import './config/i18n';
function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Router>
        <Provider>
          <Layout>
            <Routes>
              <Route path={PUBLIC_ROUTES.default} element={<Home />} />
              <Route path={PUBLIC_ROUTES.home} element={<Home />} />
              <Route path={PUBLIC_ROUTES.token} element={<Token />} />
              <Route path={PUBLIC_ROUTES.team} element={<Team />} />
              <Route path={PUBLIC_ROUTES.error404} element={<NotFoundPage />} />
              <Route path="*" element={<Navigate to={PUBLIC_ROUTES.error404} replace />} />
            </Routes>
          </Layout>
        </Provider>
      </Router>
    </Suspense>
  );
}

export default App;
