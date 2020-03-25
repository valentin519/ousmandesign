import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Acceuil from './component/Acceuil';
import Mainpage from './component/Mainpage';
import TalkAboutUs from './component/TalkAboutUs';
import Collection from './component/Collection';
import Contact from './component/Contact';
import CollectionWomen from './component/CollectionWomen';
import CollectionMan from './component/CollectionMan';
import CollectionBag from './component/CollectionBag';
import CollectionTissu from './component/CollectionTissu';
import Atelier from './component/Atelier';
import CollectionRobe from './component/CollectionRobe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Acceuil}/>
          <Route path='/mainpage' component={Mainpage}/>
          <Route path='/media' component={TalkAboutUs}/>
          <Route path='/collection' component={Collection}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/femme' component={CollectionWomen}/>
          <Route path='/homme' component={CollectionMan}/>
          <Route path='/accessoire' component={CollectionBag}/>
          <Route path='/tissu' component={CollectionTissu}/>
          <Route path='/atelier' component={Atelier}/>
          <Route path='/robe' component={CollectionRobe}/>
        </Switch>
      </div>
    );
  }
}

export default App;
