import React, {PureComponent, Fragment} from 'react';
import Search from 'components/container/Search';
import Widgetlinks from './Widgetlinks';
import {linkPart1, linkPart2} from 'components/container/CategoriesLink';

import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody
} from 'reactstrap';


export default class Widgets extends PureComponent {
    render() {
        return (
            <Fragment>
                    <Col md="4">
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
                                    <Col><Widgetlinks items={linkPart1}/></Col>
                                    <Col><Widgetlinks items={linkPart2}/></Col>
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
            </Fragment>
        );
    }
}
