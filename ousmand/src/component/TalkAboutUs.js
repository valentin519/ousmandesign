import React from 'react';
import Navbar from './Navbar';
import YouTube from 'react-youtube';
import './talkaboutus.css';
import Slide from 'react-reveal/Slide';


class TalkAboutUs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading : true
        }

    }
    _onReady(event) {

    }

    _onEnd(event) {
        event.target.playVideo();
    }
    render() {
        const videoOptions = {
            playerVars: {
                autoplay: 0,
                controls: 0,
                rel: 0,
                showinfo: false
        }
    }
        return(
            <div className='talkaboutusPage'>
                <Navbar/>
                    <div className='firstReportage'>
                        <Slide right>
                            <YouTube
                                className='videoFrance3'
                                videoId="PDWTy6etUfY"
                                opts={videoOptions}
                                autoPlay="autoplay"
                                showInfo='false'
                                controls='false'
                                onReady={this._onReady}
                                onEnd={this._onEnd}
                            />
                            <p>Reportage réalisé par France 3 Champagne Ardenne</p>
                        </Slide>        
                    </div>
                <br/>
                <div className='firstReportage'>
                    <Slide left>
                        <YouTube
                            className='videoFrance3'
                            videoId="YrWSS1bVrWM"
                            opts={videoOptions}
                            autoPlay="autoplay"
                            showInfo='false'
                            controls='false'
                            onReady={this._onReady}
                            onEnd={this._onEnd}
                        />
                        <p>Concours des Jeunes Designers Africains Francophones</p> 
                    </Slide>       
                </div>   
            </div>
        )
    }
    
};

export default TalkAboutUs;