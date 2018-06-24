import React, {Component} from 'react';

export default class Link extends Component {
    render() {
        const {items} = this.props;
        return (
            <ul className="list-unstyled">
                {items.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)}
            </ul>
        );
    }
}
