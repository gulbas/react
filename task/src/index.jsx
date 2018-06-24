import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Clock from 'components/Container/Clock';
import Main from 'components/Main';
import UserList from 'containers/UserListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.sass';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {/*<Container/>*/}
                {/*<Main/>*/}
                <UserList/>
                <Clock/>
                <Footer/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('app'));