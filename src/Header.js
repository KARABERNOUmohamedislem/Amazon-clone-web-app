import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcom from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider"
import { auth } from './Firebase';

function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () =>{
      if(user){
        auth.signOut();
      }
    }

    return (
      <nav className="header">
        <Link to="/">
          <img
            className="header_logo"
            src="https://www.festivalclaca.cat/pics/b/17/174571_amazon-logo-png-transparent-background.png"
          ></img>
        </Link>
        <div className="header_search">
          <input type="text" className="header_searchInput"></input>
          <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
          <Link to={!user && "/login"} className="header_link">
            <div onClick={login} className="header_options">
              <span className="header_optionslineone">Hello {user && user.email}</span>
            <span className="header_optionslinetwo">{!user ? 'Sign In' : 'Sign Out'}</span>
            </div>
          </Link>
          <Link to="/" className="header_link">
            <div className="header_options">
              <span className="header_optionslineone">returns</span>
              <span className="header_optionslinetwo">orders</span>
            </div>
          </Link>
          <Link to="/" className="header_link">
            <div className="header_options">
              <span className="header_optionslineone">Your</span>
              <span className="header_optionslinetwo">Prime </span>
            </div>
          </Link>
          <Link to="/checkout" className="header_link">
            <div className="header_optionbasket">
              <ShoppingBasketIcom />
              <span className="header_optionslinetwo header_basketcount">{basket?.length}</span>
            </div>
          </Link>
        </div>
      </nav>
    );
}

export default Header
