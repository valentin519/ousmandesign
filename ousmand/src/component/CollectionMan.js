import React from 'react';
import Navbar from './Navbar';

const CollectionMan = () => (
    <div>
        <Navbar/>
        <div className='collecHomme'>
            <a href="#homme1">
                    <img src="/homme1.jpg" alt="Vignette" className='picCollectionMen'/>
                </a>
                <a href="#_" class="overlay" id="homme1">
                    <img src="/homme1.jpg" alt="Plein écran"/>
            </a>

            <a href="#homme2">
                    <img src="/homme2.jpg" alt="Vignette" className='picCollectionMen'/>
                </a>
                <a href="#_" class="overlay" id="homme2">
                    <img src="/homme2.jpg" alt="Plein écran"/>
            </a>

            <a href="#homme3">
                    <img src="/homme3.jpg" alt="Vignette" className='picCollectionMen'/>
                </a>
                <a href="#_" class="overlay" id="homme3">
                    <img src="/homme3.jpg" alt="Plein écran"/>
            </a>
            <a href="#homme4">
                    <img src="/homme4.jpg" alt="Vignette" className='picCollectionMen'/>
                </a>
                <a href="#_" class="overlay" id="homme4">
                    <img src="/homme4.jpg" alt="Plein écran"/>
            </a>
            <a href="#homme5">
                    <img src="/homme3.jpg" alt="Vignette" className='picCollectionMen'/>
                </a>
                <a href="#_" class="overlay" id="homme5">
                    <img src="/homme5.jpg" alt="Plein écran"/>
            </a>
            <a href="#homme6">
                    <img src="/homme6.jpg" alt="Vignette" className='picCollectionMen'/>
                </a>
                <a href="#_" class="overlay" id="homme6">
                    <img src="/homme6.jpg" alt="Plein écran"/>
            </a>
            <a href="#homme7">
                    <img src="/homme7.jpg" alt="Vignette" className='picCollectionMen'/>
                </a>
                <a href="#_" class="overlay" id="homme7">
                    <img src="/homme7.jpg" alt="Plein écran"/>
            </a>
        </div>
    </div>
)

export default CollectionMan;