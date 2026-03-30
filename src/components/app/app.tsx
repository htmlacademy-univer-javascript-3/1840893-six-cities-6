import MainPage from '../../pages/main-page/main-page';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes, Authorization } from '../../constants/constants';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import OfferPage from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function App() {
  const allOffers = useSelector((state: RootState) => state.app.offers);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Root} element={<MainPage />} />

          <Route
            path={AppRoutes.Favorites}
            element={
              <PrivateRoute
                restrictedFor={Authorization.NoAuth}
                redirectedTo={AppRoutes.Login}
              >
                <Favorites offers={allOffers.filter((offer) => offer.isFavorite)} />
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

          <Route path={`${AppRoutes.Offer}/:offerId`} element={<OfferPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
