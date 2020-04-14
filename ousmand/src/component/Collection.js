import React from 'react';
import Navbar from './Navbar';
import './collection.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
 import Footer from './Footer';



const Collection = () => (
    <div className='collectionPage'>
        <Navbar/>
        <div className='picCategory'>
            <div className='hommeFemme'>
                <div className='category'>
                    <Fade left>
                        <Link  to='/femme'><img src='/femmecollec.jpg' alt=''/></Link>
                    </Fade>
                    <p>Femmes</p>
                </div>
                <div className='category'>
                    <Fade bottom>
                        <Link to='/homme'>  <img src='/hommecollec.jpg' alt='' /></Link>
                    </Fade>
                    <p>Hommes</p>
                </div>
            </div>
            <div className='accessoireTissu'>
                <div className='category'>
                    <Fade right>
                        <Link to='/accessoire' ><img src='/saccate.jpg' alt=''/></Link>
                    </Fade>
                    <p>Accéssoires</p>
                </div>
                <div className='category'>
                    <Fade right>
                        <Link to='/robe' ><img src='/categorieRobe.jpg' alt=''/></Link>
                    </Fade>
                    <p>Robe de mariée</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
)


export default Collection;