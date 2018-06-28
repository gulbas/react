import React from 'react';
import Paginat from './Pagination';

import {connect} from 'react-redux';

import {loadPost} from 'actions/comments';

import {
    Card,
    Button,
    CardFooter,
    CardBody,
    CardTitle,
    CardText,
    CardImg
} from 'reactstrap';

const PostCard = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%"
                         src="https://placeholdit.imgix.net/~text?txtsize=85&txt=750%C3%97300&w=750&h=300"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Post Title</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla?
                        Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus
                        possimus, veniam magni quis!</CardText>
                    <Button color="primary">Read More →</Button>
                </CardBody>
                <CardFooter>
                    Posted on January 1, 2017 by <a href="#">Start Bootstrap</a>
                </CardFooter>
            </Card>

            <Card>
                <CardImg top width="100%"
                         src="https://placeholdit.imgix.net/~text?txtsize=85&txt=750%C3%97300&w=750&h=300"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Post Title</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla?
                        Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus
                        possimus, veniam magni quis!</CardText>
                    <Button color="primary">Read More →</Button>
                </CardBody>
                <CardFooter>
                    Posted on January 1, 2017 by <a href="#">Start Bootstrap</a>
                </CardFooter>
            </Card>

            <Card>
                <CardImg top width="100%"
                         src="https://placeholdit.imgix.net/~text?txtsize=85&txt=750%C3%97300&w=750&h=300"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Post Title</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla?
                        Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus
                        possimus, veniam magni quis!</CardText>
                    <Button color="primary">Read More →</Button>
                </CardBody>
                <CardFooter>
                    Posted on January 1, 2017 by <a href="#">Start Bootstrap</a>
                </CardFooter>
            </Card>
            <Paginat/>
        </div>
    );
};

export default PostCard;