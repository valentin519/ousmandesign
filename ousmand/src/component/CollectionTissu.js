import React from 'react';
import Navbar from './Navbar';
import Fade from 'react-reveal/Fade';

class CollectionTissu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coton: false,
            voile: false,
            dentelle: false,
            soie: false,
        }
        this.toggleCotonVisible = this.toggleCotonVisible.bind(this);
        this.toggleDentelleVisible = this.toggleDentelleVisible.bind(this);
        this.toggleSoieVisible = this.toggleSoieVisible.bind(this);
        this.toggleVoileVisible = this.toggleVoileVisible.bind(this);

    }
    toggleCotonVisible() {
		this.setState(prevState => {
			return { coton: true, dentelle: false, soie: false, voile: false};
		});
    }
    toggleDentelleVisible() {
		this.setState(prevState => {
			return { coton: false, dentelle: true, soie: false, voile: false};
		});
    }
    toggleSoieVisible() {
		this.setState(prevState => {
			return { coton: false, dentelle: false, soie: true, voile: false};
		});
    }
    toggleVoileVisible() {
		this.setState(prevState => {
			return { coton: false, dentelle: false, soie: false, voile: true};
		});
	}
    render(){
        return(
            <div>
                <Navbar/>
                    <div className='tissuCategorie'>
                        <div onClick={this.toggleCotonVisible} className='cotonSelection'><p>Coton Bio</p></div>
                        <div onClick={this.toggleDentelleVisible} className='dentelleSelection'><p>Dentelle de Calais</p></div>
                        <div className='voileSelection'><p>Voile Tatoué</p></div>
                        <div className='soieSelection'><p>Soie</p></div>
                    </div>
                    {this.state.coton && (
                        <Fade right>
                       <div>
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
                       </Fade>
                        )}
                         {this.state.dentelle && (
                              <Fade right>
                       <div>
                        <a href="#tissu1">
                            <img src="/homme1.jpg" alt="Vignette" className='picCollectionWomen1'/>
                            </a>
                            <a href="#_" class="overlay" id="tissu1">
                                <img src="/tissu1.jpg" alt="Plein écran"/>
                            </a>

                            <a href="#tissu2">
                            <img src="/homme2.jpg" alt="Vignette" className='picCollectionWomen1'/>
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
                       </div>
                       </Fade>
                        )}
                       </div>
        )
    }
}
export default CollectionTissu;