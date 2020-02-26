import React, { Component } from 'react';
import Navbar from './Navbar';
import './collection.css';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

 



const Collection = () => (
    <div className='collectionPage'>
    <Navbar/>
    <div className='picCategory'>
        <div className='category'>
            <Link  to='/femme'><img src='/femme.jpg' alt =''/></Link>
            <p>Femmes</p>
        </div>
        <div className='category'>
          <Link to='/homme'>  <img src='/homme.jpg' alt='' /></Link>
            <p>Hommes</p>
        </div>
        <div className='category'>
            <Link to='/accessoire' ><img src='/sac.png' alt =''/></Link>
            <p>Accéssoires</p>
        </div>
        </div>
    </div>
)


export default Collection;