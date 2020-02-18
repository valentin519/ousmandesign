import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Acceuil from './component/Acceuil';
import Mainpage from './component/Mainpage';
import TalkAboutUs from './component/TalkAboutUs';
import Collection from './component/Collection';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path ='/' component={Acceuil}/>
          <Route path = '/mainpage' component={Mainpage}/>
          <Route path = '/media' component={TalkAboutUs}/>
          <Route path = '/collection' component={Collection}/>
        </Switch>
      </div>
    );
  }
}

export default App;
