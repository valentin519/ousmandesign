import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Menu from './Menu'

class Navbar extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            isMenuVisible: false,
        }
        this.toggleMenuVisible = this.toggleMenuVisible.bind(this);
    }
    toggleMenuVisible() {
		this.setState(prevState => {
			return { isMenuVisible: !prevState.isMenuVisible };
		});
	}
    render(){
        return(
    <div>
        <div className='navbarDesktop'>
            <Link className='navbarSelection' to='/mainpage'>A propos de nous</Link>
            <Link className='navbarSelection' to='/collection'>Nos créations</Link>
            <Link className='navbarSelection' to='/contact'> Nous contacter</Link>
            <Link to='/' ><img className='logoNavbar' src='/ousmanlog.png' alt=''/></Link>
            <Link className='navbarSelection' to='/tissu'>Les tissus</Link>
            <Link className='navbarSelection' to='/atelier'> L'atelier</Link>
            <Link className='navbarSelection' to='/media'>Ils parlent de nous</Link>
        </div>
        <div className='navbarMobile'>
        <Link to='/' ><img className='logoNavbar' src='/ousmanlog.png' alt=''/></Link>

            {this.state.isMenuVisible ? '' :
            <img className='burger' src='/burgericon.png' alt=''onClick={this.toggleMenuVisible}/>
            }
            {this.state.isMenuVisible && (
					<div onClick={this.toggleMenuVisible}>
						<Menu 
							handleChangeTab={this.handleChangeTab}/>
					</div>
				)}
        </div>
    </div>
        )
    }
}
export default Navbar