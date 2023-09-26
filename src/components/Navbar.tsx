import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { WeatherDataContext } from '../context/WeatherDataContext';
import Button from './Button';
import './c_styles/navbar.component.css';

const Navbar = () => {
  const { signOut } = useContext(AuthContext);
  const [inputText, setInputText] = useState('');
  const search_input_has_text = inputText.length > 0 ? true : false;

  const { fetchWeatherObervationsData } = useContext(WeatherDataContext);

  const handleOnSubmit = async () => {
    await fetchWeatherObervationsData(inputText);
  };

  return (
    <nav className='top-navbar'>
      <div className='top-navbar__content'>
        <h1>WeatherDART</h1>

        <div className='top-navbar__content__searchbar'>
          <input
            className='top-navbar__content__searchbar__input'
            onChange={(e) => setInputText(e.target.value)}
            placeholder='Zip Code or City'
            value={inputText}
          />
          <button
            disabled={!search_input_has_text}
            className={`top-navbar__content__searchbar__button ${
              search_input_has_text &&
              'top-navbar__content__searchbar__button--enabled'
            }`}
            onClick={handleOnSubmit}
          >
            Search
          </button>
        </div>

        <span id='spacer' />

        <ul className='top-navbar__content__items'>
          <li className='top-navbar__content__items__item'>
            <Button
              backgroundColor='transparent'
              type='button'
              size='block'
              onClick={signOut}
            >
              Log out
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
