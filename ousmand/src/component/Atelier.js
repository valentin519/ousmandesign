import React from 'react';
import Navbar from './Navbar';
import './atelier.css';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
class Atelier extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            acceuil: true,
        }
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                acceuil: false
            })
        },8000);
    }
    render(){  
        return(
            <div>
                <Navbar/>
                {this.state.acceuil && (
                <Fade left>
                <div className='acceuilAtelier'>
                    <p>Bienvenue à l'Atelier</p>
                    <p>Vous retrouverez ici différentes photos de coulisse lors des créations ou des défilés</p>
                </div>
                </Fade>
                )}
                <div>
                    <a href="#atelier2">
                        <img src="/atelier2.jpg" alt="Vignette" className='picAtelierPortrait'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier2">
                        <img src="/atelier2.jpg" alt="Plein écran"/>
                    </a>

                    <a href="#atelier4">
                        <img src="/atelier4.jpg" alt="Vignette" className='picAtelierPortrait'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier4">
                        <img src="/atelier4.jpg" alt="Plein écran"/>
                    </a>
                    <a href="#atelier5">
                        <img src="/atelier5.jpg" alt="Vignette" className='picAtelierPortrait'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier5">
                        <img src="/atelier5.jpg" alt="Plein écran"/>
                    </a>
                    <a href="#atelier6">
                        <img src="/atelier6.jpg" alt="Vignette" className='picAtelierPortrait'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier6">
                        <img src="/atelier6.jpg" alt="Plein écran"/>
                    </a>
                    <a href="#atelier7">
                        <img src="/atelier7.jpg" alt="Vignette" className='picAtelierPaysage'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier7">
                        <img src="/atelier7.jpg" alt="Plein écran"/>
                    </a>
                    <a href="#atelier8">
                        <img src="/atelier8.jpg" alt="Vignette" className='picAtelierPaysage'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier8">
                        <img src="/atelier8.jpg" alt="Plein écran"/>
                    </a>
                    <a href="#atelier10">
                        <img src="/atelier10.jpg" alt="Vignette" className='picAtelierPaysage'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier10">
                        <img src="/atelier10.jpg" alt="Plein écran"/>
                    </a>
                    <a href="#atelier12">
                        <img src="/atelier12.jpg" alt="Vignette" className='picAtelierPaysage'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier12">
                        <img src="/atelier12.jpg" alt="Plein écran"/>
                    </a>
                    <a href="#atelier13">
                        <img src="/atelier13.jpg" alt="Vignette" className='picAtelierPaysage'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier13">
                        <img src="/atelier13.jpg" alt="Plein écran"/>
                    </a>
                    <a href="#atelier14">
                        <img src="/atelier14.jpg" alt="Vignette" className='picAtelierPaysage'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier14">
                        <img src="/atelier14.jpg" alt="Plein écran"/>
                    </a>

                    <a href="#atelier16">
                        <img src="/atelier16.jpg" alt="Vignette" className='picAtelierPaysage'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier16">
                        <img src="/atelier16.jpg" alt="Plein écran"/>
                    </a>
                    <a href="#atelier17">
                        <img src="/atelier17.jpg" alt="Vignette" className='picAtelierPaysage'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier17">
                        <img src="/atelier17.jpg" alt="Plein écran"/>
                    </a>
                    <a href="#atelier11">
                        <img src="/atelier18.jpg" alt="Vignette" className='picAtelierPaysage'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier18">
                        <img src="/atelier18.jpg" alt="Plein écran"/>
                    </a>
                    <a href="#atelier20">
                        <img src="/atelier20.jpg" alt="Vignette" className='picAtelierPaysage'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier20">
                        <img src="/atelier20.jpg" alt="Plein écran"/>
                    </a>
                    <a href="#atelier11">
                        <img src="/atelier21.jpg" alt="Vignette" className='picAtelierPaysage'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier21">
                        <img src="/atelier21.jpg" alt="Plein écran"/>
                    </a>
                    <a href="#atelier11">
                        <img src="/atelier22.jpg" alt="Vignette" className='picAtelierPaysage'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier22">
                        <img src="/atelier22.jpg" alt="Plein écran"/>
                    </a>
                    <a href="#atelier23">
                        <img src="/atelier23.jpg" alt="Vignette" className='picAtelierPaysage'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier23">
                        <img src="/atelier23.jpg" alt="Plein écran"/>
                    </a>

                    <a href="#atelier25">
                        <img src="/atelier25.jpg" alt="Vignette" className='picAtelierPaysage'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier25">
                        <img src="/atelier25.jpg" alt="Plein écran"/>
                    </a>
                    <a href="#atelier26">
                        <img src="/atelier26.jpg" alt="Vignette" className='picAtelierPaysage'/>
                    </a>
                    <a href="#_" class="overlay" id="atelier26">
                        <img src="/atelier26.jpg" alt="Plein écran"/>
                    </a>
                </div>
               
            </div>
            )       
    }
}       
export default Atelier;