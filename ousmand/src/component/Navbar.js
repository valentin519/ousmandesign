import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => (
   
    <div className= 'navbar'>
        
        <Link className ='navbarSelection' to='/mainpage'>A propos de nous</Link>
        <Link className ='navbarSelection'to ='/collection'>Nos collections</Link>
        <img className='logoNavbar' src='https://zupimages.net/up/20/07/asgw.png' alt =''/>
        <p className ='navbarSelection'> Nous contacter</p>
        <Link className ='navbarSelection' to= '/media'>Ils parlent de nous</Link>
        </div>

)
export default Navbar