import React, {PureComponent} from 'react';
import {NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Menu extends PureComponent {
    render() {
        const {items} = this.props;
        return (
            items.map((item,idx) =>
                    <NavItem key={idx}>
                        <NavLink  tag={Link} to={item.link}>
                            {item.title}
                            </NavLink>
                    </NavItem>)
        );
    }
}
