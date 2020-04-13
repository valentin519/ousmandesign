import React from 'react';
import Navbar from './Navbar';
import Fade from 'react-reveal/Fade';
import './collection.css'

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
            <div className='tissu'>
                <Navbar/>
                    <div className='tissuCategorie'>
                        <div onClick={this.toggleCotonVisible} className='cotonSelection'><p>Coton Bio</p></div>
                        <div onClick={this.toggleDentelleVisible} className='dentelleSelection'><p>Dentelle de Calais</p></div>
                        <div onClick={this.toggleVoileVisible} className='voileSelection'><p>Voile Tatoué</p></div>
                        <div onClick={this.toggleSoieVisible} className='soieSelection'><p>Soie</p></div>
                    </div>
                    {this.state.coton && (
                        <Fade right>
                       <div>
                        <a href="#coton1">
                            <img src="/coton1.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton1">
                                <img src="/coton1.jpg" alt="Plein écran"/>
                            </a>

                            <a href="#coton2">
                            <img src="/coton2.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton2">
                                <img src="/coton2.jpg" alt="Plein écran"/>
                            </a>

                            <a href="#coton3">
                            <img src="/coton3.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton3">
                                <img src="/coton3.jpg" alt="Plein écran"/>
                            </a>

                            <a href="#coton4">
                            <img src="/coton4.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton4">
                                <img src="/coton4.jpg" alt="Plein écran"/>
                            </a>

                            <a href="#coton5">
                            <img src="/coton5.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton5">
                                <img src="/coton5.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton6">
                            <img src="/coton6.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton6">
                                <img src="/coton6.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton7">
                            <img src="/coton7.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton7">
                                <img src="/coton7.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton8">
                            <img src="/coton8.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton8">
                                <img src="/coton8.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton9">
                            <img src="/coton9.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton9">
                                <img src="/coton9.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton10">
                            <img src="/coton10.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton10">
                                <img src="/coton10.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton11">
                            <img src="/coton11.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton11">
                                <img src="/coton11.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton12">
                            <img src="/coton12.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton12">
                                <img src="/coton12.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton13">
                            <img src="/coton13.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton13">
                                <img src="/coton13.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton14">
                            <img src="/coton14.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton14">
                                <img src="/coton14.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton16">
                            <img src="/coton16.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton16">
                                <img src="/coton16.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton17">
                            <img src="/coton17.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton17">
                                <img src="/coton17.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton23">
                            <img src="/coton23.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton23">
                                <img src="/coton23.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton24">
                            <img src="/coton24.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton24">
                                <img src="/coton24.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton25">
                            <img src="/coton25.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton25">
                                <img src="/coton25.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton26">
                            <img src="/coton26.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton26">
                                <img src="/coton26.jpg" alt="Plein écran"/>
                            </a>
                            <div className='pagne'>
                            <img className='barre' src='/file1.png' alt=''/>
                            <p>Pagnes Wax</p>
                        </div>
                            <a href="#coton19">
                            <img src="/coton19.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton19">
                                <img src="/coton19.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton20">
                            <img src="/coton20.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton20">
                                <img src="/coton20.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton21">
                            <img src="/coton21.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton21">
                                <img src="/coton21.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#coton22">
                            <img src="/coton22.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="coton22">
                                <img src="/coton22.jpg" alt="Plein écran"/>
                            </a>
                       </div>
                       </Fade>
                        )}
                        
                         {this.state.dentelle && (
                              <Fade right>
                       <div>
                            <a href="#dentelle1">
                            <img src="/dentelle1.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="dentelle1">
                                <img src="/dentelle1.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#dentelle2">
                            <img src="/dentelle2.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="dentelle2">
                                <img src="/dentelle2.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#dentelle3">
                            <img src="/dentelle3.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="dentelle3">
                                <img src="/dentelle3.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#dentelle4">
                            <img src="/dentelle4.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="dentelle4">
                                <img src="/dentelle4.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#dentelle5">
                            <img src="/dentelle5.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="dentelle5">
                                <img src="/dentelle5.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#dentelle6">
                            <img src="/dentelle8.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="dentelle6">
                                <img src="/dentelle6.jpg" alt="Plein écran"/>
                                <img src="/dentelle8.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#dentelle9">
                            <img src="/dentelle7.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="dentelle9">
                                <img src="/dentelle9.jpg" alt="Plein écran"/>
                                <img src="/dentelle7.jpg" alt="Plein écran"/>
                            </a>
                        </div>    
                       </Fade>
                        )}
                            {this.state.voile && (
                              <Fade right>
                       <div>
                            <a href="#voile1">
                            <img src="/voile1.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="voile1">
                                <img src="/voile1.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile2">
                            <img src="/voile2.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="voile2">
                                <img src="/voile2.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile3">
                            <img src="/voile3.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="voile3">
                                <img src="/voile3.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile4">
                            <img src="/voile4.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="voile4">
                                <img src="/voile4.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile5">
                            <img src="/voile5.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="voile5">
                                <img src="/voile5.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile6">
                            <img src="/voile6.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="voile6">
                                <img src="/voile6.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile7">
                            <img src="/voile7.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="voile7">
                                <img src="/voile7.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile10">
                            <img src="/voile10.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="voile10">
                                <img src="/voile10.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile11">
                            <img src="/voile11.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="voile11">
                                <img src="/voile11.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile12">
                            <img src="/voile12.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="voile12">
                                <img src="/voile12.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile13">
                            <img src="/voile13.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="voile13">
                                <img src="/voile13.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile14">
                            <img src="/voile14.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="voile14">
                                <img src="/voile14.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile17">
                            <img src="/voile17.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="voile17">
                                <img src="/voile17.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile18">
                            <img src="/voile18.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="voile18">
                                <img src="/voile18.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile19">
                            <img src="/voile19.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="voile19">
                                <img src="/voile19.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile15">
                            <img src="/voile15.jpg" alt="Vignette" className='picCollectionWomen2'/>
                            </a>
                            <a href="#_" class="overlay" id="voile15">
                                <img src="/voile15.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#voile16">
                            <img src="/voile16.jpg" alt="Vignette" className='picCollectionWomen2'/>
                            </a>
                            <a href="#_" class="overlay" id="voile16">
                                <img src="/voile16.jpg" alt="Plein écran"/>
                            </a>
                           
                        </div>    
                       </Fade>
                        )}
                          {this.state.soie && (
                              <Fade right>
                       <div>
                            <a href="#soie1">
                            <img src="/soie1.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie1">
                                <img src="/soie.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie2">
                            <img src="/soie2.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie2">
                                <img src="/soie2.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie3">
                            <img src="/soie3.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie3">
                                <img src="/soie3.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie4">
                            <img src="/soie4.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie4">
                                <img src="/soie4.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie5">
                            <img src="/soie5.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie5">
                                <img src="/soie5.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie6">
                            <img src="/soie6.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie6">
                                <img src="/soie6.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie7">
                            <img src="/soie7.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie7">
                                <img src="/soie7.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie8">
                            <img src="/soie8.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie8">
                                <img src="/soie8.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie9">
                            <img src="/soie9.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie9">
                                <img src="/soie9.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie10">
                            <img src="/soie10.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie10">
                                <img src="/soie10.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie11">
                            <img src="/soie11.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie11">
                                <img src="/soie11.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie12">
                            <img src="/soie12.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie12">
                                <img src="/soie12.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie13">
                            <img src="/soie13.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie13">
                                <img src="/soie13.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie14">
                            <img src="/soie14.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie14">
                                <img src="/soie14.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie15">
                            <img src="/soie15.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie15">
                                <img src="/soie15.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie16">
                            <img src="/soie16.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie16">
                                <img src="/soie16.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie17">
                            <img src="/soie17.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie17">
                                <img src="/soie17.jpg" alt="Plein écran"/>
                            </a>
                            <a href="#soie18">
                            <img src="/soie18.jpg" alt="Vignette" className='picCollectionWomen'/>
                            </a>
                            <a href="#_" class="overlay" id="soie18">
                                <img src="/soie18.jpg" alt="Plein écran"/>
                            </a>
                        </div>    
                       </Fade>
                        )}
                       </div>
        )
    }
}
export default CollectionTissu;