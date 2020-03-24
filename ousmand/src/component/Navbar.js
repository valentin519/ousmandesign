import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => (
   
    <div className='navbar'>
        <Link className='navbarSelection' to='/mainpage'>A propos de nous</Link>
        <Link className='navbarSelection' to='/collection'>Nos créations</Link>
        <Link className='navbarSelection' to='/contact'> Nous contacter</Link>
        <Link to='/' ><img className='logoNavbar' src='/ousmanlog.png' alt=''/></Link>
        <Link className='navbarSelection' to='/tissu'>Les tissus</Link>
        <Link className='navbarSelection' to='/atelier'> L'atelier</Link>
        <Link className='navbarSelection' to='/media'>Ils parlent de nous</Link>
    </div>

)
export default Navbar