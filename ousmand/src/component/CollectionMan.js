import React from 'react';
import Navbar from './Navbar';

const CollectionMan = () => (
    <div>
        <Navbar/>
        <div>
            <a href="#homme1">
                    <img src="/homme1.jpg" alt="Vignette" className='picCollectionMen'/>
                </a>
                <a href="#_" class="overlay" id="homme1">
                    <img src="/homme1.jpg" alt="Plein écran"/>
            </a>

            <a href="#homme">
                    <img src="/homme.jpg" alt="Vignette" className='picCollectionMen'/>
                </a>
                <a href="#_" class="overlay" id="homme">
                    <img src="/homme.jpg" alt="Plein écran"/>
            </a>

            <a href="#homme2">
                    <img src="/homme2.jpg" alt="Vignette" className='picCollectionMen'/>
                </a>
                <a href="#_" class="overlay" id="homme2">
                    <img src="/homme2.jpg" alt="Plein écran"/>
            </a>
        </div>
    </div>
)

export default CollectionMan;