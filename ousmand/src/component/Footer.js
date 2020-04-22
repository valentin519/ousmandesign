import React from 'react';
import './footer.css';

const Footer = () => (
    <div className='footer'>
            <div className='ousman'>
                <p>Ousman Design </p>
                <p>SARL au capital social de 10.000Euros</p>
            </div>
            <div className='ousman'>
                <p>20 rue Henri IV 51100 Reims</p>            
                <p>Dirécteur Artistique : Ousmane OUEDRAOGO</p>
            </div>
        <div className='ovh'>
            <p>
                Ce site est hébergé par OVH :
            </p>
            <p>
                SAS au capital de 10 069 020 €
            </p>
        </div>
        <div className='ovh'>
            <p>
                Siège social : 2 rue Kellermann - 59100 Roubaix - France 
            </p>
            <p>Site crée par : <a href='https://www.linkedin.com/in/valentin-julien-422b77193'>Valentin JULIEN</a><img src='/linkedin.png'/></p>
        </div>       
    </div>
)

export default Footer;