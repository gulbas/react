import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';

export default class Menu extends Component {
  render () {
    const { items } = this.props;
    return (
      items.map(item => <NavItem><NavLink key={item.id} href={item.link}>{item.title}</NavLink></NavItem>)
    );
  }
}
