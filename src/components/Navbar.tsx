import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Button from './Button';
import SearchIcon01 from '../assets/icons/search-icon-01.svg';
import './c_styles/navbar.component.css';

const Navbar = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <nav className='top-navbar'>
      <div className='top-navbar__content'>
        <h1>WeatherDART</h1>

        <div className='top-navbar__searchbar'>
          <input className='top-navbar__searchbar__input' placeholder='33062' />
          <img
            className='top-navbar__searchbar__icon'
            src={SearchIcon01}
            alt='search icon'
          />
        </div>

        <span id='spacer' />

        <ul className='top-navbar__items'>
          <li className='top-navbar__items__item'>
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
