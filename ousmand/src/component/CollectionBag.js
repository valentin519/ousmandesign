import React from 'react';
import Navbar from './Navbar';

class CollectionBag extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            sac: false,
            noeud: false
        }
        this.toggleSacVisible=this.toggleSacVisible.bind(this);
        this.toggleNoeudVisible=this.toggleNoeudVisible.bind(this);
    }
    toggleSacVisible() {
		this.setState(prevState => {
			return { sac: true, noeud: false};
		});
    }
    toggleNoeudVisible() {
		this.setState(prevState => {
			return { sac: false, noeud: true};
		});
    }
    render(){
        return(

    <div>
        <Navbar/>
        <div className='accesSelection'>
                <div className='sacButton'onClick={this.toggleSacVisible}><p>Sac</p></div>
                <div className='noeudButton'onClick={this.toggleNoeudVisible}><p>Noeud papillon</p></div>
        </div>
        {this.state.sac && 
        <div>
        <a href="#sac21">
                 <img src="/sac21.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay2" id="sac21">
                <img src="/sac21.jpg" alt="Plein écran"/>
                <img src="/sac21-2.jpg" alt="Plein écran"/>
            </a>
        <a href="#sac1">
                 <img src="/sac1.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac1">
                <img src="/sac1.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac2">
                 <img src="/sac2.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac2">
                <img src="/sac2.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac3">
                 <img src="/sac3.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac3">
                <img src="/sac3.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac5">
                 <img src="/sac5.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac5">
                <img src="/sac5.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac6">
                 <img src="/sac6.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac6">
                <img src="/sac6.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac7">
                 <img src="/sac7.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac7">
                <img src="/sac7.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac9">
                 <img src="/sac9.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac9">
                <img src="/sac9.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac10">
                 <img src="/sac10.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac10">
                <img src="/sac10.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac11">
                 <img src="/sac11.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac11">
                <img src="/sac11.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac13">
                 <img src="/sac13.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac13">
                <img src="/sac13.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac14">
                 <img src="/sac14.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac14">
                <img src="/sac14.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac16">
                 <img src="/sac16.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac16">
                <img src="/sac16.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac17">
                 <img src="/sac17.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac17">
                <img src="/sac17.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac18">
                 <img src="/sac18.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac18">
                <img src="/sac18.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac19">
                 <img src="/sac19.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac19">
                <img src="/sac19.jpg" alt="Plein écran"/>
            </a>
            <a href="#sac20">
                 <img src="/sac20.jpg" alt="Vignette" className='picCollectionWomen'/>
            </a>
            <a href="#_" class="overlay" id="sac20">
                <img src="/sac20.jpg" alt="Plein écran"/>
            </a>
        </div>}
        {this.state.noeud &&
            <div>
                <a href="#noeud1">
                    <img src="/noeud1.jpg" alt="Vignette" className='picCollectionWomen'/>
                </a>
                <a href="#_" class="overlay" id="noeud1">
                    <img src="/noeud1.jpg" alt="Plein écran"/>
                </a>
                <a href="#noeud2">
                    <img src="/noeud2.jpg" alt="Vignette" className='picCollectionWomen'/>
                </a>
                <a href="#_" class="overlay" id="noeud2">
                    <img src="/noeud2.jpg" alt="Plein écran"/>
                </a>
                <a href="#noeud3">
                    <img src="/noeud3.jpg" alt="Vignette" className='picCollectionWomen'/>
                </a>
                <a href="#_" class="overlay" id="noeud3">
                    <img src="/noeud3.jpg" alt="Plein écran"/>
                </a>
                <a href="#noeud4">
                    <img src="/noeud4.jpg" alt="Vignette" className='picCollectionWomen'/>
                </a>
                <a href="#_" class="overlay" id="noeud4">
                    <img src="/noeud4.jpg" alt="Plein écran"/>
                </a>
                <a href="#noeud5">
                    <img src="/noeud5.jpg" alt="Vignette" className='picCollectionWomen'/>
                </a>
                <a href="#_" class="overlay" id="noeud5">
                    <img src="/noeud5.jpg" alt="Plein écran"/>
                </a>
                <a href="#noeud6">
                    <img src="/noeud6.jpg" alt="Vignette" className='picCollectionWomen'/>
                </a>
                <a href="#_" class="overlay" id="noeud6">
                    <img src="/noeud6.jpg" alt="Plein écran"/>
                </a>
            
                <a href="#noeud8">
                    <img src="/noeud8.jpg" alt="Vignette" className='picCollectionWomen'/>
                </a>
                <a href="#_" class="overlay" id="noeud8">
                    <img src="/noeud8.jpg" alt="Plein écran"/>
                </a>
             
            </div>
        }
    </div>
        )}
}

export default CollectionBag;