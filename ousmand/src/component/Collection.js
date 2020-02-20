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
                            <img className='' onClick={this.goFull} src='https://zupimages.net/up/20/08/abhi.jpg' alt =''/>
                        </Slide>
                        <Slide bottom>
                            <img className='' src='https://zupimages.net/up/20/08/06lq.jpg' alt =''/>
                        </Slide>
                        <Slide left>
                            <img className='' src='https://zupimages.net/up/20/07/8210.png' alt =''/>
                        </Slide>
                    </div>
                    <div className='collectionCategory'>
                        <p> Femme</p>
                        <p> Homme</p>
                        <p> Accéssoires</p>
                    </div>
                </div>
                {this.state.collectionWomen && ( 
                    <Fade bottom>
                <div className='modalForWomen'>
                    <img className='closeModal' onClick={this.closeModal} src='https://zupimages.net/up/20/08/tleg.png' alt=''/>
                     <div className='picCatalog'>
                         <img src='https://zupimages.net/up/20/07/zvqy.jpg' alt=''/>
                         <img src='https://zupimages.net/up/20/07/zvqy.jpg' alt=''/>
                         <img src='https://zupimages.net/up/20/07/zvqy.jpg' alt=''/>
                         <img src='https://zupimages.net/up/20/07/zvqy.jpg' alt=''/>
                         <img src='https://zupimages.net/up/20/07/zvqy.jpg' alt=''/>
                         <img src='https://zupimages.net/up/20/07/zvqy.jpg' alt=''/>
                     </div>

                </div>
                </Fade>
                 ) }
            </div>
        )
    }
}

export default Collection;