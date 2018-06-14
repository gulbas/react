import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Menu from './Menu.jsx';
import Header from './Header.jsx';

const menuItems = [
  {
    link: 'https://geekbrains.ru', title: 'Geekbrains'
  },
  {
    link: 'https://google.com', title: 'Google'
  }
];

const menuItems1 = [
  {
    link: 'https://geekbrains.ru', title: 'Geekbrains1'
  },
  {
    link: 'https://google.com', title: 'Google1'
  },
  {
    link: 'https://geekbrains.ru', title: 'Geekbrains1'
  },
  {
    link: 'https://google.com', title: 'Google1'
  },
  {
    link: 'https://geekbrains.ru', title: 'Geekbrains1'
  },
  {
    link: 'https://google.com', title: 'Google1'
  }
];

class App extends Component {
  render () {
    return (
      <div>
        <Header size="small" />
        <Menu items={menuItems} />
        <Menu items={menuItems1} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));