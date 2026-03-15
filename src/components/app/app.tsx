import MainPage from '../../pages/main-page/main-page';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes, Authorization } from '../../constants/constants';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';
import { mockOffers } from '../../mocks/offers';

type AppProps = {
  count: number;
};

export default function App({ count }: AppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoutes.Root}
            element={<MainPage count={count} offers={mockOffers} />}
          />

          <Route
            path={AppRoutes.Favorites}
            element={
              <PrivateRoute
                restrictedFor={Authorization.NoAuth}
                redirectedTo={AppRoutes.Login}
              >
                <Favorites />
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoutes.Login}
            element={
              <PrivateRoute
                restrictedFor={Authorization.Auth}
                redirectedTo={AppRoutes.Root}
              >
                <Login />
              </PrivateRoute>
            }
          />

          <Route path={`${AppRoutes.Offer}/:offerId`} element={<Offer />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
