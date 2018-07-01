import React, { PureComponent, Fragment } from 'react';

import UserList from 'components/PostList';

export default class PostListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            page: 1,
            posts: []
        };
    }

    load() {
        const { page, posts } = this.state;
        if(page === 1) {
            this.setState({ loading: true });
        }
        fetch(`https://jsonplaceholder.typicode.com/posts?limit=10&_page=${page}`)
            .then((response) => response.json())
            .then((results) => {
                this.setState({
                    loading: false,
                    page: page + 1,
                    posts: posts.concat(results)
                })
            })
            .catch(() => {
                this.setState({ loading: false });
            });
    }

    componentDidMount() {
        this.load();
    }

    handleLoadMore = () => {
        this.load();
    };

    render() {
        const { posts, loading } = this.state;
        return (
            <Fragment>
                {loading ? <div>Loading...</div> : <UserList onLoadMore={this.handleLoadMore} posts={posts} />}
            </Fragment>
        );
    }
}