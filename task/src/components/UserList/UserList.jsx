import React, {Component} from 'react';
import Search from 'components/Container/Search';
import Link from 'components/Container/Link';
import {linkPart1, linkPart2} from 'components/Container/CategoriesLink';

import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody
}
    from 'reactstrap';

import 'components/Container/Container.sass'

export default class UserList extends Component {
    render() {
        const {users, onLoadMore} = this.props;
        return (
            <Container className="body">
                <Row>
                    <Col md="8">
                        <h1 className="my-4">User List
                        </h1>
                        <ul>
                            {users.map(user => <li key={user.id}>{user.body}</li>)}
                        </ul>
                        <button onClick={onLoadMore}>Load more</button>
                    </Col>
                    <Col md='4'>
                        <Card>
                            <CardHeader><h5>Search</h5></CardHeader>
                            <CardBody>
                                <Search/>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader><h5>Categories</h5></CardHeader>
                            <CardBody>
                                <Row>
                                    <Col><Link items={linkPart1}/></Col>
                                    <Col><Link items={linkPart2}/></Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader><h5>Side Widget</h5></CardHeader>
                            <CardBody>
                                You can put anything you want inside of these side widgets. They are easy to use, and
                                feature the new Bootstrap 4 card containers!
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}