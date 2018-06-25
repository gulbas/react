import React, {PureComponent} from 'react';
import Widgets from 'components/Widgets';

import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardHeader,
    CardBody,
    CardText
}
    from 'reactstrap';

export default class User extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }


    handleSubmit = (comment) => {
        comment.preventDefault();
        let authorVal = comment.target[0].value.trim();
        let textVal = comment.target[1].value.trim();
        if (!textVal || !authorVal) {
            return;
        }
        const item = {
            author: authorVal,
            comment: textVal
        };
        this.setState({data: [...this.state.data, item]});
    };

    render() {
        return (
            <Container className="body">
                <Row>
                    <Col md="8">
                        <h1 className="my-4">Comments
                        </h1>
                        <div>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="nick">Nick</Label>
                                    <Input type="text" name="email" id="nick" placeholder="Nickname"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Comments</Label>
                                    <Input type="textarea" name="text" id="exampleText"
                                           placeholder="Enter comment text"/>
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </div>
                        <div>
                            {this.state.data.map((item, index) =>
                                <div key={index}>
                                    <Card>
                                        <CardHeader><b>{item.author}</b></CardHeader>
                                        <CardBody>
                                            <CardText>{item.comment}</CardText>
                                        </CardBody>
                                    </Card>
                                </div>)}
                        </div>
                    </Col>
                    <Widgets/>
                </Row>
            </Container>
        );
    }
}