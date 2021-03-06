import React from 'react';
import Navbar from './Navbar';
import './contact.css';
import LightSpeed from 'react-reveal/LightSpeed';
import Footer from './Footer';

const Contact = () => {
    return(
        <div>
            <Navbar/>
                <div className='contact'>
                    <p>Vous pouvez nous joindre via cette adresse mail :</p>
                    <p className='mail'>contact@ousman-o. fashion</p>
                    <p>Ou via nos réseaux sociaux </p>
                    <div className='firtPicSocial'>
                        <a href='https://fr-fr.facebook.com/OusmanFashion/' target='_blank'>
                        <LightSpeed left>
                            <img src='/facebook.png' alt='' />
                        </LightSpeed>
                        </a>
                        <a href='https://www.instagram.com/ousman_o_fashion/' target="_blank">
                        <LightSpeed top>
                            <img src='/insta.png' alt=''/>
                        </LightSpeed>
                        </a>          
                        <LightSpeed right>
                            <img src='/twitter1.png' alt='' />
                        </LightSpeed>
                    </div>
                <div className='SecondPicSocial'>
                    <a href='https://www.linkedin.com/in/ousmane-ouedraogo-3a1a54137/' target='_blank'>
                    <LightSpeed bottom>
                        <img src='/linkedin.png' alt='' />
                    </LightSpeed>
                    </a>
                    <a href='https://www.youtube.com/channel/UCfHSIBAkED6_ZSCrWB8z7Gw' target="_blank" >
                    <LightSpeed bottom>
                        <img src='/youtube.png' alt=' ' />
                    </LightSpeed>
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact;