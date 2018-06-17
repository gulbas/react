import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

const Example = (props) => {
    return (
        <CardDeck>
            <Card>
                <CardImg top width="100%"
                         src="https://www.escapetravel.com.au/sites/escapetravel.com.au/files/thailand_banner_small-640x480.jpg"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional
                        content. This content is a little bit longer.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%"
                         src="http://1.bp.blogspot.com/-xupOrSHdcO8/T5WVmme1gQI/AAAAAAAAAxg/YnbzqmIvR3s/s1600/Koh+Tao+Diving+Boat,+Koh+Tao+Island,+Thailand.jpg"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%"
                         src="http://www.tourist-destinations.net/wp-content/uploads/2012/05/thailand.jpg"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional
                        content. This card has even longer content than the first to show that equal height
                        action.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </CardDeck>
    );
};

export default Example;