import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CITIES } from '../../constants/cities';
import { changeCity } from '../../store/action';
import { City } from '../../types/city.type';

export default function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const city = useSelector((state: RootState) => state.app.city);
  const allOffers = useSelector((state: RootState) => state.app.offers);
  const offers = allOffers.filter((offer) => offer.city.name === city.name);

  const handleCityChange = (selectedCity: City) => {
    dispatch(changeCity(selectedCity));
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities - Main page</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              cities={CITIES}
              currentCity={city}
              onCityChange={handleCityChange}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in {city.name}
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <OffersList offers={offers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={city}
                  points={offers.map((offer) => offer.location)}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
