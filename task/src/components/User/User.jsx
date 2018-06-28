import React, { PureComponent } from 'react';
import Widgets from 'components/Widgets';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

export default class User extends PureComponent {
    render() {
        const { user } = this.props;
        return (
            <Container className="body">
                <Row>
                    <Col md="8">
                        <h1 className="my-4">User List
                        </h1>
                        <div>
                            {user.name} ({user.username})
                            <a href={`mailto:${user.email}`}>Email me</a>
                        </div>
                    </Col>
                 <Widgets/>
                </Row>
            </Container>
        );
    }
}
