
import React from 'react';
import './acceuil.css';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import "/home/val/workspace/ousmandesign2/ousmand/node_modules/video-react/dist/video-react.css";



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
        const videoOptions = {
            playerVars: {
                autoplay: 1,
                controls: 0,
                rel: 0,
                showinfo: false
            }
        }
        if(this.state.loading){
            return <Loading/>
        }
        return (
            <div className='filtreBackground'>
                <div className="video-background">
                    <img className='picLeft' src='/celestacceuil.jpg' alt='' />
                    <div className="video-foreground">
                       <video autoplay loop > 
                       <source className='videoacceuil' src="vidacceuil.webm" type="video/webm"/>
                            <source className='videoacceuil' src="vidacceuil.mp4" type="video/mp4"/>
                            
                            
                        </video>
                    </div>
                    <img className='picRight' src='/photoacceuil.jpg' alt='' />
                </div>
                <div>
                <img className='picCenter' src='/ousmanlog.png' alt='' />
                    <Link to='/mainpage' class="button">
                         <span class="text-hover">Découvrir</span>
                         <span class="text-base">Bienvenue</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Acceuil;