import './Header.css';

import React, { Component } from 'react';
import classNames from 'classnames';

export default class Header extends Component {
  handleClick() {
    alert('Clicked');
  }

  render () {
    const { size } = this.props;
    const className = classNames(
      'header',
      {
        'header--small': size === 'small',
        'header--big': size === 'big'
      }
    );

    return (
      <div onClick={this.handleClick} className={className}>Hello world from Header</div>
    );
  }
}