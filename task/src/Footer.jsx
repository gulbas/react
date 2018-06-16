import React, { Component } from 'react';
import { NavItem, NavLink, Nav } from 'reactstrap';

export default class Footer extends Component {
  render () {
    const { items } = this.props;
    return (
    	<footer className="footer">
	    	<Nav>
	      	{items.map(item => <NavItem><NavLink href={item.link}>{item.title}</NavLink></NavItem>)}
	      </Nav>
      </footer>
    );
  }
}
