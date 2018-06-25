import React, {PureComponent} from 'react';
import {NavItem, NavLink} from 'reactstrap';

export default class Menu extends PureComponent {
    render() {
        const {items} = this.props;
        return (
            items.map(item =>
                    <NavItem>
                        <NavLink key={item.id} href={item.link}>
                            {item.title}
                            </NavLink>
                    </NavItem>)
        );
    }
}
