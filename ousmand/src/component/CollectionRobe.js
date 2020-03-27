import React from 'react';
import Navbar from './Navbar';


const CollectionRobe = () => (
    <div>
    <Navbar/>
    <div className='collecWomen'>
        <a href="#robe1">
                <img src="/robe1.jpg" alt="Vignette" className='picCollectionMen'/>
            </a>
            <a href="#_" class="overlay" id="robe1">
                <img src="/robe1.jpg" alt="Plein écran"/>
        </a>
        <a href="#robe2">
                <img src="/robe2.jpg" alt="Vignette" className='picCollectionMen'/>
            </a>
            <a href="#_" class="overlay" id="robe2">
                <img src="/robe2.jpg" alt="Plein écran"/>
        </a>
        <a href="#robe3">
                <img src="/robe3.jpg" alt="Vignette" className='picCollectionMen'/>
            </a>
            <a href="#_" class="overlay" id="robe3">
                <img src="/robe3.jpg" alt="Plein écran"/>
        </a>
        <a href="#robe4">
                <img src="/robe4.jpg" alt="Vignette" className='picCollectionMen'/>
            </a>
            <a href="#_" class="overlay" id="robe4">
                <img src="/robe4.jpg" alt="Plein écran"/>
        </a>
    </div>
</div>
)

export default CollectionRobe;