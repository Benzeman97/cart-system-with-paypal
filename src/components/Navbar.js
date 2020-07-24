import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import shopping from '../shopping.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
    render() {
        return (
           <nav className="navbar navbar-expand-sm bg-primary navber-dark px-sm-5">

           <Link to="/">
           <img src={shopping} alt="shopping-logo" className="navbar-brand"/>

           </Link>
          <ul className="navbar-nav align-items-center">

              <li className="nav-item ml-5">
                  <Link to="/" className="nav-link">
                       products
                  </Link>
              </li>
          </ul>
          <ul className="navbar-nav align-items-center">

          <li className="nav-item ml-5">
         <Link to="/" className="nav-link">
                    us company
        </Link>
              </li>
          </ul>
         
         <Link to="/cart" className="ml-auto">
           <button>
           <FontAwesomeIcon icon={faCartPlus} />
           my cart
           </button>
      
         </Link>
        

           </nav>
        );
    }
}

export default Navbar;