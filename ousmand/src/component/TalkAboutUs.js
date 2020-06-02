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
                controls: 1,
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
                                videoId="mtRIU-4CJkE"
                                opts={videoOptions}
                                autoPlay="autoplay"
                                showInfo='false'
                                controls='true'
                                onReady={this._onReady}
                                onEnd={this._onEnd}
                            />
                            <p>Reportage réalisé par France 3 Champagne Ardenne.</p>
                        </Slide>        
                    </div>
                <br/>
                <div className='firstReportage'>
                    <Slide left>
                        <YouTube
                            className='videoFrance3'
                            videoId="lx2ZmdWX-eA"
                            opts={videoOptions}
                            autoPlay="autoplay"
                            showInfo='false'
                            controls='true'
                            onReady={this._onReady}
                            onEnd={this._onEnd}
                        />
                        <p>Concours des Jeunes Designers Africains Francophones.</p> 
                    </Slide>       
                </div> 
                <div className='firstReportage'>
                    <Slide left>
                        <YouTube
                            className='videoFrance3'
                            videoId="BpoXYwJTRNg"
                            opts={videoOptions}
                            autoPlay="autoplay"
                            showInfo='false'
                            controls='true'
                            onReady={this._onReady}
                            onEnd={this._onEnd}
                        />
                        <p>Défilé du 10 mars 2020 au Palais d'Iéna, Paris.</p> 
                    </Slide>       
                </div> 
                <div className='firstReportage'>
                    <Slide left>
                        <YouTube
                            className='videoFrance3'
                            videoId="S1XpxlQSlZQ"
                            opts={videoOptions}
                            autoPlay="autoplay"
                            showInfo='false'
                            controls='true'
                            onReady={this._onReady}
                            onEnd={this._onEnd}
                        />
                        <p>Interview par Meriem Belazouz :Parcours et implication sociale d'Ousman O pendant la pandémie.</p> 
                    </Slide>       
                </div> 
                <div className='firstReportage'>
                    <Slide left>
                        <YouTube
                            className='videoFrance3'
                            videoId="S9Ejpw4I0xo"
                            opts={videoOptions}
                            autoPlay="autoplay"
                            showInfo='false'
                            controls='true'
                            onReady={this._onReady}
                            onEnd={this._onEnd}
                        />
                        <p>Coulisse du défilé au Palais d'Iéna à Paris le 10 mars 2020.</p> 
                    </Slide>       
                </div> 
            </div>
        )
    }
    
};

export default TalkAboutUs;