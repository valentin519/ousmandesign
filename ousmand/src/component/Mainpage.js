import React, { Component } from "react";
import Navbar from './Navbar';
import './mainpage.css'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Mainpage extends Component {
    constructor(props) {
        super();
     
        this.state = {
          isFull: false,
        };
      }
     
      goFull = () => {
        this.setState({ isFull: true });
      }
      render(){
          return(
    <div className= 'mainpage'>
        <Navbar/>
        
        <div className='presentation'>
        <div className='presentationText'>
        <Slide top>
            
                <p>
                    Conception, fabrication et vente de vêtements, d'accessoires utilisant des matières premières africaines, amérindiennes, sud-américaines (coton biologique, lin, cuirs tannés végétalement, laine artisanale d’Alpaga…), soutenant ainsi le travail d’artisans et de coopératives de femmes dans différents pays et s’inspirant des coupes européennes pour répondre aux besoins d’une clientèle active, féminine et masculine, européenne et nord-américaine.
                    Nous sommes également engagés dans la création et la réalisation d’événements destinés à promouvoir notre production et plus largement le travail de création de jeunes designers n’ayant pas accès aux mêmes opportunités (visibilité médias, ouverture aux marchés européens et nord-américains…).
                    Nous sommes à l'origine du "Concours des Jeunes Designers de Mode Francophones" avec un premier défilé prévu en automne 2019.
                </p>
                
            <img className = 'presentationPic' src ='https://zupimages.net/up/20/07/g80i.jpg' alt =''/>
            </Slide>
            </div>
        </div>
    
        <Slide bottom>
        <div className='presentationSecond'>  
            <div className='presentationText'>
                <p>
                L’entreprise a confié la direction artistique à Ousmane OUEDRAOGO qui a débuté dans la mode comme mannequin (de 17 à 24 ans) puis est devenu styliste. Il a eu l’occasion de présenter ses créations lors de défilés (résidence de l’ambassadeur de France à Ouagadougou, dans plusieurs pays africains, en Europe: Oslo, Copenhague, en Amérique du Nord, Montréal… ).
                </p>
                <p>
                Plusieurs magazines se sont intéressés à son travail dans des articles / reportages, reprenant son credo : « Pour une mode ethnique, fière et solidaire », car il s’agit bien, pour Ousmane, de promouvoir la richesse de la culture et des traditions africaines avec ses modèles, en les combinant aux goûts et aux besoins occidentaux.
                </p>
                <p>
                Ousmane apporte de l'Afrique Sub-Saharienne couleurs, culture et traditions que l'on retrouve dans ses vêtements (en éditions limitées) et ses accessoires uniques. Plutôt que des murs, Ousmane OUEDRAOGO bâtit des ponts entre les hommes, les continents. Il nous invite au voyage à la découverte des Autres... Suivons-le!
                </p>
            </div>
            <Fade bottom>
                <img className='presentationPicSecond' src = 'https://zupimages.net/up/20/08/e62p.jpg' alt = ''  />          
            </Fade>
        </div>
        </Slide>

    </div>
)}}


export default Mainpage