import React, { Component } from 'react';
import Navbar from './Navbar';
import './collection.css';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

 


class Collection extends Component {
    constructor(props){
        super(props);
        this.state = {
            collectionBag: false,
            collectionMan: false,
            collectionWomen: false
        }
      this.goFull=this.goFull.bind(this);  
    }
    goFull = () => {
        this.setState({collectionWomen : true} );
      }
    closeModal = () => {
        this.setState({collectionWomen : false} );
      }
    render(){
        return(
            <div className='collectionPage'>
                <Navbar/>
                <p>Nos créations</p>
                <div className='picAndCategory'>
                    <div className='threePic'>
                        <Slide right>
                            <div className='category'>
                            <img className='pic' onClick={this.goFull} src='https://zupimages.net/up/20/08/abhi.jpg' alt =''/>
                            <p> Femme</p>
                            </div>
                        </Slide>
                        <Slide bottom>
                            <div className='category'> 
                            <img className='centerPic' src='https://zupimages.net/up/20/08/06lq.jpg' alt =''/>
                            <p> Homme</p>
                            </div>
                        </Slide>
                        <Slide left>
                            <div className='category'>
                            <img className='picRight' src='https://zupimages.net/up/20/07/8210.png' alt =''/>
                            <p> Accéssoires</p>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        )
    }
}

export default Collection;