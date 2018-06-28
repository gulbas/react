import React, {PureComponent} from 'react';
import PostCard from 'components/Container/PostCard';
import Widgets from 'components/Widgets';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import './Containercss.sass';

export default class Example extends PureComponent {
    render() {
        return (
            <Container className="body">
                <Row>
                    <Col md="8">
                        <h1 className="my-4">Page Heading
                            <small> Secondary Text</small>
                        </h1>
                        <PostCard/>
                    </Col>
                   <Widgets/>
                </Row>
            </Container>
        );
    }
}
