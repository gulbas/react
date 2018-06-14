import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from './Header.jsx';
import Body from './Body.jsx';
import Decks from './Decks.jsx';
import Footer from './Footer.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { menuItems } from './MenuItems.jsx'

class App extends Component {
  render () {
    return (
      <div>
        <Header items={menuItems}/>
        <br/>
        <div id="body">
        <Body/>
        <br/>
        <Decks/>
        </div>
        <Footer items={menuItems}/>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));