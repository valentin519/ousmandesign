import React, { Component } from "react";
import Navbar from './Navbar';
import './mainpage.css';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';


class Mainpage extends Component {
    constructor(props) {
        super();
     
        this.state = {};
      }
      render(){
          return(
                <div className='mainpage'>
                    <Navbar/>
                    <h1>À PROPOS</h1> 
                    <h2>Une vie au service de la mode, des autres, de l'excellence.</h2> 
                    <div className='presentation'>
                   
                        <div className='presentationText'>
                            <Slide top>
                            
                            <img className='presentationPic' src='https://zupimages.net/up/20/07/g80i.jpg' alt=''/> 

                                <div className='presentationText2'>

                                <h3>La mode au-delà des frontières.</h3>

                                    <p>
                                    Derrière la signature « <strong>Ousman O.</strong> », un jeune designer burkinabé-malien, récemment installé en France, porteur d’un « <strong>Passeport Talent </strong> » octroyé par l’État Français : <strong>Ousmane Ouedraogo</strong>, qui a débuté dans la mode comme <strong>mannequin </strong>(de 17 à 24 ans) puis est devenu <strong>styliste</strong>. Il a eu l’occasion de présenter ses créations lors de défilés (résidence de l’ambassadeur de France à Ouagadougou au Burkina Faso, dans plusieurs autres capitales africaines, européennes (Oslo, Copenhague, Paris) et nord-américaines.
                                    </p> 
                                </div>
                            </Slide>
                        </div>
                    </div>

                    <div className='presentationSecond'> 
                        <Slide bottom> 
                            <div className='presentationText2'>
                                <h3>Pour une mode éthique et solidaire.</h3>
                                <p>
                                Ousmane apporte de l'<strong>Afrique Sub-Saharienne </strong>couleurs, culture et traditions que l'on retrouve dans ses vêtements (en éditions <strong>limitées</strong>) et ses accessoires <strong>uniques</strong>.<br/>
                                <strong>Plusieurs magazines</strong> se sont intéressés à son travail dans des articles / reportages (<Link to='/media'>ILS PARLENT DE NOUS</Link>), reprenant son credo : « Pour une mode ethnique, éthique, fière et solidaire », car il s’agit bien, pour Ousmane, de promouvoir la richesse de la culture et des traditions africaines avec ses modèles, en les combinant aux goûts et aux besoins d’une clientèle occidentale, active et exigeante.
                                </p>
                                  
                            </div>      
                        </Slide> 
                        <Slide bottom> 
                            <div className='presentationText2'>
                                <h3>Un label de reconnaissance et d’appartenance : « Made in Francophonie ».</h3>
                                <p>
                                Chaque création d’Ousman.O porte le label « <a href='https://made-in-francophonie.net'>Made in Francophonie</a> » qui fait apparaitre fièrement le nom des artisans qui ont contribué à la réalisation de cette création. Chaque vêtement, chaque accessoire est <strong>porteur de son histoire</strong> et répond ainsi aux <strong>besoins d’individualisation </strong> de la clientèle et à son souci de participer à une démarche <strong>éthique</strong>.

                                </p>
                                  
                            </div>      
                        </Slide>      
                    </div>
                    <h2>« Ousman.O » et les Objectifs de Développement Durable (ODD-2030) de l’O.N.U.</h2>
                    <div className='presentationSecond'> 
                        
                        <Slide bottom> 
                            <div className='presentationText2'>
                                <h3>Produire autrement pour consommer autrement .</h3>
                                <p>
                                Pour <strong>Ousmane Ouedraogo</strong>, concevoir des vêtements, des accessoires, les fabriquer implique d’utiliser des <strong>matières premières africaines, amérindiennes, sud-américaines respectueuses de l’environnement </strong>(coton biologique, teinture végétales, chanvre, laine artisanale d’Alpaga…).
                                </p>
                                  
                            </div>      
                        </Slide> 
                        <Slide bottom> 
                            <div className='presentationText2'>
                                <h3>Soutenir l’entreprenariat social et le commerce équitable.</h3>
                                <p>
                                Il s’agit aussi de <strong>soutenir</strong> ainsi le travail d’artisans et de <strong>coopératives de femmes dans différents pays </strong>(Mali, Burkina, Mauritanie...) en contribuant à leur développement mais aussi à la pérennité d’un <strong> savoir-faire ancestral </strong>, une richesse culturelle et artistique fédératrice et source de fierté.
                                </p>
                            </div>      
                        </Slide> 
                       
                    </div>
                    <Slide bottom> 
                            <div className='presentationText2'>
                                <h3>Favoriser la création et l’entreprenariat créatif et culturel.</h3>
                                <p>
                                La préoccupation d’<strong>Ousmane Ouedraogo</strong> est non seulement de promouvoir ses productions mais plus largement le travail de création de <strong>jeunes designers </strong>n’ayant pas accès aux mêmes opportunités (visibilité médias, ouverture aux marchés européens et nord-américains…). C’est ainsi qu’<strong>Ousmane</strong> est à l'origine du "<strong>Concours des Jeunes Designers de Mode Francophones</strong>" avec un premier défilé de clôture à l’<strong>automne 2019 </strong>aet une seconde édition en préparation pour le <strong>printemps 2021</strong>. Il s’agit bien de valoriser le travail de création et soutenir de <strong>jeunes entrepreneurs dans la mode, la culture, créateurs de valeur, créateurs de richesse</strong>. 
                                </p>
                            </div>      
                        </Slide>  
                    <Slide bottom> 
                    <img className='presentationPicSecond' src='/mainpage.jpg' alt=''  /> 
                    </Slide>  
                </div>
)}}


export default Mainpage