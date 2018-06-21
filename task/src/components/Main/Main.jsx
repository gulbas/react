import React, {Component} from 'react';
import Search from 'components/Container/Search';
import Body from 'components/Main/Body';
import Decks from 'components/Main/Decks'
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

export default class Main extends Component {
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