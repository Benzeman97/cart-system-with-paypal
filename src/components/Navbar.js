import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import shopping from '../shopping.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {ButtonContainer} from '../style-components/Button';
import styled from 'styled-components';

class Navbar extends Component {
    render() {
        return (
           <NavWarapper className="navbar navbar-expand-sm navber-dark px-sm-5">

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
           <ButtonContainer>
               <span className="mr-2">
           <FontAwesomeIcon icon={faCartPlus} />
             </span>
           my cart
           </ButtonContainer>
      
         </Link>
           </NavWarapper>
        );
    }
}

const NavWarapper = styled.nav`
   background:var(--mainBlue);
   .nav-link{
       color: var(--mainWhite);
       text-transform:capitalize;
       font-size:1.3rem;
   }
`;



export default Navbar;