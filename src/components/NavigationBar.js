import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png'
import styled from 'styled-components';
import { ButtonContainer } from './Button';

class NavigationBar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <Link to='/~eyureva/hertz-uts/'>
                    <img src={logo} alt='store' className="navbar-brand" height="65"/>
                </Link>
                <ul className="navbar-nav allign-item-center">
                    <li className="nav-item ml-5">
                        <Link to='/~eyureva/hertz-uts/' className="nav-link">
                            UTS-Hertz
                        </Link>
                    </li>
                </ul>
                <Link to='/~eyureva/hertz-uts/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                        rented cars
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link: var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: capitalize;
    
`;


export default NavigationBar;