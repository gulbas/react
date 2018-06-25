import React, {PureComponent} from 'react';
import Moment from 'moment';
import Widgets from 'components/Widgets';

import {
    Container,
    Row,
    Col
}
    from 'reactstrap';

export default class Clock extends PureComponent {
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
             <Container className="body">
                <Row>
                    <Col md="8">
                        <h1 className="my-4">Clock
                        </h1>
                        <div className="clock">{date}</div>
                    </Col>
                 <Widgets/>
                </Row>
            </Container>
        );
    }
}
