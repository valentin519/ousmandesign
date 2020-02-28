import React from 'react';
import Navbar from './Navbar';

const CollectionBag = () => (
    <div>
        <Navbar/>
        <div>
            <a href="#acces1">
                 <img src="/echarpe1.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="acces1">
                <img src="/echarpe1.jpg" alt="Plein écran"/>
            </a>

            <a href="#acces2">
                 <img src="/echarpe2.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="acces2">
                <img src="/echarpe2.jpg" alt="Plein écran"/>
                <img src="/echarpe2-3.jpg" alt="Plein écran"/>
            </a>
        </div>
    </div>
)

export default CollectionBag;