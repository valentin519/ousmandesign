import React from 'react';
import Navbar from './Navbar';
import './collection.css'

const CollectionWomen = () => (
    <div>
        <Navbar/>
        <div>
            <a href="#femme1">
            <img src="/femme1.jpg" alt="Vignette" className='picCollectionWomen1'/>
            </a>
            <a href="#_" class="overlay" id="femme1">
                <img src="/femme1.jpg" alt="Plein écran"/>
            </a>

            <a href="#femme2">
                 <img src="/femme2.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="femme2">
                <img src="/femme2.jpg" alt="Plein écran"/>
            </a>

            <a href="#femme3">
                 <img src="/femme3.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="femme3">
                <img src="/femme3.jpg" alt="Plein écran"/>
            </a>

            <a href="#femme4">
                 <img src="/femme4.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="femme4">
                <img src="/femme4.jpg" alt="Plein écran"/>
                <img src='/femme4-2.jpg' alt="Plein écran"/>
            </a>

            <a href="#femme5">
                 <img src="/femme5.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="femme5">
                <img src="/femme5.jpg" alt="Plein écran"/>
            </a>

            <a href="#femme6">
                 <img src="/mariam1.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="femme6">
                <img src="/mariam1.jpg" alt="Plein écran"/>
                <img src="/mariam2.jpg" alt="Plein écran"/>
                <img src="/mariam3.jpg" alt="Plein écran"/>
            </a>
            
        </div>
    </div>
)

export default CollectionWomen;