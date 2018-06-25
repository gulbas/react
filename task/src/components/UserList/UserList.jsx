import React, {PureComponent} from 'react';
import Widgets from 'components/Widgets';
import {Link} from 'react-router-dom';

import {
    Container,
    Row,
    Col
}
    from 'reactstrap';


export default class UserList extends PureComponent {
    render() {
        const {users} = this.props;
        return (
            <Container className="body">
                <Row>
                    <Col md="8">
                        <h1 className="my-4">User List
                        </h1>
                        <ul>
                            {users.map(user => <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>)}
                        </ul>
                    </Col>
                  <Widgets/>
                </Row>
            </Container>
        );
    }
}