import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
const Menu = () => (
    <Bounce right>
    <div className='navbarBurger'>
            <Link className='navbarSelection' to='/mainpage'>A propos de nous</Link>
            <Link className='navbarSelection' to='/collection'>Nos créations</Link>
            <Link className='navbarSelection' to='/contact'> Nous contacter</Link>
            <Link className='navbarSelection' to='/media'>Ils parlent de nous</Link>
        </div>
    </Bounce>
)
export default Menu;