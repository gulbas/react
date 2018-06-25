import React, { PureComponent } from 'react';
import Widgets from 'components/Widgets';

import {
    Container,
    Row,
    Col
}
    from 'reactstrap';

export default class User extends PureComponent {
    render() {
        const { user } = this.props;
        return (
            <Container className="body">
                <Row>
                    <Col md="8">
                        <h1 className="my-4">Comments
                        </h1>
                        <div>
                            dfff
                        </div>
                    </Col>
                 <Widgets/>
                </Row>
            </Container>
        );
    }
}