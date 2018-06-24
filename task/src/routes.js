import Container from 'components/Container/Container';
import Clock from 'components/Container/Clock';
import Main from 'components/Main';
import UserList from 'containers/UserListContainer';
import User from 'containers/UserContainer';


export default [
    {
        path: '/',
        exact: true,
        component: Main,
    },
    {
        path: '/users',
        exact: true,
        component: UserList,
    },
    {
        path: '/users/:id',
        exact: true,
        component: User,
    },
    {
        path: '/clock',
        exact: true,
        component: Clock,
    },
    {
        path: '/blog',
        exact: true,
        component: Container,
    },
]