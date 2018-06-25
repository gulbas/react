import React, {PureComponent} from 'react';
import Body from 'components/Main/Body';
import Decks from 'components/Main/Decks'
import Widgets from 'components/Widgets';

import {
    Container,
    Row,
    Col
}
    from 'reactstrap';

export default class Main extends PureComponent {
    render() {
        return (
            <Container className="body">
                <Row>
                    <Col md="8">
                        <h1 className="my-4">Main
                        </h1>
                        <Body/>
                        <Decks/>
                    </Col>
                  <Widgets/>
                </Row>
            </Container>
        );
    }
}