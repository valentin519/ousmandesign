import React from 'react';
import Navbar from './Navbar';
import './collection.css';

const CollectionMasque = () => (
    <div>
        <Navbar/>
        <div>
        <a href="#sac21">
                 <img src="/sac21.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac21">
                <img src="/sac21.jpg" alt="Plein écran"/>
                <img src="/sac21-2.jpg" alt="Plein écran"/>
            </a>
        <a href="#sac1">
                 <img src="/sac1.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac1">
                <img src="/sac1.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac2">
                 <img src="/sac2.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac2">
                <img src="/sac2.jpg" alt="Plein écran"/>
            </a>
            
           
        </div>
    </div>
)

export default CollectionMasque;