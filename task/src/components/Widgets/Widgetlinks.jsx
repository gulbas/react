import React, {PureComponent} from 'react';

export default class Widgetlinks extends PureComponent {
    render() {
        const {items} = this.props;
        return (
            <ul className="list-unstyled">
                {items.map((item, idx) => <li key={idx}><a href={item.link}>{item.title}</a></li>)}
            </ul>
        );
    }
}
