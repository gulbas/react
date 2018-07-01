import React, {PureComponent} from 'react';
import PostList from 'containers/PostListContainer';
import Widgets from 'components/Widgets';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import '../Container/Containercss.sass';

export default class Example extends PureComponent {
    render() {
        return (
            <Container className="body">
                <Row>
                    <Col md="8">
                        <h1 className="my-4">Blog</h1>
                        <PostList/>
                    </Col>
                   <Widgets/>
                </Row>
            </Container>
        );
    }
}
