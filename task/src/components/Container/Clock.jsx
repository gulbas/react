import React, {Component} from 'react';
import Moment from 'moment';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateTimestamp: Moment().format('DD.MM.YYYY HH:mm:ss')
        };
    }

    tick = () => {
        this.setState({
            dateTimestamp: Moment().format('DD.MM.YYYY HH:mm:ss')
        });
    };

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const date = this.state.dateTimestamp;
        return (
            <div className="clock">{date}</div>
        );
    }
}
