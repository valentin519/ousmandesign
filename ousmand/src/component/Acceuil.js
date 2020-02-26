
import React from 'react';
import './acceuil.css';
import YouTube from 'react-youtube';
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
        },3000);
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
                    <img className='picLeft' src='https://zupimages.net/up/20/07/zvqy.jpg' alt='' />
                    <div className="video-foreground">
                        <YouTube
                            videoId="hqPLnWnLMZk"
                            opts={videoOptions}
                            autoPlay="autoplay"
                            className="video-iframe"
                            showInfo='false'
                            controls='false'
                            onReady={this._onReady}
                            onEnd={this._onEnd}
                        />
                    </div>
                    <img className='picRight' src='/soie.jpg' alt='' />
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