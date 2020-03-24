import React from 'react';
import Navbar from './Navbar'

class CollectionTissu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coton: false,
            voile: false,
            dentelle: false,
            soie: false,
        }

    }
    render(){
        return(
            <div>
                <Navbar/>
                <div>
                    <div className='tissuCategorie'>
                        <div className='cotonSelection'><p>Coton Bio</p></div>
                        <div className='dentelleSelection'><p>Dentelle de Calais</p></div>
                        <div className='voileSelection'><p>Voile Tatoué</p></div>
                        <div className='soieSelection'><p>Soie</p></div>
                    </div>
                    
                <a href="#tissu1">
                    <img src="/tissu1.jpg" alt="Vignette" className='picCollectionWomen1'/>
                    </a>
                    <a href="#_" class="overlay" id="tissu1">
                        <img src="/tissu1.jpg" alt="Plein écran"/>
                    </a>

                    <a href="#tissu2">
                    <img src="/tissu2.jpg" alt="Vignette" className='picCollectionWomen1'/>
                    </a>
                    <a href="#_" class="overlay" id="tissu2">
                        <img src="/tissu2.jpg" alt="Plein écran"/>
                    </a>

                    <a href="#tissu3">
                    <img src="/tissu3.jpg" alt="Vignette" className='picCollectionWomen1'/>
                    </a>
                    <a href="#_" class="overlay" id="tissu3">
                        <img src="/tissu3.jpg" alt="Plein écran"/>
                    </a>

                    <a href="#tissu4">
                    <img src="/tissu4.jpg" alt="Vignette" className='picCollectionWomen1'/>
                    </a>
                    <a href="#_" class="overlay" id="tissu4">
                        <img src="/tissu4.jpg" alt="Plein écran"/>
                    </a>

                    <a href="#tissu5">
                    <img src="/tissu5.jpg" alt="Vignette" className='picCollectionWomen1'/>
                    </a>
                    <a href="#_" class="overlay" id="tissu5">
                        <img src="/tissu5.jpg" alt="Plein écran"/>
                    </a>

                </div>
            </div>
        )
    }
}
export default CollectionTissu;