import { City } from '../../types/city.type';

type CitiesListProps = {
  cities: City[];
  currentCity: City;
  onCityChange: (city: City) => void;
};

export default function CitiesList({
  cities,
  currentCity,
  onCityChange,
}: CitiesListProps): JSX.Element {
  const handleCityClick = (city: City) => {
    onCityChange(city);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.name}>
          <a
            className={`locations__item-link tabs__item ${
              currentCity.name === city.name ? 'tabs__item--active' : ''
            }`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleCityClick(city);
            }}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
