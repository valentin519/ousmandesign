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

            <a href="#acces3">
                 <img src="/sac1.png" alt="Vignette" className='picCollectionSac'/>
            </a>
            <a href="#_" class="overlay" id="acces3">
                <img src="/sac1.png" alt="Plein écran"/>
            </a>

            <a href="#acces4">
                 <img src="/sac2.png" alt="Vignette" className='picCollectionSac'/>
            </a>
            <a href="#_" class="overlay" id="acces4">
                <img src="/sac2.png" alt="Plein écran"/>
            </a>

            <a href="#acces5">
                 <img src="/sac3.png" alt="Vignette" className='picCollectionSac'/>
            </a>
            <a href="#_" class="overlay" id="acces5">
                <img src="/sac3.png" alt="Plein écran"/>
            </a>
        </div>
    </div>
)

export default CollectionBag;