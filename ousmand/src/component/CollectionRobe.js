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
    </div>
</div>
)

export default CollectionRobe;