import React, { PureComponent, Fragment } from 'react';

import UserList from 'components/UserList';

class UserListContainer extends PureComponent {
    componentDidMount() {
        this.load();
    }

    render() {
        const { users, loading } = this.state;
        return (
            <Fragment>
                {loading ? <div>Loading...</div> : <UserList onLoadMore={this.handleLoadMore} users={users} />}
            </Fragment>
        );
    }
}