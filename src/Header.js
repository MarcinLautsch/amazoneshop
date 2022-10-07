import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShopingBasketIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="na_glowna_strona_przenosi">
        <img
          alt="logo"
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOn">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOn">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOn">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShopingBasketIcon />
            <span className="header__optionLineTwo header_basketCount">{basket?.length}</span>
            {/* pokazuje zawrotsc koszyka */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
