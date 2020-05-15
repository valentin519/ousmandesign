
import React from 'react';
import './acceuil.css';
import Loading from './Loading';
import { Link } from 'react-router-dom';




class Acceuil extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading : true
        }

    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        },4000);
    }
    _onReady(event) {

    }

    _onEnd(event) {
        event.target.playVideo();
    }
    render() {
        if(this.state.loading){
            return <Loading/>
        }
        return (
            <div>
                <div className='filtreBackground'>
                    <div className="video-background">
                        <img className='picLeft' src='/celestmont.jpg' alt='Robe Designer Africain' />
                        <div className="video-foreground">
                            <video autoPlay muted loop width='100%' height='100%'> 
                                    <source className='videoacceuil' src="vidacceuil.webm" type="video/webm"/>
                                    <source className='videoacceuil' src="vidacceuil.mp4" type="video/mp4"/>  
                            </video>
                        </div>
                        <img className='picRight' src='/mont.jpg' alt='' />
                    </div>
                    <div  className='logoButton'>
                    <img className='picCenter' src='/ousmanlog.png' alt='' />
                        <Link to='/mainpage' class="button">
                            <span class="text-hover">Découvrir</span>
                            <span class="text-base">Bienvenue</span>
                        </Link>
                    </div>
                </div>
                <div className='versionMobile'>
                <img className='picCenterMobile' src='/ousmanlog.png' alt='' />
                    <video autoPlay muted loop width='100%' height='100%'> 
                        <source className='videoacceuil' src="vidacceuil.webm" type="video/webm"/>
                        <source className='videoacceuil' src="vidacceuil.mp4" type="video/mp4"/>  
                    </video>
                    <Link to='/mainpage' class="button">
                         <span class="text-base">Bienvenue</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Acceuil;