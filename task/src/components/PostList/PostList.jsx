import React, {Component} from 'react';
import {
    Card, Button, CardBody, CardTitle, CardText
} from 'reactstrap';

export default class PostList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {posts, onLoadMore} = this.props;

        return (
            <div>{posts.map(post =>
                <Card key={post.id}>
                    <CardBody>
                        <CardTitle>{post.title}</CardTitle>
                        <CardText>{post.body}</CardText>
                    </CardBody>
                </Card>)}
                <Button onClick={onLoadMore}>Load more</Button>
            </div>
        )
    }
}